import type { InsertFirmInfo } from "@shared/schema";
import { archetypes, type BrandArchetype } from "@/data/archetypes";

export function calculateScores(answers: Record<string, string>) {
  const scores = {
    identity: 0,
    positioning: 0,
    communication: 0,
    experience: 0
  };

  // Question mapping to categories
  const categoryQuestions = {
    identity: [0, 1, 2, 3, 4],
    positioning: [5, 6, 7, 8, 9],
    communication: [10, 11, 12, 13, 14],
    experience: [15, 16, 17, 18, 19]
  };

  // Scoring logic based on answer patterns
  const scoringRules: Record<string, number> = {
    // High-value answers
    "technical": 20,
    "protective": 18,
    "innovative": 17,
    "relational": 19,
    "modern": 18,
    "authoritative": 17,
    "integrity": 20,
    "efficiency": 18,
    "transparency": 19,
    "trustworthy": 20,
    "competent": 19,
    "humane": 17,
    "prestigious": 16,
    "expertise": 20,
    "personalized": 19,
    "reputation": 17,
    "specialist": 19,
    "leader": 18,
    "premium": 17,
    "knowledge": 20,
    "innovation": 18,
    "specialization": 19,
    "professional": 19,
    "content": 19,
    "constant": 20,
    "articles": 18,
    "welcoming": 18,
    "surveys": 19,
    "fast": 20,
    "strategic": 19,
    "customized": 18,
    // Medium-value answers
    "accessible": 16,
    "tradition": 15,
    "competitive": 15,
    "generalist": 14,
    "mixed": 15,
    "variable": 14,
    "agility": 17,
    "organic": 15,
    "traditional": 13,
    "networking": 15,
    "regular": 16,
    "speaking": 16,
    "structured": 16,
    "informal": 14,
    "quick": 17,
    "educational": 17,
    "meetings": 15,
    // Lower-value answers
    "events": 12,
    "conservative": 11,
    "ondemand": 13,
    "consulting": 14,
    "immediate": 15,
    "metrics": 15,
    "standard": 14,
    "emotional": 16,
    "digital": 15,
    "network": 14,
    "formal": 13
  };

  // Calculate scores for each category
  Object.entries(categoryQuestions).forEach(([category, questionIndices]) => {
    let categoryScore = 0;
    questionIndices.forEach(questionIndex => {
      const answer = answers[questionIndex.toString()];
      if (answer && scoringRules[answer]) {
        categoryScore += scoringRules[answer];
      } else if (answer) {
        // Default score for unmapped answers
        categoryScore += 12;
      }
    });
    
    // Normalize to 0-100 scale (5 questions * max 20 points = 100)
    scores[category as keyof typeof scores] = Math.min(100, Math.max(0, categoryScore));
  });

  return scores;
}

export function determineArchetype(
  scores: ReturnType<typeof calculateScores>,
  answers: Record<string, string>
): BrandArchetype {
  // Analyze answer patterns to determine archetype
  const answerValues = Object.values(answers);
  
  // Count characteristics
  const characteristics = {
    protective: 0,
    specialist: 0,
    counselor: 0,
    innovative: 0,
    builder: 0
  };

  // Protective archetype indicators
  if (answerValues.includes("protective") || answerValues.includes("trustworthy") || answerValues.includes("traditional")) {
    characteristics.protective += 2;
  }
  if (answerValues.includes("conservative") || answerValues.includes("formal")) {
    characteristics.protective += 1;
  }

  // Specialist archetype indicators
  if (answerValues.includes("technical") || answerValues.includes("expertise") || answerValues.includes("specialist")) {
    characteristics.specialist += 2;
  }
  if (answerValues.includes("competent") || answerValues.includes("knowledge")) {
    characteristics.specialist += 1;
  }

  // Counselor archetype indicators
  if (answerValues.includes("relational") || answerValues.includes("humane") || answerValues.includes("transparency")) {
    characteristics.counselor += 2;
  }
  if (answerValues.includes("accessible") || answerValues.includes("professional")) {
    characteristics.counselor += 1;
  }

  // Innovative archetype indicators
  if (answerValues.includes("innovative") || answerValues.includes("modern") || answerValues.includes("innovation")) {
    characteristics.innovative += 2;
  }
  if (answerValues.includes("disruptor") || answerValues.includes("digital")) {
    characteristics.innovative += 1;
  }

  // Builder archetype indicators
  if (answerValues.includes("efficiency") || answerValues.includes("agility") || answerValues.includes("strategic")) {
    characteristics.builder += 2;
  }
  if (answerValues.includes("premium") || answerValues.includes("fast")) {
    characteristics.builder += 1;
  }

  // Determine dominant archetype
  const dominantArchetype = Object.entries(characteristics).reduce((a, b) => 
    characteristics[a[0] as keyof typeof characteristics] > characteristics[b[0] as keyof typeof characteristics] ? a : b
  )[0];

  const archetypeMap = {
    protective: "O Protetor",
    specialist: "O Especialista", 
    counselor: "O Conselheiro",
    innovative: "O Inovador",
    builder: "O Construtor"
  };

  const selectedArchetype = archetypeMap[dominantArchetype as keyof typeof archetypeMap];
  return archetypes[selectedArchetype];
}

