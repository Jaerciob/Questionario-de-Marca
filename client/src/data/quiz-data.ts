export interface QuizQuestion {
  section: string;
  question: string;
  options: Array<{
    text: string;
    value: string;
  }>;
}

export const quizData: QuizQuestion[] = [
  // Identidade da Marca (5 questions)
  {
    section: "Identidade da Marca",
    question: "Qual é o propósito principal da sua marca?",
    options: [
      { text: "Resolver problemas jurídicos com excelência técnica", value: "technical" },
      { text: "Proteger e defender os direitos dos clientes", value: "protective" },
      { text: "Inovar no mercado jurídico com soluções criativas", value: "innovative" },
      { text: "Construir relacionamentos duradouros com clientes", value: "relational" }
    ]
  },
  {
    section: "Identidade da Marca",
    question: "Como você definiria a personalidade do seu escritório?",
    options: [
      { text: "Conservador e tradicional", value: "conservative" },
      { text: "Moderno e inovador", value: "modern" },
      { text: "Acessível e próximo", value: "accessible" },
      { text: "Autoritativo e respeitado", value: "authoritative" }
    ]
  },
  {
    section: "Identidade da Marca",
    question: "Qual valor você mais preza em seu trabalho?",
    options: [
      { text: "Integridade e ética", value: "integrity" },
      { text: "Eficiência e resultados", value: "efficiency" },
      { text: "Transparência e comunicação", value: "transparency" },
      { text: "Tradição e experiência", value: "tradition" }
    ]
  },
  {
    section: "Identidade da Marca",
    question: "Como seus clientes descrevem seu escritório?",
    options: [
      { text: "Confiável e seguro", value: "trustworthy" },
      { text: "Competente e especializado", value: "competent" },
      { text: "Humano e compreensivo", value: "humane" },
      { text: "Prestigioso e reconhecido", value: "prestigious" }
    ]
  },
  {
    section: "Identidade da Marca",
    question: "Qual aspecto diferencia seu escritório dos concorrentes?",
    options: [
      { text: "Expertise técnica superior", value: "expertise" },
      { text: "Atendimento personalizado", value: "personalized" },
      { text: "Preços competitivos", value: "competitive" },
      { text: "Tradição e reputação", value: "reputation" }
    ]
  },

  // Posicionamento (5 questions)
  {
    section: "Posicionamento",
    question: "Como você se posiciona no mercado jurídico?",
    options: [
      { text: "Especialista de nicho", value: "specialist" },
      { text: "Generalista confiável", value: "generalist" },
      { text: "Inovador disruptivo", value: "disruptor" },
      { text: "Líder tradicional", value: "leader" }
    ]
  },
  {
    section: "Posicionamento",
    question: "Qual é seu público-alvo prioritário?",
    options: [
      { text: "Grandes corporações", value: "corporate" },
      { text: "Pequenas e médias empresas", value: "sme" },
      { text: "Pessoas físicas", value: "individuals" },
      { text: "Mix equilibrado", value: "mixed" }
    ]
  },
  {
    section: "Posicionamento",
    question: "Como você precifica seus serviços?",
    options: [
      { text: "Premium - valor pela especialização", value: "premium" },
      { text: "Competitivo - equilíbrio custo-benefício", value: "competitive" },
      { text: "Acessível - democratização do direito", value: "accessible" },
      { text: "Variável conforme complexidade", value: "variable" }
    ]
  },
  {
    section: "Posicionamento",
    question: "Qual é sua principal vantagem competitiva?",
    options: [
      { text: "Conhecimento técnico aprofundado", value: "knowledge" },
      { text: "Rede de relacionamentos", value: "network" },
      { text: "Agilidade e eficiência", value: "agility" },
      { text: "Inovação em processos", value: "innovation" }
    ]
  },
  {
    section: "Posicionamento",
    question: "Como você vê o crescimento do seu escritório?",
    options: [
      { text: "Expansão geográfica", value: "geographic" },
      { text: "Aprofundamento em nichos", value: "specialization" },
      { text: "Diversificação de áreas", value: "diversification" },
      { text: "Crescimento orgânico controlado", value: "organic" }
    ]
  },

  // Comunicação (5 questions)
  {
    section: "Comunicação",
    question: "Como é o tom de voz da sua comunicação?",
    options: [
      { text: "Formal e técnico", value: "formal" },
      { text: "Profissional mas acessível", value: "professional" },
      { text: "Casual e próximo", value: "casual" },
      { text: "Autoritativo e respeitoso", value: "authoritative" }
    ]
  },
  {
    section: "Comunicação",
    question: "Quais canais você mais utiliza para se comunicar?",
    options: [
      { text: "Website e e-mail profissional", value: "traditional" },
      { text: "Redes sociais e blog", value: "digital" },
      { text: "Eventos e networking presencial", value: "events" },
      { text: "Mix de canais digitais e presenciais", value: "mixed" }
    ]
  },
  {
    section: "Comunicação",
    question: "Como você aborda marketing jurídico?",
    options: [
      { text: "Marketing de conteúdo educativo", value: "content" },
      { text: "Networking e indicações", value: "networking" },
      { text: "Presença digital forte", value: "digital" },
      { text: "Approach conservador e discreto", value: "conservative" }
    ]
  },
  {
    section: "Comunicação",
    question: "Qual é sua frequência de comunicação com clientes?",
    options: [
      { text: "Contato constante e proativo", value: "constant" },
      { text: "Updates regulares sobre casos", value: "regular" },
      { text: "Comunicação sob demanda", value: "ondemand" },
      { text: "Comunicação formal e estruturada", value: "structured" }
    ]
  },
  {
    section: "Comunicação",
    question: "Como você educa seu mercado?",
    options: [
      { text: "Artigos e conteúdo especializado", value: "articles" },
      { text: "Palestras e workshops", value: "speaking" },
      { text: "Redes sociais e posts educativos", value: "social" },
      { text: "Consultoria e orientação direta", value: "consulting" }
    ]
  },

  // Experiência do Cliente (5 questions)
  {
    section: "Experiência do Cliente",
    question: "Como é o primeiro contato do cliente com seu escritório?",
    options: [
      { text: "Recepção presencial acolhedora", value: "welcoming" },
      { text: "Site profissional e formulários online", value: "digital" },
      { text: "Consulta inicial estruturada", value: "structured" },
      { text: "Atendimento personalizado imediato", value: "immediate" }
    ]
  },
  {
    section: "Experiência do Cliente",
    question: "Como você acompanha a satisfação dos clientes?",
    options: [
      { text: "Pesquisas de satisfação regulares", value: "surveys" },
      { text: "Feedback informal durante atendimento", value: "informal" },
      { text: "Métricas de retenção e indicação", value: "metrics" },
      { text: "Reuniões de follow-up estruturadas", value: "followup" }
    ]
  },
  {
    section: "Experiência do Cliente",
    question: "Qual é seu tempo médio de resposta?",
    options: [
      { text: "Até 2 horas", value: "fast" },
      { text: "Até 24 horas", value: "quick" },
      { text: "Até 48 horas", value: "standard" },
      { text: "Conforme urgência do caso", value: "variable" }
    ]
  },
  {
    section: "Experiência do Cliente",
    question: "Como você entrega valor além do serviço jurídico?",
    options: [
      { text: "Consultoria estratégica de negócios", value: "strategic" },
      { text: "Educação e orientação preventiva", value: "educational" },
      { text: "Rede de contatos e parcerias", value: "network" },
      { text: "Suporte emocional e tranquilidade", value: "emotional" }
    ]
  },
  {
    section: "Experiência do Cliente",
    question: "Como seus clientes preferem receber informações?",
    options: [
      { text: "Relatórios formais detalhados", value: "formal" },
      { text: "Comunicação digital ágil", value: "digital" },
      { text: "Reuniões presenciais regulares", value: "meetings" },
      { text: "Mix personalizado por cliente", value: "customized" }
    ]
  }
];
