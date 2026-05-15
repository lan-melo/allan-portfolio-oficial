import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <p className="eyebrow">SOBRE MIM</p>
            <h2 className="mt-4 h-section">
              Melhor design,
              <br />
              melhor experiência
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              Transformo complexidade em clareza.
              <br />
              Não acredito em &ldquo;design bonito&rdquo;. Acredito em design que
              performa.
            </p>
          </Reveal>

          <Reveal direction="left" delay={100}>
            <h3 className="text-3xl font-semibold text-ink">Conecte-se comigo</h3>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Eu tenho mais de 4 anos de experiência na área de Product Designer,
              lidero produtos e já fui responsável por:
            </p>
            <ul className="mt-4 space-y-1 text-base leading-relaxed text-muted">
              <li className="transition-colors hover:text-brand">
                +40% de eficiência em design systems
              </li>
              <li className="transition-colors hover:text-brand">
                +25% de novos usuários em 2 meses
              </li>
              <li className="transition-colors hover:text-brand">
                +33% de aumento de engajamento em 30 dias
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:flex-wrap">
              <a
                href="/allan-melo-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full lg:w-auto"
              >
                Baixar currículo
              </a>
              <a
                href="https://www.linkedin.com/in/allansmelo/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline w-full lg:w-auto"
              >
                Ver LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
