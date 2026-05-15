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
      "Tive o prazer de trabalhar com o Allan na XP Educação durante o projeto de lançamento da nova Área do Aluno — um desafio grande e estratégico, que exigiu muita colaboração entre Produto, Design e Tecnologia. Desde o início, o Allan se destacou não só pelas entregas de altíssima qualidade em Design, mas também pela forma como se relaciona com o time. Ele tem uma escuta ativa, entende rapidamente o problema que estamos tentando resolver e contribui com soluções criativas e viáveis, sempre levando em conta as perspectivas de Produto e de Desenvolvimento. É raro encontrar alguém com tanta habilidade técnica e, ao mesmo tempo, com tanta sensibilidade para o trabalho em equipe. Trabalhar com o Allan foi leve, produtivo e inspirador, e eu o recomendo fortemente.",
    name: "Mariana Soares",
    role: "Product and Project Manager @ Amazon",
    avatar: "/figma/avatar-mariana.svg",
    brandLogo: "/figma/brand-amazon.svg",
    brandAlt: "Amazon",
  },
  {
    quote:
      "Allan é uma pessoa que qualquer pessoa quer ter em um time. Super disposto a ajudar sempre colaborou muito em projeto de equipe. Super recomendo como profissional devido a sua capacidade de aprendizado muito eficaz.",
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
