import { Product, Category, Benefit, LocalizedString } from "@/types"
import type { Locale } from "@/i18n/types"

export function localeText<T extends string | LocalizedString>(val: T, locale: Locale): string {
  if (typeof val === "string") return val
  return val[locale]
}

export const categories: Category[] = [
  {
    id: "ebooks",
    name: { pt: "E-books", en: "E-books" },
    description: { pt: "Conhecimento digital em formato de livro", en: "Digital knowledge in book format" },
    icon: "BookOpen",
    slug: "ebooks",
    productCount: 12,
  },
  {
    id: "cursos",
    name: { pt: "Cursos", en: "Courses" },
    description: { pt: "Aprenda com especialistas do mercado", en: "Learn from market experts" },
    icon: "GraduationCap",
    slug: "cursos",
    productCount: 8,
  },
  {
    id: "templates",
    name: { pt: "Templates", en: "Templates" },
    description: { pt: "Modelos prontos para acelerar seu projeto", en: "Ready-made models to speed up your project" },
    icon: "Layout",
    slug: "templates",
    productCount: 15,
  },
  {
    id: "planilhas",
    name: { pt: "Planilhas", en: "Spreadsheets" },
    description: { pt: "Planilhas inteligentes para gestão", en: "Smart spreadsheets for management" },
    icon: "Table",
    slug: "planilhas",
    productCount: 10,
  },
  {
    id: "mentorias",
    name: { pt: "Mentorias", en: "Mentoring" },
    description: { pt: "Orientação personalizada para crescer", en: "Personalized guidance to grow" },
    icon: "Users",
    slug: "mentorias",
    productCount: 4,
  },
  {
    id: "softwares",
    name: { pt: "Softwares", en: "Software" },
    description: { pt: "Ferramentas digitais para seu negócio", en: "Digital tools for your business" },
    icon: "Code",
    slug: "softwares",
    productCount: 6,
  },
  {
    id: "prompts",
    name: { pt: "Prompts", en: "Prompts" },
    description: { pt: "Prompts prontos para IA generativa", en: "Ready prompts for generative AI" },
    icon: "Sparkles",
    slug: "prompts",
    productCount: 20,
  },
  {
    id: "design",
    name: { pt: "Design", en: "Design" },
    description: { pt: "Recursos visuais para criar com qualidade", en: "Visual resources to create with quality" },
    icon: "Palette",
    slug: "design",
    productCount: 9,
  },
]

