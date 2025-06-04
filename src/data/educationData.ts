export type Education = {
  institution: string;
  period: string;
  description: string[];
};

export const education: Education[] = [
  {
    institution: "Alura",
    period: "(Período: Maio de 2024 - Março de 2025)",
    description: [
      "Formação focada em automação e desenvolvimento de negócios. Principais habilidades adquiridas:",
      "Programação: JavaScript, Git/GitHub, Python.",
      "Excel Avançado & VBA: BI Financeiro, automação, macros.",
      "Ciência de Dados & RPA: Análise de Dados (Google Sheets), Power BI, ferramentas No/Low Code RPA.",
      "Integração com IA: ChatGPT com Excel & Google Apps Script para automação."
    ]
  },
  {
    institution: "UTFPR",
    period: "(Preríodo: agosto de 2010 - Dezembro de 2010)",
    description: [
      "Matéria: Fundamentos de programação."
    ]
  }
];
