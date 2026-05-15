export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
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
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-ink">Conecte-se comigo</h3>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Eu tenho mais de 4 anos de experiência na área de Product Designer,
              lidero produtos e já fui responsável por:
            </p>
            <ul className="mt-4 space-y-1 text-base leading-relaxed text-muted">
              <li>+40% de eficiência em design systems</li>
              <li>+25% de novos usuários em 2 meses</li>
              <li>+33% de aumento de engajamento em 30 dias</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="btn-primary">
                Baixar currículo
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Ver LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