export const products: Product[] = [
  {
    id: "1",
    slug: "marketing-digital-360",
    name: "Marketing Digital 360",
    subtitle: "O guia completo para dominar o marketing digital",
    tagline: "Aprenda as estratégias que realmente funcionam",
    description:
      "Um guia completo e atualizado com as melhores estratégias de marketing digital para alavancar seu negócio online.",
    fullDescription: `Este e-book é o resultado de mais de 10 anos de experiência em marketing digital. Você vai aprender desde os fundamentos até estratégias avançadas que realmente geram resultados.

    Diferente de outros materiais, este guia foca no que realmente funciona hoje, com exemplos práticos, estudos de caso reais e frameworks testados que você pode aplicar imediatamente no seu negócio.

    Cada capítulo foi cuidadosamente elaborado para ser direto ao ponto, sem enrolação, com linguagem acessível e exemplos visuais que facilitam o aprendizado.`,
    price: 49.9,
    originalPrice: 97.9,
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",
    category: "ebooks",
    rating: 4.8,
    reviewCount: 234,
    salesCount: 3450,
    benefits: [
      "Estratégias testadas que geram resultados reais",
      "Aprenda no seu ritmo, com acesso vitalício",
      "Ferramentas práticas e frameworks exclusivos",
      "Atualizações gratuitas sempre que lançadas",
    ],
    whatYouGet: [
      "E-book completo em PDF (200+ páginas)",
      "Checklists práticos por capítulo",
      "Planilha de planejamento estratégico",
      "Acesso a comunidade exclusiva de alunos",
      "3 templates de funil de vendas",
      "Bônus: Calendário editorial completo",
    ],
    bonus: [
      {
        title: "Planilha de Planejamento Estratégico",
        description: "Planilha completa para planejar suas campanhas de marketing",
        value: "R$ 47",
      },
      {
        title: "Mini-curso: Tráfego Pago para Iniciantes",
        description: "3 videoaulas gravadas sobre Facebook Ads e Google Ads",
        value: "R$ 67",
      },
      {
        title: "Modelos de Copy para Vender Mais",
        description: "50 templates de copy prontos para usar",
        value: "R$ 37",
      },
    ],
    faq: [
      {
        question: { pt: "O material é atualizado com frequência?", en: "Is the material updated frequently?" },
        answer: { pt: "Sim! O e-book recebe atualizações periódicas gratuitas. Você sempre terá acesso à versão mais recente.", en: "Yes! The e-book receives free periodic updates. You'll always have access to the latest version." },
      },
      {
        question: { pt: "Preciso ter experiência prévia em marketing?", en: "Do I need prior marketing experience?" },
        answer: { pt: "Não. O conteúdo foi pensado tanto para iniciantes quanto para profissionais experientes que querem se atualizar.", en: "No. The content is designed for both beginners and experienced professionals looking to update their skills." },
      },
      {
        question: { pt: "Como recebo o acesso após a compra?", en: "How do I get access after purchase?" },
        answer: { pt: "Imediatamente! Após a confirmação do pagamento, você recebe um e-mail com o link de acesso a todo o material.", en: "Immediately! After payment confirmation, you receive an email with the access link to all material." },
      },
      {
        question: { pt: "Qual a forma de pagamento?", en: "What payment methods are available?" },
        answer: { pt: "Aceitamos cartão de crédito, boleto bancário e PIX. O pagamento é processado de forma 100% segura.", en: "We accept credit cards, bank slip and PIX. Payment is processed 100% securely." },
      },
    ],
    testimonials: [
      {
        name: "Ana Silva",
        role: "Empreendedora Digital",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
        content: "Este e-book transformou minha forma de fazer marketing. Em 3 meses já vi resultados expressivos no meu negócio.",
        rating: 5,
      },
      {
        name: "Lucas Mendes",
        role: "Marketing Manager",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        content: "Material completo e muito bem organizado. As estratégias são práticas e aplicáveis imediatamente.",
        rating: 5,
      },
    ],
    featured: true,
    bestSeller: true,
    tags: ["marketing", "digital", "negócios", "vendas"],
  },
  {
    id: "2",
    slug: "curso-dev-fullstack",
    name: "Desenvolvimento Fullstack Pro",
    subtitle: "Do zero ao primeiro deploy em produção",
    tagline: "Torne-se um desenvolvedor completo",
    description:
      "Curso completo de desenvolvimento web fullstack com projetos reais, do básico ao avançado.",
    fullDescription: `Aprenda desenvolvimento web do zero com este curso completo que cobre frontend, backend, banco de dados e deploy.

    São mais de 120 horas de conteúdo divididas em módulos progressivos, com projetos práticos que simulam situações reais do mercado de trabalho.

    Você constrói um portfólio completo durante o curso, com projetos que vão desde landing pages até aplicações completas com autenticação, banco de dados e APIs REST.`,
    price: 197,
    originalPrice: 397,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    category: "cursos",
    rating: 4.9,
    reviewCount: 567,
    salesCount: 2800,
    benefits: [
      "120+ horas de conteúdo em vídeo HD",
      "Projetos reais para seu portfólio",
      "Suporte individualizado com tutores",
      "Certificado de conclusão reconhecido",
    ],
    whatYouGet: [
      "120+ horas de videoaulas gravadas",
      "Código fonte de todos os projetos",
      "Exercícios práticos com correção",
      "Acesso à comunidade exclusiva no Discord",
      "Certificado de conclusão",
      "Garantia incondicional de 7 dias",
    ],
    bonus: [
      {
        title: "Módulo Extra: React Avançado",
        description: "Aprofundamento em hooks, context API e performance",
        value: "R$ 97",
      },
      {
        title: "E-book: Guia de Carreira em Tech",
        description: "Como se preparar para entrevistas e crescer na área",
        value: "R$ 47",
      },
      {
        title: "Template de Portfólio Profissional",
        description: "Template Next.js completo para seu portfólio",
        value: "R$ 67",
      },
    ],
    faq: [
      {
        question: { pt: "Preciso saber programar para começar?", en: "Do I need to know how to code to start?" },
        answer: { pt: "Não. O curso começa do absoluto zero, ensinando lógica de programação e fundamentos antes de avançar.", en: "No. The course starts from absolute zero, teaching programming logic and fundamentals before moving forward." },
      },
      {
        question: { pt: "Quanto tempo de acesso eu tenho?", en: "How long do I have access?" },
        answer: { pt: "Acesso vitalício ao curso e a todas as futuras atualizações.", en: "Lifetime access to the course and all future updates." },
      },
      {
        question: { pt: "O curso emite certificado?", en: "Does the course provide a certificate?" },
        answer: { pt: "Sim! Ao concluir todos os módulos, você recebe um certificado digital de conclusão.", en: "Yes! Upon completing all modules, you receive a digital completion certificate." },
      },
    ],
    testimonials: [
      {
        name: "Pedro Oliveira",
        role: "Desenvolvedor Júnior",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
        content: "Mudei de carreira graças a este curso. Consegui meu primeiro emprego como dev em menos de 6 meses.",
        rating: 5,
      },
    ],
    featured: true,
    bestSeller: true,
    tags: ["programação", "desenvolvimento", "fullstack", "web"],
  },
  {
    id: "3",
    slug: "template-notion-pro",
    name: "Notion Pro Manager",
    subtitle: "Sistema completo de gestão no Notion",
    tagline: "Organize sua vida digital e seu negócio",
    description:
      "Template completo do Notion para gerenciar projetos, tarefas, finanças e metas em um só lugar.",
    fullDescription: `Um template completo e elegante para o Notion que transforma sua experiência de organização pessoal e profissional.

    São mais de 30 páginas interconectadas, com dashboards automáticos, banco de dados relacionais e views personalizadas para cada aspecto da sua vida.

    Ideal para empreendedores, profissionais liberais e equipes que querem sair do caos e ter tudo organizado de forma visual e funcional.`,
    price: 29.9,
    originalPrice: 57.9,
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
    category: "templates",
    rating: 4.7,
    reviewCount: 189,
    salesCount: 5200,
    benefits: [
      "Sistema completo pronto para usar",
      "Automações inteligentes inclusas",
      "Atualizações gratuitas vitalícias",
      "Suporte rápido via e-mail e Discord",
    ],
    whatYouGet: [
      "Template completo do Notion (30+ páginas)",
      "Dashboard financeiro automatizado",
      "Sistema de OKRs e metas",
      "Gerenciador de projetos e tarefas",
      "Hub de conteúdo e notas",
      "Calendário integrado",
    ],
    bonus: [
      {
        title: "Guia de Instalação em Vídeo",
        description: "Passo a passo detalhado para configurar o template",
        value: "R$ 27",
      },
      {
        title: "50 ícones personalizados",
        description: "Pacote exclusivo de ícones para personalizar seu Notion",
        value: "R$ 19",
      },
    ],
    faq: [
      {
        question: { pt: "Preciso ter conta no Notion?", en: "Do I need a Notion account?" },
        answer: { pt: "Sim, é necessário ter uma conta gratuita no Notion para usar o template.", en: "Yes, you need a free Notion account to use the template." },
      },
      {
        question: { pt: "O template funciona em português?", en: "Does the template work in Portuguese?" },
        answer: { pt: "Sim! Todo o conteúdo está em português brasileiro.", en: "Yes! All content is in Brazilian Portuguese." },
      },
    ],
    testimonials: [
      {
        name: "Carla Santos",
        role: "CEO na StartupX",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
        content: "Finalmente um template que organizou minha vida profissional e pessoal. Recomendo demais!",
        rating: 5,
      },
    ],
    featured: true,
    bestSeller: false,
    tags: ["notion", "produtividade", "organização", "template"],
  },
  {
    id: "4",
    slug: "planilha-financeira",
    name: "Planilha Financeira Inteligente",
    subtitle: "Controle total das suas finanças",
    tagline: "Tome decisões financeiras com dados reais",
    description:
      "Planilha completa para controle financeiro pessoal e empresarial com dashboards automáticos.",
    fullDescription: `Uma planilha inteligente que automatiza o controle das suas finanças pessoais ou empresariais.

    Com dashboards interativos, gráficos automáticos e categorização inteligente, você terá uma visão clara de para onde seu dinheiro está indo e como otimizar seus gastos.

    Ideal para quem quer sair do vermelho, fazer investimentos conscientes ou simplesmente ter mais controle sobre o próprio dinheiro.`,
    price: 39.9,
    originalPrice: 79.9,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    category: "planilhas",
    rating: 4.6,
    reviewCount: 312,
    salesCount: 4100,
    benefits: [
      "Dashboards automáticos e visuais",
      "Controle de gastos categorizado",
      "Projeções financeiras inteligentes",
      "Relatórios exportáveis em PDF",
    ],
    whatYouGet: [
      "Planilha Excel/Google Sheets completa",
      "Dashboard financeiro interativo",
      "Controle de despesas e receitas",
      "Metas financeiras com tracking",
      "Relatório anual automático",
      "Guia de uso em vídeo",
    ],
    bonus: [
      {
        title: "E-book: Educação Financeira para Brasileiros",
        description: "Guia prático sobre finanças pessoais no contexto brasileiro",
        value: "R$ 37",
      },
    ],
    faq: [
      {
        question: { pt: "Funciona no Google Sheets?", en: "Does it work on Google Sheets?" },
        answer: { pt: "Sim! A planilha funciona perfeitamente tanto no Excel quanto no Google Sheets.", en: "Yes! The spreadsheet works perfectly in both Excel and Google Sheets." },
      },
      {
        question: { pt: "Preciso ser expert em Excel?", en: "Do I need to be an Excel expert?" },
        answer: { pt: "Não. A planilha é intuitiva e vem com um guia completo de uso em vídeo.", en: "No. The spreadsheet is intuitive and comes with a complete video usage guide." },
      },
    ],
    testimonials: [
      {
        name: "Roberto Alves",
        role: "Empresário",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
        content: "Consegui reduzir meus gastos em 30% no primeiro mês. Ferramenta essencial para qualquer pessoa.",
        rating: 5,
      },
    ],
    featured: false,
    bestSeller: true,
    tags: ["finanças", "planilha", "controle", "gestão"],
  },
  {
    id: "5",
    slug: "mentoria-carreira-tech",
    name: "Mentoria de Carreira em Tech",
    subtitle: "6 meses de acompanhamento personalizado",
    tagline: "Acelere sua carreira na tecnologia",
    description:
      "Programa de mentoria individual com encontros semanais para desenvolvimento de carreira em tecnologia.",
    fullDescription: `Um programa exclusivo de mentoria individual com acompanhamento personalizado durante 6 meses.

    Ideal para profissionais de tecnologia que querem acelerar a carreira, seja mudando de área, buscando promoção ou desenvolvendo novas habilidades estratégicas.

    Cada plano é customizado para suas necessidades específicas, com metas claras, feedback constante e suporte direto.`,
    price: 497,
    originalPrice: 997,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    category: "mentorias",
    rating: 5.0,
    reviewCount: 47,
    salesCount: 180,
    benefits: [
      "Acompanhamento individual semanal",
      "Plano de carreira personalizado",
      "Feedback direto e sincero",
      "Networking com profissionais do mercado",
    ],
    whatYouGet: [
      "24 sessões individuais de mentoria",
      "Plano de desenvolvimento personalizado",
      "Análise de currículo e LinkedIn",
      "Simulação de entrevistas técnicas",
      "Acesso a grupo exclusivo de mentees",
      "Suporte por WhatsApp prioritário",
    ],
    bonus: [
      {
        title: "Workshop: Marca Pessoal para Profissionais de TI",
        description: "Workshop gravado sobre construção de marca pessoal no linkedin",
        value: "R$ 147",
      },
      {
        title: "Template de Currículo Premium",
        description: "Template ATS-ready para profissionais de tecnologia",
        value: "R$ 47",
      },
    ],
    faq: [
      {
        question: { pt: "Como funcionam os encontros?", en: "How do the meetings work?" },
        answer: { pt: "Os encontros são semanais, com duração de 50 minutos, realizados via Google Meet.", en: "Meetings are weekly, lasting 50 minutes, held via Google Meet." },
      },
      {
        question: { pt: "Posso cancelar a qualquer momento?", en: "Can I cancel at any time?" },
        answer: { pt: "Sim. Você tem 7 dias de garantia para testar e, se não gostar, devolvemos 100% do valor.", en: "Yes. You have a 7-day guarantee to try it out, and if you don't like it, we'll refund 100% of the value." },
      },
    ],
    testimonials: [
      {
        name: "Julia Costa",
        role: "Desenvolvedora Pleno",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
        content: "A mentoria foi essencial para minha promoção a pleno. O acompanhamento personalizado fez toda a diferença.",
        rating: 5,
      },
    ],
    featured: true,
    bestSeller: false,
    tags: ["mentoria", "carreira", "tecnologia", "desenvolvimento"],
  },
  {
    id: "6",
    slug: "pack-prompts-ia",
    name: "Pack Premium de Prompts para IA",
    subtitle: "500 prompts profissionais para ChatGPT e outras IAs",
    tagline: "Extraia o máximo das IAs generativas",
    description:
      "Coleção premium de 500 prompts testados e organizados por categoria para maximizar resultados com IAs.",
    fullDescription: `Um pacote completo com 500 prompts profissionais cuidadosamente testados e organizados por categoria.

    Cada prompt foi refinado ao longo de meses de uso intensivo de ferramentas de IA, garantindo resultados consistentes e de alta qualidade.

    Ideal para profissionais de marketing, criação de conteúdo, desenvolvimento, design e empreendedores que querem extrair o máximo das ferramentas de IA generativa.`,
    price: 19.9,
    originalPrice: 47.9,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    category: "prompts",
    rating: 4.5,
    reviewCount: 892,
    salesCount: 12500,
    benefits: [
      "500 prompts testados e validados",
      "Organizados por categoria",
      "Atualizações mensais gratuitas",
      "Suporte via Discord",
    ],
    whatYouGet: [
      "500 prompts premium em PDF",
      "Planilha organizadora de prompts",
      "20 templates de workflows de IA",
      "Guia de melhores práticas",
      "Acesso a atualizações mensais",
      "Comunidade exclusiva de usuários",
    ],
    bonus: [
      {
        title: "Mini-curso: Engenharia de Prompts",
        description: "Aprenda a criar seus próprios prompts profissionais",
        value: "R$ 47",
      },
      {
        title: "50 Prompts Exclusivos para Programação",
        description: "Prompts especializados para desenvolvimento de software",
        value: "R$ 27",
      },
    ],
    faq: [
      {
        question: { pt: "Os prompts funcionam em qualquer IA?", en: "Do the prompts work with any AI?" },
        answer: { pt: "Sim! Eles são compatíveis com ChatGPT, Claude, Gemini e outras IAs populares.", en: "Yes! They are compatible with ChatGPT, Claude, Gemini and other popular AIs." },
      },
      {
        question: { pt: "Recebo atualizações?", en: "Do I get updates?" },
        answer: { pt: "Sim! Todo mês adicionamos novos prompts e você recebe gratuitamente.", en: "Yes! Every month we add new prompts and you receive them for free." },
      },
    ],
    testimonials: [
      {
        name: "Marina Duarte",
        role: "Content Strategist",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
        content: "Reduzi meu tempo de criação de conteúdo em 70%. Os prompts são incrivelmente precisos.",
        rating: 5,
      },
    ],
    featured: true,
    bestSeller: true,
    tags: ["ia", "prompts", "chatgpt", "produtividade"],
  },
  {
    id: "7",
    slug: "design-sistema-ui",
    name: "Sistema de Design UI Pro",
    subtitle: "Kit completo para designers e desenvolvedores",
    tagline: "Crie interfaces incríveis em minutos",
    description:
      "Sistema de design completo com componentes, tokens e guias de estilo para Figma e código.",
    fullDescription: `Um sistema de design profissional e completo que acelera seu processo de criação de interfaces.

    Com mais de 200 componentes, tokens de design totalmente customizáveis e integração direta com código (React/Next.js), este kit é perfeito para designers e desenvolvedores que querem criar produtos digitais com consistência e agilidade.

    Inclui arquivos fonte no Figma com auto-layout, variáveis e componentes organizados seguindo as melhores práticas de design systems.`,
    price: 79.9,
    originalPrice: 149.9,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    category: "design",
    rating: 4.8,
    reviewCount: 156,
    salesCount: 980,
    benefits: [
      "200+ componentes prontos",
      "Design tokens customizáveis",
      "Integração Figma + Código",
      "Atualizações trimestrais",
    ],
    whatYouGet: [
      "Arquivo Figma completo (200+ componentes)",
      "Design tokens (cores, tipografia, spacing)",
      "Componentes React com Tailwind",
      "Guias de estilo e documentação",
      "Icon pack com 500+ ícones",
      "Wireframes de páginas comuns",
    ],
    bonus: [
      {
        title: "Plugin Figma Exclusivo",
        description: "Plugin para aplicar tokens automaticamente no Figma",
        value: "R$ 37",
      },
      {
        title: "Landing Page Template",
        description: "Template Next.js completo com o design system aplicado",
        value: "R$ 97",
      },
    ],
    faq: [
      {
        question: { pt: "Preciso saber React para usar?", en: "Do I need to know React to use it?" },
        answer: { pt: "Não. Os componentes Figma são independentes. O código em React é um bônus adicional.", en: "No. The Figma components are standalone. The React code is an additional bonus." },
      },
    ],
    testimonials: [
      {
        name: "Thiago Souza",
        role: "Product Designer",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
        content: "O design system mais completo que já vi. Economizou meses de trabalho no meu projeto.",
        rating: 5,
      },
    ],
    featured: true,
    bestSeller: false,
    tags: ["design", "ui", "figma", "react", "sistema de design"],
  },
  {
    id: "8",
    slug: "curso-trafego-pago",
    name: "Tráfego Pago Masterclass",
    subtitle: "Domine Facebook Ads e Google Ads do zero",
    tagline: "Gere tráfego qualificado e escalável",
    description:
      "Curso completo de tráfego pago cobrindo Facebook Ads, Google Ads e estratégias avançadas.",
    fullDescription: `Domine as principais plataformas de tráfego pago do mercado com este curso completo e prático.

    Você aprenderá a criar, gerenciar e otimizar campanhas no Facebook Ads e Google Ads, desde a configuração inicial até estratégias avançadas de escalabilidade e remarketing.

    O curso inclui estudos de caso reais com campanhas que geraram mais de R$ 2 milhões em vendas, mostrando exatamente o que funciona em cada nicho e plataforma.`,
    price: 147,
    originalPrice: 297,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    category: "cursos",
    rating: 4.7,
    reviewCount: 423,
    salesCount: 1900,
    benefits: [
      "Estratégias testadas com milhões investidos",
      "Suporte direto com o instrutor",
      "Atualizações conforme mudam as plataformas",
      "Certificado de conclusão",
    ],
    whatYouGet: [
      "40h de videoaulas gravadas",
      "Planilhas de métricas e ROI",
      "Templates de anúncios prontos",
      "Acesso a comunidade exclusiva",
      "Estudos de caso reais",
      "Certificado de conclusão",
    ],
    bonus: [
      {
        title: "Mentoria Coletiva Mensal",
        description: "Sessão ao vivo mensal para tirar dúvidas e analisar campanhas",
        value: "R$ 197/mês",
      },
      {
        title: "Pack de Criativos Prontos",
        description: "50 criativos editáveis para Facebook e Instagram",
        value: "R$ 47",
      },
    ],
    faq: [
      {
        question: { pt: "Preciso de orçamento para começar?", en: "Do I need a budget to start?" },
        answer: { pt: "Sim, tráfego pago exige investimento mínimo, mas ensinamos a começar com orçamentos pequenos.", en: "Yes, paid traffic requires minimum investment, but we teach you how to start with small budgets." },
      },
      {
        question: { pt: "O curso cobre TikTok Ads?", en: "Does the course cover TikTok Ads?" },
        answer: { pt: "Sim, incluímos um módulo bônus sobre TikTok Ads e estratégias para a plataforma.", en: "Yes, we include a bonus module on TikTok Ads and platform strategies." },
      },
    ],
    testimonials: [
      {
        name: "Fernanda Lima",
        role: "E-commerce Manager",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80",
        content: "ROI de 4x na primeira campanha que fiz seguindo o método do curso. Simplesmente sensacional.",
        rating: 5,
      },
    ],
    featured: false,
    bestSeller: true,
    tags: ["tráfego", "anúncios", "facebook ads", "google ads", "marketing"],
  },
]

