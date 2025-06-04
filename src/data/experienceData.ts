export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Head Financeiro e Desenvolvedor de Automações",
    company: "MedPless Assist",
    dates: "Abril/24 a Junho/25",
    description: [
      "Liderei a modernização e automação de processos financeiros e de TI críticos na MedPless Assist, transformando operações manuais em sistemas eficientes e orientados por dados. Meu foco foi em otimizar o fluxo de trabalho, reduzir erros e liberar tempo da equipe para atividades de maior valor.",
      "Desenvolvimento de Sistema de Automação de NF em Python: Criei uma solução completa em Python para automatizar a emissão de notas fiscais, o que resultou em uma redução drástica no tempo de processamento manual e na minimização de erros humanos.",
      "Implementação de Sistema Financeiro Integrado em Google Sheets & Apps Script: Desenvolvi e implementei um robusto sistema financeiro utilizando Google Sheets e Google Apps Script. Este sistema incluía:",
      "- Dashboards dinâmicos para visualização de dados em tempo real.",
      "- Controle de fluxo de caixa e gestão de contas.",
      "- Geração e envio automático de faturas em PDF por e-mail.",
      "- Logs de atividades para auditoria e rastreabilidade.",
      "- Envio automatizado de lembretes e notificações financeiras via WhatsApp (integrado com Twilio)",
      "- Geração automática de DRE (Demonstração do Resultado do Exercício).",
      "Capacitação da Equipe: Realizei treinamentos em Excel e Google Sheets para a equipe, melhorando suas habilidades em manipulação de dados e uso das novas ferramentas implementadas.",
      "Relacionamento com cerca de 80 clínicas, laboratórios, hospitais e mais de 20 profissionais da área da saúde, assim como gestão de todos os faturamentos e repasses.",
      "Criação de materiais de apoio em vídeo, doc, pdf.",
      "Tecnologias e Habilidades Chave Aplicadas: Python, Google Apps Script, Google Sheets / Excel (Avançado), APIs, Automação de Processos (RPA), Análise Financeira, Design de Sistemas, Otimização de Fluxos de Trabalho, Treinamento de Equipes."
    ]
  },
  {
    title: "Sócio-Administrador",
    company: "Clínica da Cidade | Unidade Barreiras",
    dates: "Maio/22 a Março/24",
    description: [
      "Liderei todas as operações desde a planta até a venda da unidade.",
      "Liderei uma equipe multidisciplinar, promovendo uma cultura de excelência e otimização de recursos.",
      "Cuidei sozinho de toda a parte financeira da abertura ao fechamento via excel."
    ]
  },
  {
    title: "Coordenador Pedagógico, Financeiro e Professor",
    company: "Microlins",
    dates: "Julho/15 a Julho/17",
    description: [
      "Controle de turmas, satisfação, PEF, Universidade Corporativa, contratações, treinamentos, ações, palestras.",
      "Fluxo de caixa, cobranças, contas a pagar.",
      "Aulas de informática e manutenção de computadores."
    ]
  }
];
