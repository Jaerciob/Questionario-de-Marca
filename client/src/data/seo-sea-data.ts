// SEO Quiz Questions
export const seoQuestions = [
  {
    id: 1,
    question: "Qual o principal objetivo do seu escritório de advocacia com SEO?",
    options: [
      { value: "traffic", text: "Atrair mais visitantes para o site do escritório", points: { content: 3, technical: 1 } },
      { value: "leads", text: "Gerar mais consultas e contatos de potenciais clientes", points: { conversion: 3, content: 2 } },
      { value: "cases", text: "Aumentar captação de casos jurídicos", points: { conversion: 3, technical: 2 } },
      { value: "authority", text: "Estabelecer autoridade jurídica no Google", points: { authority: 3, content: 2 } },
      { value: "local", text: "Aparecer em buscas locais (escritório próximo, advogado em [cidade])", points: { local: 3, technical: 1 } }
    ]
  },
  {
    id: 2,
    question: "Como você avalia a presença digital atual do seu escritório no Google?",
    options: [
      { value: "none", text: "Nunca investimos em SEO jurídico", points: { maturity: 0 } },
      { value: "basic", text: "Temos site, mas não aparece quando clientes buscam advogados", points: { maturity: 1 } },
      { value: "some", text: "Aparecemos em algumas buscas jurídicas, mas queremos mais", points: { maturity: 2 } },
      { value: "good", text: "Recebemos clientes pelo Google, queremos expandir", points: { maturity: 3 } },
      { value: "advanced", text: "Temos estratégia SEO estruturada, queremos otimizar", points: { maturity: 4 } }
    ]
  },
  {
    id: 3,
    question: "O escritório produz conteúdo jurídico otimizado para SEO?",
    options: [
      { value: "no-content", text: "Não produzimos artigos ou conteúdo jurídico", points: { maturity: 0, content: 1 } },
      { value: "no-seo", text: "Escrevemos sobre direito, mas sem pensar em SEO", points: { maturity: 1, content: 2 } },
      { value: "keywords", text: "Criamos conteúdo focado em termos jurídicos específicos", points: { maturity: 2, content: 3 } },
      { value: "calendar", text: "Temos calendário editorial jurídico baseado em SEO", points: { maturity: 3, content: 4 } }
    ]
  },
  {
    id: 4,
    question: "O site do escritório está tecnicamente preparado para SEO?",
    options: [
      { value: "unknown", text: "Não tenho conhecimento técnico para avaliar", points: { maturity: 0, technical: 1 } },
      { value: "no", text: "Creio que precisa de melhorias técnicas", points: { maturity: 1, technical: 1 } },
      { value: "ok", text: "Funciona bem, mas pode ter otimizações", points: { maturity: 2, technical: 2 } },
      { value: "optimized", text: "Site já foi otimizado por profissional de SEO", points: { maturity: 3, technical: 4 } }
    ]
  },
  {
    id: 5,
    question: "O escritório acompanha métricas de performance digital?",
    options: [
      { value: "none", text: "Não monitoramos resultados digitais", points: { maturity: 0 } },
      { value: "analytics", text: "Apenas vemos visitas básicas no Google Analytics", points: { maturity: 1 } },
      { value: "both", text: "Usamos Google Search Console e Analytics", points: { maturity: 2 } },
      { value: "advanced", text: "Temos dashboards completos de SEO jurídico", points: { maturity: 3 } }
    ]
  },
  {
    id: 6,
    question: "Qual é a maior dificuldade do escritório com marketing digital?",
    options: [
      { value: "start", text: "Não sabemos por onde começar com SEO jurídico", points: { content: 2, technical: 2 } },
      { value: "time", text: "Falta tempo entre os casos para cuidar do marketing", points: { content: 3, authority: 1 } },
      { value: "understanding", text: "Não entendemos se nossa estratégia está funcionando", points: { technical: 2, conversion: 2 } },
      { value: "content-quality", text: "Dificuldade em escrever conteúdo jurídico atrativo", points: { content: 4 } },
      { value: "competition", text: "Muitos escritórios competindo nas mesmas buscas", points: { authority: 3, content: 2 } }
    ]
  },
  {
    id: 7,
    question: "Quanto tempo o escritório pode dedicar ao SEO mensalmente?",
    options: [
      { value: "minimal", text: "Menos de 5 horas (entre audiências e petições)", points: { maturity: 0 } },
      { value: "some", text: "5-15 horas (dedicação básica ao marketing)", points: { maturity: 1 } },
      { value: "regular", text: "15-40 horas (investimento regular em conteúdo)", points: { maturity: 2 } },
      { value: "intensive", text: "Mais de 40 horas (estratégia intensiva de growth)", points: { maturity: 3 } }
    ]
  },
  {
    id: 8,
    question: "Qual o orçamento mensal do escritório para marketing digital?",
    options: [
      { value: "minimal", text: "Até R$ 500 (investimento inicial)", points: { maturity: 0 } },
      { value: "basic", text: "R$ 500 - R$ 2.000 (crescimento básico)", points: { maturity: 1 } },
      { value: "medium", text: "R$ 2.000 - R$ 8.000 (expansão consolidada)", points: { maturity: 2 } },
      { value: "high", text: "Acima de R$ 8.000 (grande escritório)", points: { maturity: 3 } }
    ]
  }
];