export const benefits: Benefit[] = [
  {
    icon: "Zap",
    title: { pt: "Entrega Instantânea", en: "Instant Delivery" },
    description: { pt: "Receba acesso imediato após a confirmação do pagamento. Comece a usar agora mesmo.", en: "Get immediate access after payment confirmation. Start using it right away." },
  },
  {
    icon: "ShieldCheck",
    title: { pt: "Pagamento Seguro", en: "Secure Payment" },
    description: { pt: "Pagamento processado com criptografia de ponta a ponta. Seus dados estão protegidos.", en: "Payment processed with end-to-end encryption. Your data is protected." },
  },
  {
    icon: "RefreshCw",
    title: { pt: "Acesso Vitalício", en: "Lifetime Access" },
    description: { pt: "Compre uma vez e tenha acesso para sempre, incluindo todas as atualizações futuras.", en: "Buy once and have access forever, including all future updates." },
  },
  {
    icon: "Headphones",
    title: { pt: "Suporte Premium", en: "Premium Support" },
    description: { pt: "Suporte rápido e eficiente via e-mail e Discord. Sua satisfação é nossa prioridade.", en: "Fast and efficient support via email and Discord. Your satisfaction is our priority." },
  },
  {
    icon: "Award",
    title: { pt: "Garantia de Satisfação", en: "Satisfaction Guarantee" },
    description: { pt: "7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro.", en: "7-day unconditional guarantee. If you don't like it, we'll refund 100% of your money." },
  },
  {
    icon: "Smartphone",
    title: { pt: "Acesso Multiplataforma", en: "Multi-platform Access" },
    description: { pt: "Acesse em qualquer dispositivo: computador, tablet ou smartphone, quando e onde quiser.", en: "Access on any device: computer, tablet or smartphone, anytime, anywhere." },
  },
]

