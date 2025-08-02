import { type QuizResponse, type InsertQuizResponse, type SelectCanvasLead, type InsertCanvasLead, quizResponses, canvasLeads } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  saveQuizResponse(response: InsertQuizResponse): Promise<QuizResponse>;
  getQuizResponse(id: string): Promise<QuizResponse | undefined>;
  getAllQuizResponses(): Promise<QuizResponse[]>;
  
  saveCanvasLead(lead: InsertCanvasLead): Promise<SelectCanvasLead>;
  getCanvasLead(id: string): Promise<SelectCanvasLead | undefined>;
  getAllCanvasLeads(): Promise<SelectCanvasLead[]>;
}

export class DatabaseStorage implements IStorage {
  async saveQuizResponse(insertResponse: InsertQuizResponse): Promise<QuizResponse> {
    const id = randomUUID();
    const response: QuizResponse = { ...insertResponse, id };
    
    await db.insert(quizResponses).values({
      id,
      firmInfo: insertResponse.firmInfo,
      answers: insertResponse.answers,
    });
    
    return response;
  }

  async getQuizResponse(id: string): Promise<QuizResponse | undefined> {
    const [result] = await db.select().from(quizResponses).where(eq(quizResponses.id, id));
    
    if (!result) return undefined;
    
    return {
      id: result.id,
      firmInfo: result.firmInfo as any,
      answers: result.answers as any,
      completedAt: result.completedAt
    };
  }

  async getAllQuizResponses(): Promise<QuizResponse[]> {
    const results = await db.select().from(quizResponses);
    
    return results.map(result => ({
      id: result.id,
      firmInfo: result.firmInfo as any,
      answers: result.answers as any,
      completedAt: result.completedAt
    }));
  }

  async saveCanvasLead(insertLead: InsertCanvasLead): Promise<SelectCanvasLead> {
    const id = randomUUID();
    
    const [result] = await db.insert(canvasLeads).values({
      id,
      email: insertLead.email,
      whatsapp: insertLead.whatsapp,
    }).returning();
    
    return result;
  }

  async getCanvasLead(id: string): Promise<SelectCanvasLead | undefined> {
    const [result] = await db.select().from(canvasLeads).where(eq(canvasLeads.id, id));
    return result || undefined;
  }

  async getAllCanvasLeads(): Promise<SelectCanvasLead[]> {
    return await db.select().from(canvasLeads);
  }
}

export const storage = new DatabaseStorage();
