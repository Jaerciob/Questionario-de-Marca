import { z } from "zod";
import { pgTable, text, timestamp, jsonb, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

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

// Drizzle Tables
export const quizResponses = pgTable("quiz_responses", {
  id: text("id").primaryKey(),
  firmInfo: jsonb("firm_info").notNull(),
  answers: jsonb("answers").notNull(),
  completedAt: timestamp("completed_at").defaultNow().notNull(),
});

export const canvasLeads = pgTable("canvas_leads", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  whatsapp: text("whatsapp").notNull(),
  requestedAt: timestamp("requested_at").defaultNow().notNull(),
});

// Zod schemas
export const insertCanvasLeadSchema = createInsertSchema(canvasLeads).omit({ 
  id: true, 
  requestedAt: true 
});

export type InsertCanvasLead = z.infer<typeof insertCanvasLeadSchema>;
export type SelectCanvasLead = typeof canvasLeads.$inferSelect;

// SEO/SEA Schemas
export const seoQuizAnswerSchema = z.record(z.string(), z.string());
export const seaQuizAnswerSchema = z.record(z.string(), z.string());

export const seoResultsSchema = z.object({
  maturityLevel: z.enum(["Iniciante", "Emergente", "Avançado"]),
  strategicFocus: z.string(),
  estimatedTime: z.string(),
  radarData: z.object({
    content: z.number(),
    technical: z.number(),
    authority: z.number(),
    local: z.number(),
    conversion: z.number(),
    maturity: z.number()
  }),
  actionPlan: z.array(z.object({
    title: z.string(),
    time: z.string(),
    priority: z.enum(["Alta", "Média", "Baixa"]),
    description: z.string(),
    example: z.string(),
    links: z.array(z.string())
  })),
  risks: z.array(z.string()),
  alternatives: z.array(z.string())
});

export const seaResultsSchema = z.object({
  experienceLevel: z.enum(["Iniciante", "Intermediário", "Avançado"]),
  platformFocus: z.string(),
  budgetRange: z.string(),
  radarData: z.object({
    planning: z.number(),
    targeting: z.number(),
    creative: z.number(),
    optimization: z.number(),
    analytics: z.number(),
    budget: z.number()
  }),
  actionPlan: z.array(z.object({
    title: z.string(),
    time: z.string(),
    priority: z.enum(["Alta", "Média", "Baixa"]),
    description: z.string(),
    example: z.string(),
    links: z.array(z.string())
  })),
  risks: z.array(z.string()),
  alternatives: z.array(z.string())
});

export const insertSeoQuizResponseSchema = z.object({
  answers: seoQuizAnswerSchema,
  results: seoResultsSchema,
  completedAt: z.date().default(() => new Date()),
});

export const insertSeaQuizResponseSchema = z.object({
  answers: seaQuizAnswerSchema,
  results: seaResultsSchema,
  completedAt: z.date().default(() => new Date()),
});

export type SeoQuizAnswers = z.infer<typeof seoQuizAnswerSchema>;
export type SeaQuizAnswers = z.infer<typeof seaQuizAnswerSchema>;
export type SeoResults = z.infer<typeof seoResultsSchema>;
export type SeaResults = z.infer<typeof seaResultsSchema>;
export type InsertSeoQuizResponse = z.infer<typeof insertSeoQuizResponseSchema>;
export type InsertSeaQuizResponse = z.infer<typeof insertSeaQuizResponseSchema>;
