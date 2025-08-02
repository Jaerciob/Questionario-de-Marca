import { type QuizResponse, type InsertQuizResponse } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  saveQuizResponse(response: InsertQuizResponse): Promise<QuizResponse>;
  getQuizResponse(id: string): Promise<QuizResponse | undefined>;
  getAllQuizResponses(): Promise<QuizResponse[]>;
}

export class MemStorage implements IStorage {
  private quizResponses: Map<string, QuizResponse>;

  constructor() {
    this.quizResponses = new Map();
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
}

export const storage = new MemStorage();
