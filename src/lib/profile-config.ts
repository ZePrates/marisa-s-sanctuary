// Configuração centralizada da landing page "Link na Bio"
// Edite estes valores para atualizar a página facilmente.

export const profileConfig = {
  // Identidade
  name: "Marisa Valido dos Santos",
  title: "Psicóloga Clínica e da Saúde",
  initials: "MS",

  // Mensagens
  mainQuote: "Um espaço seguro para parar, sentir e recomeçar.",
  secondaryQuote: "Onde cuidar de quem cuida, também importa.",
  specialities: "Exaustão Emocional, Ansiedade e Doenças Crónicas",

  // Links
  bookingUrl:
    "https://api.whatsapp.com/send?phone=351964781039&text=Ol%C3%A1%2C%20gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20a%20marca%C3%A7%C3%A3o%20de%20uma%20consulta%20de%20Psicologia.",
  instagramUrl: "https://www.instagram.com/marisasantos.psicologa/",

  // Rodapé
  footerLine: "Psicologia Clínica e da Saúde",

  // SEO
  seo: {
    title: "Marisa Isabel Valido dos Santos | Psicóloga Clínica e da Saúde",
    description:
      "Um espaço seguro para parar, sentir e recomeçar. Psicologia Clínica e da Saúde.",
  },

  // Página "Conhece-me um pouco melhor" (/conhece-me)
  about: {
    intro:
      "Um pouco sobre mim, o meu percurso e a forma como acompanho cada pessoa.",
    sections: [
      {
        title: "Quem sou",
        paragraphs: [
          "Sou a Marisa Valido dos Santos, psicóloga clínica e da saúde, com percurso académico e experiência prática voltada para o cuidado integral de cada pessoa. Acompanho adolescentes, adultos e idosos, procurando criar um espaço seguro, acolhedor e sem julgamentos onde seja possível parar, sentir e recomeçar.",
          "\n",
        ],
      },
      {
        title: "O meu percurso",
        items: [
          "Licenciatura em Psicologia pela Universidade de Évora.",
          "Mestrado em Psicologia Clínica e da Saúde.",
          "Especialidade .....",
        ],
      },
      {
        title: "Experiência e áreas de intervenção",
        paragraphs: [
          "Experiência profissional com pessoas idosas e ex-combatentes, nomeadamente no Núcleo de Évora da Liga dos Combatentes.",
          "Intervenção centrada, entre outras áreas, na exaustão emocional, ansiedade e vivência da doença crónica.",
        ],
      },
      {
        title: "A forma como trabalho",
        emphasis: true,
        paragraphs: [
          "A psicologia é, para mim, um espaço de escuta, compreensão e construção de novas formas de lidar com aquilo que nos acontece. Cada pessoa traz consigo uma história única, e acredito que o acompanhamento psicológico deve respeitar esse ritmo e essa singularidade.\nProcuro criar um espaço seguro e sem julgamentos, onde seja possível parar, compreender o que se está a sentir e encontrar, em conjunto, caminhos que façam sentido para cada pessoa.",
        ],
      },
    ],
    seo: {
      title: "Marisa Valido dos Santos | Um pouco sobre mim",
      description:
        "Percurso, experiência e forma de trabalhar de Marisa Valido dos Santos, Psicóloga Clínica e da Saúde.",
    },
  },
} as const;
