type Item = {
  title: string;
  org: string;
  period: string;
  description?: string;
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

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 lg:block" />

          <ul className="space-y-10">
            {items.map((item, idx) => (
              <li
                key={idx}
                className={`relative grid gap-6 lg:grid-cols-2 lg:gap-12 ${
                  item.side === "right" ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div
                  className={`${
                    item.side === "left"
                      ? "lg:pr-12 lg:text-right"
                      : "lg:pl-12 lg:text-left"
                  }`}
                >
                  <div className="rounded-2xl bg-white p-6 shadow-card lg:bg-transparent lg:p-0 lg:shadow-none">
                    <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                    <p className="mt-1 text-base font-semibold text-brand">
                      {item.org}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.period}</p>
                    {item.description && (
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
                <div
                  className="hidden lg:block"
                  aria-hidden
                />
                <span
                  className="absolute left-1/2 top-3 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-brand ring-4 ring-white lg:block"
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
