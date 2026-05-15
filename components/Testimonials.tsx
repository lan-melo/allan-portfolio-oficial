"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

function TestimonialCard({
  testimonial,
  onOpen,
}: {
  testimonial: Testimonial;
  onOpen: (t: Testimonial) => void;
}) {
  const quoteRef = useRef<HTMLParagraphElement | null>(null);
  const [isClamped, setIsClamped] = useState(false);

  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;

    const measure = () => {
      setIsClamped(el.scrollHeight - el.clientHeight > 1);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const open = useCallback(() => {
    if (isClamped) onOpen(testimonial);
  }, [isClamped, onOpen, testimonial]);

  return (
    <article
      role={isClamped ? "button" : undefined}
      tabIndex={isClamped ? 0 : undefined}
      aria-label={
        isClamped ? `Ver recomendação completa de ${testimonial.name}` : undefined
      }
      onClick={open}
      onKeyDown={(e) => {
        if (isClamped && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          open();
        }
      }}
      className={`group h-full rounded-2xl bg-white p-10 shadow-soft transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-card ${
        isClamped
          ? "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          : ""
      }`}
    >
      <img
        src={testimonial.brandLogo}
        alt={testimonial.brandAlt}
        className="h-7 w-auto transition-transform duration-500 group-hover:scale-105"
      />
      <p
        ref={quoteRef}
        className="mt-5 line-clamp-5 text-lg leading-relaxed text-muted"
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      {isClamped && (
        <span className="mt-3 inline-block text-sm font-semibold text-brand">
          Ler recomendação completa
        </span>
      )}
      <div className="mt-8 flex items-center gap-4">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-transparent transition-all duration-500 group-hover:ring-brand">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-full w-full object-cover object-left"
          />
        </div>
        <div>
          <p className="text-base font-bold text-ink">{testimonial.name}</p>
          <p className="text-sm text-muted">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}

function TestimonialModal({
  testimonial,
  onClose,
}: {
  testimonial: Testimonial;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Recomendação de ${testimonial.name}`}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-card sm:p-10"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <img
          src={testimonial.brandLogo}
          alt={testimonial.brandAlt}
          className="h-7 w-auto"
        />
        <p className="mt-5 whitespace-pre-line text-lg leading-relaxed text-muted">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="mt-8 flex items-center gap-4">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="h-full w-full object-cover object-left"
            />
          </div>
          <div>
            <p className="text-base font-bold text-ink">{testimonial.name}</p>
            <p className="text-sm text-muted">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function Testimonials() {
  const [active, setActive] = useState<Testimonial | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
              <TestimonialCard testimonial={t} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      {mounted && active && (
        <TestimonialModal
          testimonial={active}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}