// SEA Quiz Questions
export const seaQuestions = [
  {
    id: 1,
    question: "Qual o principal objetivo do escritório com anúncios pagos?",
    options: [
      { value: "awareness", text: "Aumentar reconhecimento da marca do escritório", points: { planning: 2, creative: 3 } },
      { value: "leads", text: "Gerar consultas jurídicas qualificadas", points: { targeting: 3, optimization: 2 } },
      { value: "cases", text: "Captar casos e clientes diretamente", points: { optimization: 3, analytics: 2 } },
      { value: "traffic", text: "Atrair visitantes interessados em serviços jurídicos", points: { planning: 2, targeting: 2 } }
    ]
  },
  {
    id: 2,
    question: "Qual a experiência do escritório com anúncios digitais?",
    options: [
      { value: "none", text: "Nunca fizemos campanhas pagas para o escritório", points: { planning: 0, targeting: 0, creative: 0, optimization: 0, analytics: 0, budget: 0 } },
      { value: "basic", text: "Já testamos Google Ads, mas sem resultados satisfatórios", points: { planning: 1, targeting: 1, creative: 1, optimization: 0, analytics: 1, budget: 1 } },
      { value: "some", text: "Temos campanhas ativas captando alguns clientes", points: { planning: 2, targeting: 2, creative: 2, optimization: 1, analytics: 2, budget: 2 } },
      { value: "experienced", text: "Usamos anúncios pagos há mais de 1 ano com sucesso", points: { planning: 3, targeting: 3, creative: 3, optimization: 2, analytics: 3, budget: 3 } }
    ]
  },
  {
    id: 3,
    question: "O escritório conhece bem seu público-alvo?",
    options: [
      { value: "no", text: "Não sabemos quem são nossos clientes ideais", points: { targeting: 0, planning: 1 } },
      { value: "basic", text: "Sabemos o perfil geral (pessoa física/jurídica)", points: { targeting: 1, planning: 2 } },
      { value: "good", text: "Conhecemos idade, renda e áreas de interesse dos clientes", points: { targeting: 2, planning: 3 } },
      { value: "detailed", text: "Temos personas detalhadas com comportamento e necessidades jurídicas", points: { targeting: 3, planning: 3 } }
    ]
  },
  {
    id: 4,
    question: "Quais plataformas o escritório pretende usar para anúncios?",
    options: [
      { value: "google-only", text: "Apenas Google Ads (buscas por advogados)", points: { planning: 2, optimization: 2 } },
      { value: "social-only", text: "Apenas redes sociais (Facebook, Instagram, LinkedIn)", points: { creative: 3, targeting: 2 } },
      { value: "multiple", text: "Google Ads + Redes Sociais (estratégia completa)", points: { planning: 3, targeting: 3 } },
      { value: "unsure", text: "Não sabemos qual plataforma escolher", points: { planning: 0 } }
    ]
  },
  {
    id: 5,
    question: "Como o escritório acompanha resultados dos investimentos em anúncios?",
    options: [
      { value: "none", text: "Não monitoramos os resultados das campanhas", points: { analytics: 0 } },
      { value: "basic", text: "Vemos quantas pessoas viram e clicaram nos anúncios", points: { analytics: 1 } },
      { value: "intermediate", text: "Acompanhamos quantos contatos/consultas geramos", points: { analytics: 2, optimization: 1 } },
      { value: "advanced", text: "Medimos ROI completo: custo por cliente vs honorários", points: { analytics: 3, optimization: 2 } }
    ]
  },
  {
    id: 6,
    question: "Qual a capacidade do escritório em criar conteúdo para anúncios?",
    options: [
      { value: "none", text: "Não sabemos criar materiais para campanhas", points: { creative: 0 } },
      { value: "basic", text: "Conseguimos escrever textos jurídicos, mas não imagens", points: { creative: 1 } },
      { value: "intermediate", text: "Criamos materiais simples (Canva, PowerPoint)", points: { creative: 2 } },
      { value: "professional", text: "Temos designer ou agência especializada em marketing jurídico", points: { creative: 3 } }
    ]
  },
  {
    id: 7,
    question: "Quanto tempo o escritório pode dedicar para otimizar campanhas?",
    options: [
      { value: "minimal", text: "Menos de 5 horas mensais (foco nos casos)", points: { optimization: 0 } },
      { value: "some", text: "5-15 horas mensais (acompanhamento básico)", points: { optimization: 1 } },
      { value: "regular", text: "15-40 horas mensais (gestão ativa)", points: { optimization: 2 } },
      { value: "intensive", text: "Mais de 40 horas mensais (dedicação total)", points: { optimization: 3 } }
    ]
  },
  {
    id: 8,
    question: "Qual orçamento mensal o escritório tem para anúncios pagos?",
    options: [
      { value: "low", text: "Até R$ 1.000 (escritório iniciante)", points: { budget: 1 } },
      { value: "medium", text: "R$ 1.000 - R$ 5.000 (escritório em crescimento)", points: { budget: 2 } },
      { value: "high", text: "R$ 5.000 - R$ 15.000 (escritório estabelecido)", points: { budget: 3 } },
      { value: "very-high", text: "Acima de R$ 15.000 (grande escritório)", points: { budget: 4 } }
    ]
  }
];

