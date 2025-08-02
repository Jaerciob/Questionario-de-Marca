import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuizResponseSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Save quiz response
  app.post("/api/quiz-responses", async (req, res) => {
    try {
      const validatedData = insertQuizResponseSchema.parse(req.body);
      const response = await storage.saveQuizResponse(validatedData);
      res.json(response);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Dados inválidos", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Erro interno do servidor" 
        });
      }
    }
  });

  // Get quiz response by ID
  app.get("/api/quiz-responses/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const response = await storage.getQuizResponse(id);
      
      if (!response) {
        res.status(404).json({ 
          message: "Resposta não encontrada" 
        });
        return;
      }
      
      res.json(response);
    } catch (error) {
      res.status(500).json({ 
        message: "Erro interno do servidor" 
      });
    }
  });

  // Get all quiz responses (for analytics/admin purposes)
  app.get("/api/quiz-responses", async (req, res) => {
    try {
      const responses = await storage.getAllQuizResponses();
      res.json(responses);
    } catch (error) {
      res.status(500).json({ 
        message: "Erro interno do servidor" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