export function generateColorPalette(archetype: BrandArchetype) {
  return {
    primary: archetype.colors.primary,
    secondary: archetype.colors.secondary,
    psychology: archetype.psychology
  };
}

export function generateRecommendations(
  scores: ReturnType<typeof calculateScores>,
  firmInfo: InsertFirmInfo
) {
  const recommendations = [];

  // Identity recommendations
  if (scores.identity < 70) {
    recommendations.push({
      title: "Fortaleça sua Identidade de Marca",
      description: `Para ${firmInfo.name}, é crucial desenvolver uma identidade mais clara. Considere criar um brand book que defina missão, visão, valores e personalidade. Isso ajudará a diferenciá-lo no mercado de ${firmInfo.specialty}.`,
      priority: "high" as const,
      category: "Identidade"
    });
  } else if (scores.identity < 85) {
    recommendations.push({
      title: "Refine sua Identidade Visual",
      description: "Sua identidade está no caminho certo, mas pode ser aprimorada. Considere uma atualização visual que reflita melhor seus valores e atraia seu público-alvo.",
      priority: "medium" as const,
      category: "Identidade"
    });
  }

  // Positioning recommendations
  if (scores.positioning < 70) {
    recommendations.push({
      title: "Defina seu Posicionamento Único",
      description: `Para escritórios que atendem ${firmInfo.target}, é essencial ter um posicionamento claro. Desenvolva uma proposta de valor única que destaque seus diferenciais competitivos em ${firmInfo.specialty}.`,
      priority: "high" as const,
      category: "Posicionamento"
    });
  } else if (scores.positioning < 85) {
    recommendations.push({
      title: "Comunique Melhor seu Posicionamento",
      description: "Seu posicionamento existe, mas precisa ser comunicado de forma mais clara e consistente em todos os pontos de contato com clientes.",
      priority: "medium" as const,
      category: "Posicionamento"
    });
  }

  // Communication recommendations
  if (scores.communication < 70) {
    recommendations.push({
      title: "Desenvolva uma Estratégia de Comunicação",
      description: "Implemente um plano de comunicação integrado, incluindo presença digital, marketing de conteúdo e relacionamento com clientes. Considere criar conteúdo educativo sobre seus temas de especialidade.",
      priority: "high" as const,
      category: "Comunicação"
    });
  } else if (scores.communication < 85) {
    recommendations.push({
      title: "Aprimore sua Presença Digital",
      description: "Sua comunicação é boa, mas pode ser potencializada. Invista em SEO, marketing de conteúdo e presença nas redes sociais profissionais.",
      priority: "medium" as const,
      category: "Comunicação"
    });
  }

  // Experience recommendations
  if (scores.experience < 70) {
    recommendations.push({
      title: "Melhore a Experiência do Cliente",
      description: "Implemente processos para melhorar o atendimento, reduzir tempo de resposta e aumentar a satisfação dos clientes. Considere pesquisas regulares de satisfação.",
      priority: "high" as const,
      category: "Experiência"
    });
  } else if (scores.experience < 85) {
    recommendations.push({
      title: "Padronize a Experiência do Cliente",
      description: "Crie protocolos para garantir consistência na experiência do cliente em todos os pontos de contato com seu escritório.",
      priority: "medium" as const,
      category: "Experiência"
    });
  }

  // Size-specific recommendations
  if (firmInfo.size === "solo") {
    recommendations.push({
      title: "Maximize sua Presença Pessoal",
      description: "Como advogado autônomo, sua marca pessoal é fundamental. Invista em networking, presença digital e posicionamento como especialista em sua área.",
      priority: "medium" as const,
      category: "Crescimento"
    });
  } else if (firmInfo.size === "large") {
    recommendations.push({
      title: "Mantenha Consistência da Marca",
      description: "Com uma equipe grande, é crucial manter consistência na comunicação e experiência da marca em todos os advogados e departamentos.",
      priority: "medium" as const,
      category: "Gestão"
    });
  }

  // Always add a positive reinforcement
  const bestCategory = Object.entries(scores).reduce((a, b) => scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b)[0];
  const categoryNames = {
    identity: "Identidade de Marca",
    positioning: "Posicionamento", 
    communication: "Comunicação",
    experience: "Experiência do Cliente"
  };

  recommendations.push({
    title: `Continue Investindo em ${categoryNames[bestCategory as keyof typeof categoryNames]}`,
    description: `Sua ${categoryNames[bestCategory as keyof typeof categoryNames].toLowerCase()} é um ponto forte com ${scores[bestCategory as keyof typeof scores]} pontos. Continue aprimorando esta área para manter sua vantagem competitiva.`,
    priority: "low" as const,
    category: "Fortalezas"
  });

  return recommendations;
}
