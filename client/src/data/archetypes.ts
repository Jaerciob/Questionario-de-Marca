export interface BrandArchetype {
  name: string;
  icon: string;
  description: string;
  characteristics: string[];
  examples: string[];
  colors: {
    primary: string[];
    secondary: string[];
  };
  psychology: string;
}

export const archetypes: Record<string, BrandArchetype> = {
  "O Protetor": {
    name: "O Protetor",
    icon: "fas fa-shield-alt",
    description: "Seu escritório demonstra características do arquétipo 'O Protetor' - focado em segurança, confiabilidade e proteção dos direitos dos clientes. Essa marca transmite estabilidade e competência técnica.",
    characteristics: ["Confiável", "Seguro", "Estável", "Protetor", "Tradicional"],
    examples: ["Mattos Filho", "Pinheiro Neto", "Machado Meyer"],
    colors: {
      primary: ["#1E3A8A", "#3B82F6", "#60A5FA"],
      secondary: ["#374151", "#6B7280"]
    },
    psychology: "Cores que transmitem confiança, estabilidade e proteção. O azul evoca segurança e profissionalismo."
  },
  "O Especialista": {
    name: "O Especialista",
    icon: "fas fa-graduation-cap",
    description: "Seu escritório reflete o arquétipo 'O Especialista' - reconhecido pela expertise técnica superior e conhecimento aprofundado. Clientes buscam sua autoridade no assunto.",
    characteristics: ["Conhecedor", "Técnico", "Autoridade", "Especializado", "Competente"],
    examples: ["Levy & Salomão", "Trench Rossi Watanabe", "Veirano"],
    colors: {
      primary: ["#1F2937", "#374151", "#4B5563"],
      secondary: ["#F59E0B", "#EAB308"]
    },
    psychology: "Combinação de cinzas sóbrios com toques dourados para transmitir expertise e prestígio."
  },
  "O Conselheiro": {
    name: "O Conselheiro",
    icon: "fas fa-user-tie",
    description: "Seu escritório incorpora o arquétipo 'O Conselheiro' - focado em orientação, sabedoria e construção de relacionamentos duradouros com base na confiança mútua.",
    characteristics: ["Sábio", "Orientador", "Confiável", "Experiente", "Consultivo"],
    examples: ["Ulhôa Canto", "Demarest", "BMA"],
    colors: {
      primary: ["#065F46", "#047857", "#059669"],
      secondary: ["#92400E", "#B45309"]
    },
    psychology: "Verde transmite crescimento e sabedoria, complementado por tons terrosos que evocam experiência."
  },
  "O Inovador": {
    name: "O Inovador",
    icon: "fas fa-lightbulb",
    description: "Seu escritório representa o arquétipo 'O Inovador' - pioneiro em soluções criativas e novas abordagens no mercado jurídico brasileiro.",
    characteristics: ["Criativo", "Inovador", "Visionário", "Moderno", "Disruptivo"],
    examples: ["Startups Jurídicas", "Lawtechs", "Escritórios Digitais"],
    colors: {
      primary: ["#7C3AED", "#8B5CF6", "#A78BFA"],
      secondary: ["#EC4899", "#F472B6"]
    },
    psychology: "Roxo e rosa transmitem criatividade e inovação, diferenciando-se do tradicional azul jurídico."
  },
  "O Construtor": {
    name: "O Construtor",
    icon: "fas fa-hammer",
    description: "Seu escritório demonstra o arquétipo 'O Construtor' - focado em resultados práticos, execução eficiente e construção de soluções sólidas.",
    characteristics: ["Prático", "Eficiente", "Realizador", "Objetivo", "Construtor"],
    examples: ["Campos Mello", "Cescon Barrieu", "TozziniFreire"],
    colors: {
      primary: ["#DC2626", "#EF4444", "#F87171"],
      secondary: ["#92400E", "#A16207"]
    },
    psychology: "Vermelho energético combina com tons terrosos para transmitir ação, força e praticidade."
  }
};
