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
  linkedinUrl: "https://www.linkedin.com/in/marisa-santos-b54393157/",

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
        title: "Quem sou eu",
        lead: "Nem sempre é fácil pedir ajuda. E, muitas vezes, o mais difícil é dar o primeiro passo.",
        paragraphs: [
          "Sou a Marisa, psicóloga clínica e da saúde, e escolhi a Psicologia porque acredito no valor de termos um espaço onde podemos parar, falar e ser verdadeiramente escutados.",
          "Ao longo do meu percurso, tive a oportunidade de acompanhar pessoas em diferentes momentos das suas vidas. Conheci histórias marcadas pela doença, pela perda, pela mudança, pelo cansaço, pela ansiedade, mas também pela capacidade de encontrar novas formas de seguir em frente.",
          "Cada uma dessas experiências contribuiu para a profissional que sou hoje e para a forma como estou em consulta: com proximidade, respeito, atenção e sem julgamentos.",
          "\n",
        ],
        closing: [
          "Porque cada pessoa tem a sua história. E essa história merece ser escutada.",
          "Se chegaste até aqui, talvez este possa ser o teu primeiro passo.",
        ],
      },
      {
        title: "O meu percurso na Psicologia",
        paragraphs: [
          "Sou licenciada em Psicologia, mestre em Psicologia Clínica e da Saúde pela Universidade de Évora e especialista em Psicologia Clínica e da Saúde pela Ordem dos Psicólogos Portugueses (OPP).",
          "O meu percurso tem sido sobretudo dedicado ao acompanhamento de adolescentes, adultos e idosos, com experiência em diferentes contextos, nomeadamente na intervenção comunitária e clínica. Ao longo dos anos, fui também aprofundando a minha formação em Cuidados Paliativos, Neuropsicologia Clínica e Psiquiatria, procurando integrar conhecimento e experiência numa prática próxima e centrada em cada pessoa.",
        ],
      },
      {
        title: "Como posso ajudar",
        intro:
          "Acompanho pessoas que estão a atravessar diferentes desafios e momentos de mudança, nomeadamente:",
        areas: [
          {
            title: "Exaustão emocional",
            description:
              "Quando o cansaço se acumula e sentimos que já não conseguimos continuar ao mesmo ritmo.",
          },
          {
            title: "Ansiedade",
            description:
              "Quando as preocupações e os sintomas de ansiedade começam a interferir no dia a dia.",
          },
          {
            title: "Doença crónica",
            description:
              "Quando viver com uma doença implica adaptarmo-nos a uma nova realidade, lidar com limitações ou reconstruir a forma como nos percecionamos.",
          },
          {
            title: "Cuidadores",
            description:
              "Quando cuidar de alguém passa a ocupar grande parte da nossa vida e começamos a sentir que estamos a deixar de cuidar de nós próprios.",
          },
          {
            title: "Mudança, adaptação e luto",
            description:
              "Quando a vida muda, enfrentamos uma perda ou somos confrontados com uma nova realidade e precisamos de encontrar formas de lidar e seguir em frente.",
          },
        ],
      },
      {
        title: "A forma como trabalho",
        emphasis: true,
        lead: "Cada pessoa tem a sua história e o seu próprio caminho.",
        paragraphs: [
          "Em consulta, procuramos compreender o que estás a experienciar, identificar o que precisa de ser cuidado e encontrar, em conjunto, formas de avançar que façam sentido para ti.",
          "O acompanhamento é um processo de construção, feito passo a passo, respeitando o momento e as necessidades de cada pessoa.",
        ],
        closing: [
          "Porque, por vezes, não precisamos de ter tudo resolvido. Precisamos apenas de começar por compreender, por onde começar.",
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