// SEO Action Plans by Maturity Level
export const seoActionPlans = {
  'Iniciante': {
    steps: [
      {
        title: 'Configuração Básica e Auditoria',
        time: '2 semanas',
        priority: 'Alta' as const,
        description: 'Instalar ferramentas essenciais e fazer diagnóstico técnico inicial.',
        example: 'Configure Google Analytics, Search Console, instale Yoast SEO (WordPress)',
        links: ['https://analytics.google.com', 'https://search.google.com/search-console']
      },
      {
        title: 'Pesquisa de Palavras-chave',
        time: '1 semana',
        priority: 'Alta' as const,
        description: 'Identificar palavras-chave relevantes com baixa competição.',
        example: 'Use "como fazer SEO para dentistas" ao invés de apenas "SEO"',
        links: ['https://ads.google.com/keyword-planner', 'https://answerthepublic.com']
      },
      {
        title: 'Otimização On-Page Básica',
        time: '3 semanas',
        priority: 'Alta' as const,
        description: 'Otimizar títulos, meta descriptions e estrutura de headings.',
        example: 'Título: "Guia Completo de SEO para Iniciantes [2024]"',
        links: ['https://developers.google.com/search/docs']
      },
      {
        title: 'Criação de Conteúdo Inicial',
        time: '4 semanas',
        priority: 'Média' as const,
        description: 'Produzir 8-12 artigos otimizados focados nas palavras-chave selecionadas.',
        example: 'Blog posts de 1000+ palavras respondendo dúvidas do seu público',
        links: ['https://buzzsumo.com', 'https://coschedule.com']
      }
    ],
    risks: ['Falta de conhecimento técnico', 'Tempo limitado para produção de conteúdo'],
    alternatives: ['Contratar freelancer SEO', 'Usar templates de conteúdo', 'Focar em long tail keywords']
  },
  'Emergente': {
    steps: [
      {
        title: 'Auditoria Técnica Completa',
        time: '2 semanas',
        priority: 'Alta' as const,
        description: 'Identificar e corrigir problemas técnicos que impedem o crescimento.',
        example: 'Melhorar Core Web Vitals, corrigir erros 404, implementar schema markup',
        links: ['https://pagespeed.web.dev', 'https://www.screaming-frog.co.uk']
      },
      {
        title: 'Estratégia de Content Clusters',
        time: '3 semanas',
        priority: 'Alta' as const,
        description: 'Criar clusters de conteúdo interligado para construir autoridade topical.',
        example: 'Página pilar "Marketing Digital" + 10 subtópicos relacionados',
        links: ['https://blog.hubspot.com/marketing/topic-clusters-seo']
      },
      {
        title: 'Otimização para Conversão',
        time: '2 semanas',
        priority: 'Média' as const,
        description: 'Implementar CTAs, landing pages e funis de conversão.',
        example: 'Adicionar formulários de lead magnet em posts de alta performance',
        links: ['https://unbounce.com', 'https://www.hotjar.com']
      },
      {
        title: 'Link Building Inicial',
        time: '4 semanas',
        priority: 'Média' as const,
        description: 'Começar estratégia de construção de backlinks de qualidade.',
        example: 'Guest posts em blogs do nicho, parcerias e menções',
        links: ['https://www.helpareporter.com', 'https://ahrefs.com']
      }
    ],
    risks: ['Competição crescente', 'Necessidade de investimento em ferramentas'],
    alternatives: ['Automatizar parte da produção', 'Parcerias estratégicas', 'Foco em nichos específicos']
  },
  'Avançado': {
    steps: [
      {
        title: 'Otimização Técnica Avançada',
        time: '3 semanas',
        priority: 'Alta' as const,
        description: 'Implementar técnicas avançadas de SEO técnico e performance.',
        example: 'Core Web Vitals otimizados, JavaScript SEO, estrutura de dados avançada',
        links: ['https://web.dev', 'https://developers.google.com/search']
      },
      {
        title: 'Estratégia de Autoridade',
        time: '6 semanas',
        priority: 'Alta' as const,
        description: 'Escalar link building e construir autoridade de domínio.',
        example: 'Campanhas de RP digital, colaborações com influenciadores',
        links: ['https://majestic.com', 'https://moz.com/link-explorer']
      },
      {
        title: 'SEO Internacional/Multilíngue',
        time: '4 semanas',
        priority: 'Média' as const,
        description: 'Expandir para novos mercados e idiomas.',
        example: 'Implementar hreflang, adaptar conteúdo para diferentes regiões',
        links: ['https://support.google.com/webmasters/answer/189077']
      },
      {
        title: 'Automação e Escalabilidade',
        time: '3 semanas',
        priority: 'Média' as const,
        description: 'Implementar ferramentas e processos para escalar operações.',
        example: 'APIs para monitoramento, automação de relatórios, IA para conteúdo',
        links: ['https://serpapi.com', 'https://www.semrush.com/api']
      }
    ],
    risks: ['Saturação do mercado', 'Mudanças de algoritmo'],
    alternatives: ['Diversificar canais', 'Investir em novas tecnologias', 'Expandir equipe']
  }
};

