import { Reveal } from "./Reveal";

const companies = [
  { src: "/figma/company-1.svg", alt: "Empresa 1" },
  { src: "/figma/company-2.svg", alt: "Empresa 2" },
  { src: "/figma/company-3.svg", alt: "Empresa 3" },
  { src: "/figma/company-4.svg", alt: "Empresa 4" },
  { src: "/figma/company-5.svg", alt: "Empresa 5" },
  { src: "/figma/company-6.svg", alt: "Empresa 6" },
];

export function Companies() {
  return (
    <section className="bg-surface py-20">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Experiência comprovada</p>
          <h2 className="mt-3 h-section">Empresas que trabalho(ei)</h2>
          <p className="mt-4 text-base text-muted">
            Experiência comprovada em diversos projetos para as empresas abaixo:
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {companies.map((c, idx) => (
            <Reveal key={c.src} delay={idx * 60}>
              <img
                src={c.src}
                alt={c.alt}
                className="h-16 w-auto opacity-70 grayscale transition-all duration-500 hover:-translate-y-1 hover:scale-110 hover:opacity-100 hover:grayscale-0"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
