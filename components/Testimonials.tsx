type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  brand: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    name: "Mariana Soares",
    role: "Product and Project Manager @ Amazon",
    initials: "MS",
    brand: "amazon",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    name: "Iago Machado",
    role: "Sênior Software Developer @ CI&T",
    initials: "IM",
    brand: "CI&T",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Recomendações</p>
          <h2 className="mt-3 h-section">O que falam de mim</h2>
          <p className="mt-4 text-base text-muted">
            Algumas recomendações de pessoas com as quais já trabalhei
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl bg-white p-10 shadow-soft"
            >
              <div className="text-sm font-semibold uppercase tracking-wider text-ink/70">
                {t.brand}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-brand text-base font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-base font-bold text-ink">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
