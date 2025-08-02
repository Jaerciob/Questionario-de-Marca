import { z } from "zod";

export const insertFirmInfoSchema = z.object({
  name: z.string().min(1, "Nome do escritório é obrigatório"),
  size: z.enum(["solo", "small", "medium", "large"]),
  specialty: z.string().min(1, "Área de atuação é obrigatória"),
  target: z.string().min(1, "Público-alvo é obrigatório"),
  years: z.enum(["0-2", "3-5", "6-10", "11-20", "20+"]),
  mission: z.string().min(10, "Missão deve ter pelo menos 10 caracteres"),
});

export const insertQuizResponseSchema = z.object({
  firmInfo: insertFirmInfoSchema,
  answers: z.record(z.string(), z.string()),
  completedAt: z.date().default(() => new Date()),
});

export type InsertFirmInfo = z.infer<typeof insertFirmInfoSchema>;
export type InsertQuizResponse = z.infer<typeof insertQuizResponseSchema>;

export interface QuizResponse extends InsertQuizResponse {
  id: string;
}

export interface QuizResults {
  scores: {
    identity: number;
    positioning: number;
    communication: number;
    experience: number;
  };
  archetype: {
    name: string;
    description: string;
    icon: string;
    characteristics: string[];
    examples: string[];
  };
  colorPalette: {
    primary: string[];
    secondary: string[];
    psychology: string;
  };
  recommendations: Array<{
    title: string;
    description: string;
    priority: "high" | "medium" | "low";
    category: string;
  }>;
  overallScore: number;
}
