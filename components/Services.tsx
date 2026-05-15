import { Search, Layout, FlaskConical, Component, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Search,
    title: "User Research",
    description:
      "Transformo dados em decisões que reduzem risco e aumentam acerto.",
  },
  {
    icon: Layout,
    title: "UI Design",
    description:
      "Interfaces que guiam, convencem e convertem sem o usuário perceber.",
  },
  {
    icon: FlaskConical,
    title: "Testes de usabilidade",
    description:
      "Testar cedo custa pouco. Corrigir depois custa caro. Valido hipóteses antes que elas virem prejuízo.",
  },
  {
    icon: Component,
    title: "Design System",
    description:
      "Sistemas que aceleram times, reduzem retrabalho e aumentam eficiência (já fiz isso em +40%).",
  },
  {
    icon: Code2,
    title: "Design to code",
    description:
      "Soluções criadas e funcionais de ponta a ponta com auxílio de inteligências artificiais.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-surface/40 py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">O que eu ofereço?</p>
          <h2 className="mt-3 h-section">Meus serviços</h2>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, idx) => (
            <Reveal key={title} delay={idx * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl bg-white p-10 text-center shadow-card transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-soft">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6">
                  <Icon
                    className="h-9 w-9 text-white transition-transform duration-500 group-hover:-rotate-6"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-ink transition-colors duration-300 group-hover:text-brand">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {description}
                </p>
                <div
                  className="pointer-events-none absolute right-0 top-0 h-28 w-56 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120% 100% at 100% 0%, rgba(74,108,247,0.12) 0%, rgba(74,108,247,0) 60%)",
                  }}
                  aria-hidden
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