// SEA Action Plans by Experience Level
export const seaActionPlans = {
  'Iniciante': {
    steps: [
      {
        title: 'Configuração de Contas e Pixels',
        time: '1 semana',
        priority: 'Alta' as const,
        description: 'Configurar contas nas plataformas e implementar tracking básico.',
        example: 'Criar conta Google Ads, instalar Google Tag Manager e Facebook Pixel',
        links: ['https://ads.google.com', 'https://tagmanager.google.com', 'https://business.facebook.com']
      },
      {
        title: 'Pesquisa de Público-Alvo',
        time: '1 semana',
        priority: 'Alta' as const,
        description: 'Definir personas e segmentações para as campanhas.',
        example: 'Mulheres 25-45 anos interessadas em fitness e alimentação saudável',
        links: ['https://www.facebook.com/business/insights/audience', 'https://ads.google.com/audience-manager']
      },
      {
        title: 'Primeira Campanha de Teste',
        time: '2 semanas',
        priority: 'Alta' as const,
        description: 'Lançar campanha com orçamento controlado para validar estratégia.',
        example: 'Campanha de busca com R$ 20/dia focada em 5-10 palavras-chave',
        links: ['https://support.google.com/google-ads']
      },
      {
        title: 'Otimização Baseada em Dados',
        time: '3 semanas',
        priority: 'Média' as const,
        description: 'Analisar resultados e otimizar campanhas com base nos dados.',
        example: 'Pausar keywords com CPA alto, aumentar budget em anúncios com melhor ROI',
        links: ['https://analytics.google.com', 'https://www.facebook.com/business/help']
      }
    ],
    risks: ['Orçamento limitado queimado rapidamente', 'Falta de experiência em otimização'],
    alternatives: ['Começar com campanhas automáticas', 'Contratar consultor freelancer', 'Usar templates prontos']
  },
  'Intermediário': {
    steps: [
      {
        title: 'Auditoria e Reestruturação',
        time: '2 semanas',
        priority: 'Alta' as const,
        description: 'Analisar campanhas existentes e reestruturar para melhor performance.',
        example: 'Segregar campanhas por produto/serviço, implementar estrutura SKAG',
        links: ['https://www.wordstream.com/skags']
      },
      {
        title: 'Implementação de Conversões Avançadas',
        time: '1 semana',
        priority: 'Alta' as const,
        description: 'Configurar tracking de conversões detalhado e eventos personalizados.',
        example: 'Rastrear micro-conversões: tempo no site, páginas visitadas, downloads',
        links: ['https://support.google.com/google-ads/answer/1722054']
      },
      {
        title: 'Estratégias de Remarketing',
        time: '3 semanas',
        priority: 'Média' as const,
        description: 'Criar campanhas para re-engajar visitantes e clientes anteriores.',
        example: 'Remarketing para carrinho abandonado com desconto especial',
        links: ['https://support.google.com/google-ads/answer/2453998']
      },
      {
        title: 'Expansão Multicanal',
        time: '4 semanas',
        priority: 'Média' as const,
        description: 'Expandir para novas plataformas e formatos de anúncios.',
        example: 'YouTube Ads para vídeos, LinkedIn para B2B, Shopping Ads para e-commerce',
        links: ['https://ads.youtube.com', 'https://business.linkedin.com/marketing-solutions']
      }
    ],
    risks: ['Complexidade crescente das campanhas', 'Competição aumentando custos'],
    alternatives: ['Focar em nichos específicos', 'Automatizar otimizações', 'Testar novos formatos creativos']
  },
  'Avançado': {
    steps: [
      {
        title: 'Automação e Machine Learning',
        time: '3 semanas',
        priority: 'Alta' as const,
        description: 'Implementar estratégias automatizadas e usar IA para otimização.',
        example: 'Smart Bidding, Dynamic Search Ads, Automated Extensions',
        links: ['https://support.google.com/google-ads/answer/2979071']
      },
      {
        title: 'Atribuição Avançada',
        time: '2 semanas',
        priority: 'Alta' as const,
        description: 'Implementar modelos de atribuição personalizados.',
        example: 'Modelo de atribuição baseado em dados, cross-device tracking',
        links: ['https://support.google.com/analytics/answer/1662518']
      },
      {
        title: 'Estratégias de Brand Awareness',
        time: '4 semanas',
        priority: 'Média' as const,
        description: 'Campanhas focadas em construção de marca e recall.',
        example: 'Video campaigns no YouTube, Display campaigns em sites premium',
        links: ['https://www.thinkwithgoogle.com']
      },
      {
        title: 'Integração com Ferramentas Avançadas',
        time: '3 semanas',
        priority: 'Média' as const,
        description: 'Conectar campanhas com CRM, BI e outras ferramentas empresariais.',
        example: 'Integração com Salesforce, dashboards personalizados, APIs',
        links: ['https://developers.google.com/google-ads/api']
      }
    ],
    risks: ['Mudanças constantes nas plataformas', 'Necessidade de orçamentos altos'],
    alternatives: ['Diversificar plataformas', 'Investir em equipe especializada', 'Automatizar processos']
  }
};