import { Reveal } from "./Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  brandLogo: string;
  brandAlt: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    name: "Mariana Soares",
    role: "Product and Project Manager @ Amazon",
    avatar: "/figma/avatar-mariana.svg",
    brandLogo: "/figma/brand-amazon.svg",
    brandAlt: "Amazon",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    name: "Iago Machado",
    role: "Sênior Software Developer @ CI&T",
    avatar: "/figma/avatar-iago.svg",
    brandLogo: "/figma/brand-cit.svg",
    brandAlt: "CI&T",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Recomendações</p>
          <h2 className="mt-3 h-section">O que falam de mim</h2>
          <p className="mt-4 text-base text-muted">
            Algumas recomendações de pessoas com as quais já trabalhei
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 120}>
              <article className="group h-full rounded-2xl bg-white p-10 shadow-soft transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-card">
                <img
                  src={t.brandLogo}
                  alt={t.brandAlt}
                  className="h-7 w-auto transition-transform duration-500 group-hover:scale-105"
                />
                <p className="mt-5 text-lg leading-relaxed text-muted">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-transparent transition-all duration-500 group-hover:ring-brand">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-full w-full object-cover object-left"
                    />
                  </div>
                  <div>
                    <p className="text-base font-bold text-ink">{t.name}</p>
                    <p className="text-sm text-muted">{t.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
