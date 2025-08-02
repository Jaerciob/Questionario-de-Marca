import { type QuizResponse, type InsertQuizResponse, type CanvasLead, type InsertCanvasLead } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  saveQuizResponse(response: InsertQuizResponse): Promise<QuizResponse>;
  getQuizResponse(id: string): Promise<QuizResponse | undefined>;
  getAllQuizResponses(): Promise<QuizResponse[]>;
  
  saveCanvasLead(lead: InsertCanvasLead): Promise<CanvasLead>;
  getCanvasLead(id: string): Promise<CanvasLead | undefined>;
  getAllCanvasLeads(): Promise<CanvasLead[]>;
}

export class MemStorage implements IStorage {
  private quizResponses: Map<string, QuizResponse>;
  private canvasLeads: Map<string, CanvasLead>;

  constructor() {
    this.quizResponses = new Map();
    this.canvasLeads = new Map();
  }

  async saveQuizResponse(insertResponse: InsertQuizResponse): Promise<QuizResponse> {
    const id = randomUUID();
    const response: QuizResponse = { ...insertResponse, id };
    this.quizResponses.set(id, response);
    return response;
  }

  async getQuizResponse(id: string): Promise<QuizResponse | undefined> {
    return this.quizResponses.get(id);
  }

  async getAllQuizResponses(): Promise<QuizResponse[]> {
    return Array.from(this.quizResponses.values());
  }

  async saveCanvasLead(insertLead: InsertCanvasLead): Promise<CanvasLead> {
    const id = randomUUID();
    const lead: CanvasLead = { 
      ...insertLead, 
      id, 
      requestedAt: new Date() 
    };
    this.canvasLeads.set(id, lead);
    return lead;
  }

  async getCanvasLead(id: string): Promise<CanvasLead | undefined> {
    return this.canvasLeads.get(id);
  }

  async getAllCanvasLeads(): Promise<CanvasLead[]> {
    return Array.from(this.canvasLeads.values());
  }
}

export const storage = new MemStorage();
