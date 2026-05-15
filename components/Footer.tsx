import { Linkedin, Github, Instagram, Mail } from "lucide-react";

const quickLinks = [
  "Principal",
  "Sobre",
  "Serviços",
  "Projetos recentes",
  "Currículo",
  "Contato",
];

const otherLinks = ["Entrar em contato", "Baixar currículo"];

export function Footer() {
  return (
    <footer className="bg-[#090e34] text-white">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h2 className="text-4xl font-bold lg:text-[44px] lg:leading-[1.2]">
              Let&apos;s Talk!
            </h2>
            <h3 className="mt-6 text-xl font-bold opacity-70">Informações</h3>
            <p className="mt-2 text-base text-[#959cb1]">
              allansmelo97@gmail.com
            </p>
            <p className="text-base text-[#959cb1]">+55 (24) 9 92222-9292</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Links rápidos</h3>
            <ul className="mt-8 space-y-3">
              {quickLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-base text-[#959cb1] transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Outros</h3>
            <ul className="mt-8 space-y-3">
              {otherLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-base text-[#959cb1] transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="flex justify-center gap-2">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Mail, label: "E-mail", href: "mailto:allansmelo97@gmail.com" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full text-[#959cb1] transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-center text-base text-[#959cb1]">
            Todos os direitos reservados © Allan Melo 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
