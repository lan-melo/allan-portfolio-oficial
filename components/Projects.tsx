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
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Portfolios</p>
          <h2 className="mt-3 h-section">Projetos recentes</h2>
          <p className="mt-4 text-base text-muted">
            Cada projeto aqui não é só um case, mas é uma hipótese validada.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="aspect-[16/9] overflow-hidden bg-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-ink">{project.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#" className="btn-outline">
            Ver todos projetos
          </a>
        </div>
      </div>
    </section>
  );
}
