type Item = {
  title: string;
  org: string;
  period: string;
  description?: string;
  bullets?: string[];
  side: "left" | "right";
};

const items: Item[] = [
  {
    side: "left",
    title: "MBA em Inovação Orientada a IA/UX",
    org: "Unifast",
    period: "2026 - Atual",
    description:
      "Aprofundando o uso de inteligência artificial aplicada à experiência do usuário, unindo estratégia, inovação e dados para criar produtos mais inteligentes e escaláveis.",
  },
  {
    side: "right",
    title: "Sênior Product Designer",
    org: "XP Educação",
    period: "2024 - Atual",
    bullets: [
      "Redesenhei o site institucional com base em pesquisas e testes de usabilidade, aumentando a conversão em mais de 15%.",
      "Estruturei e evoluí a área do aluno, elevando o NPS em 20% com base em dados e feedbacks reais.",
      "Liderei a implementação de um Design System, aumentando a consistência da experiência em mais de 50%.",
    ],
  },
  {
    side: "left",
    title: "Especialista em Design System",
    org: "FEUX",
    period: "2024",
    description:
      "Especialização focada na criação de sistemas escaláveis, garantindo consistência entre produtos e acelerando entregas com redução de retrabalho.",
  },
  {
    side: "right",
    title: "Pleno Product Designer",
    org: "Tecnologia Única",
    period: "2022 - Atual",
    bullets: [
      "Criei um Design System para mais de 10 produtos, reduzindo o esforço do time de design em 40% e acelerando o desenvolvimento em mais de 50%.",
      "Redesenhei o fluxo de cadastro de uma plataforma SaaS, reduzindo o tempo de 8 para 2 minutos e aumentando novos usuários em 25%.",
      "Aumentei o engajamento em 33% ao otimizar funcionalidades com base em testes e análises de comportamento.",
      "Contribuí para a reformulação de produto com potencial de aumento de faturamento em 50%.",
    ],
  },
  {
    side: "left",
    title: "Formação UI/UX Design and Product Design",
    org: "UX Unicórnio",
    period: "2021 - 2022",
    description:
      "Base sólida em design centrado no usuário, passando por pesquisa, prototipação e validação porque bom design começa antes da interface.",
  },
  {
    side: "right",
    title: "Product Designer",
    org: "Hazo",
    period: "2023",
    description:
      "Atuação em projetos estratégicos com foco em interface do usuário, aplicando pesquisa, prototipação e validação para tomada de decisão orientada a dados.",
  },
  {
    side: "left",
    title: "Sistemas de informação",
    org: "UGB",
    period: "2017 - 2021",
    description:
      "Formação técnica que fortalece a ponte entre design e desenvolvimento porque UX bom também precisa funcionar bem no código.",
  },
];

function Period({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-1 inline-flex items-center rounded-full bg-brand px-4 py-1.5 text-xs font-semibold text-white">
      {children}
    </span>
  );
}

function ItemCard({ item }: { item: Item }) {
  const align =
    item.side === "left" ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left";
  return (
    <div className={`flex flex-col items-start ${align}`}>
      <h3 className="text-xl font-semibold leading-tight text-ink">{item.title}</h3>
      <p className="mt-1 text-base font-semibold text-muted">{item.org}</p>
      <Period>{item.period}</Period>
      {item.description && (
        <p className="mt-4 max-w-[490px] text-base leading-relaxed text-muted">
          {item.description}
        </p>
      )}
      {item.bullets && (
        <ul
          className={`mt-4 max-w-[490px] list-disc space-y-2 pl-5 text-base leading-relaxed text-muted ${
            item.side === "left" ? "lg:list-inside lg:pl-0" : ""
          }`}
        >
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Resume() {
  return (
    <section id="curriculo" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Educação e experiência</p>
          <h2 className="mt-3 h-section">Meu currículo</h2>
          <p className="mt-4 text-base text-muted">
            Confira um pouco da minha experiência profissional e também dos meus
            estudos
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#d7dfff] lg:block" />

          <ul className="space-y-12 lg:space-y-14">
            {items.map((item, idx) => (
              <li key={idx} className="relative">
                <div
                  className={`grid gap-6 lg:grid-cols-2 lg:gap-20 ${
                    item.side === "right" ? "lg:[&>div]:col-start-2" : ""
                  }`}
                >
                  <div className="rounded-2xl bg-white p-6 shadow-card lg:bg-transparent lg:p-0 lg:shadow-none">
                    <ItemCard item={item} />
                  </div>
                </div>
                <span
                  className="absolute left-1/2 top-2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-brand bg-white lg:block"
                  aria-hidden
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