export const siteFAQs = [
  {
    question: { pt: "Como funciona a entrega dos produtos?", en: "How does product delivery work?" },
    answer: { pt: "Após a confirmação do pagamento, você recebe imediatamente um e-mail com o link de acesso ao produto. Em caso de dúvidas, nosso suporte está pronto para ajudar.", en: "After payment confirmation, you immediately receive an email with the product access link. If you have questions, our support team is ready to help." },
  },
  {
    question: { pt: "Quais as formas de pagamento aceitas?", en: "What payment methods are accepted?" },
    answer: { pt: "Aceitamos cartão de crédito (todas as bandeiras), boleto bancário e PIX. Para pagamentos internacionais, aceitamos PayPal.", en: "We accept credit cards (all brands), bank slip and PIX. For international payments, we accept PayPal." },
  },
  {
    question: { pt: "Posso solicitar reembolso?", en: "Can I request a refund?" },
    answer: { pt: "Sim! Oferecemos garantia incondicional de 7 dias. Se você não ficar satisfeito, devolvemos 100% do valor pago.", en: "Yes! We offer a 7-day unconditional guarantee. If you're not satisfied, we'll refund 100% of the amount paid." },
  },
  {
    question: { pt: "Os produtos têm atualizações?", en: "Do products receive updates?" },
    answer: { pt: "Sim! Todos os produtos digitais recebem atualizações periódicas. Se você já comprou, as atualizações são gratuitas.", en: "Yes! All digital products receive periodic updates. If you've already purchased, updates are free." },
  },
  {
    question: { pt: "Como entro em contato com o suporte?", en: "How do I contact support?" },
    answer: { pt: "Você pode nos contatar via e-mail (suporte@primedigitalstore.com.br) ou através do nosso Discord, com resposta em até 2 horas.", en: "You can contact us via email (suporte@primedigitalstore.com.br) or through our Discord, with a response within 2 hours." },
  },
  {
    question: { pt: "Posso revender os produtos?", en: "Can I resell the products?" },
    answer: { pt: "Não. Os produtos são licenciados para uso pessoal. A revenda ou distribuição não autorizada é proibida por lei.", en: "No. Products are licensed for personal use. Unauthorized resale or distribution is prohibited by law." },
  },
]
