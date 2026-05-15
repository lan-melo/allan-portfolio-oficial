import { Reveal } from "./Reveal";

type Project = {
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Startup landing page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Job portal landing page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "SaaS landing page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Business & corporate template",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Portfolios</p>
          <h2 className="mt-3 h-section">Projetos recentes</h2>
          <p className="mt-4 text-base text-muted">
            Cada projeto aqui não é só um case, mas é uma hipótese validada.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <Reveal key={project.title} delay={(idx % 2) * 100}>
              <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-soft">
                <div className="aspect-[16/9] overflow-hidden bg-surface">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-ink transition-colors duration-300 group-hover:text-brand">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a href="#" className="btn-primary w-full lg:w-auto">
            Ver todos projetos
          </a>
        </Reveal>
      </div>
    </section>
  );
}
