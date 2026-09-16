import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";

import marisaFotoCapaAsset from "@/assets/marisa-foto-capa.jpg.asset.json";
import { profileConfig } from "@/lib/profile-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: profileConfig.seo.title },
      {
        name: "description",
        content: profileConfig.seo.description,
      },
      {
        property: "og:title",
        content: profileConfig.seo.title,
      },
      {
        property: "og:description",
        content: profileConfig.seo.description,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_PT" },
      { name: "twitter:title", content: profileConfig.seo.title },
      {
        name: "twitter:description",
        content: profileConfig.seo.description,
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const {
    name,
    title,
    mainQuote,
    secondaryQuote,
    specialities,
    bookingUrl,
  } = profileConfig;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-10 sm:py-12">
      {/* Elementos decorativos muito discretos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full border border-sage/10" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full border border-sage/10" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[420px] flex-col items-center text-center">
        {/* Fotografia de capa */}
        <div className="animate-soft-scale">
          <div className="rounded-full p-[3px] ring-1 ring-sage/20">
            <img
              src={marisaFotoCapaAsset.url}
              alt={`Fotografia de ${name}`}
              className="h-28 w-28 rounded-full border border-sage-border object-cover object-[center_15%] shadow-[0_10px_30px_-18px_var(--color-sage)]"
            />
          </div>
        </div>

        {/* Identidade */}
        <div className="mt-7 animate-fade-in-up delay-100">
          <h1 className="font-serif text-[2rem] font-semibold leading-[1.1] tracking-tight text-sage-dark sm:text-[2.2rem]">
            {name}
          </h1>

          <p className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-sage-foreground/70">
            {title}
          </p>
        </div>

        {/* Separador editorial */}
        <div
          aria-hidden="true"
          className="mt-8 flex animate-fade-in-up items-center gap-3 delay-200"
        >
          <span className="h-px w-9 bg-sage/30" />
          <span className="h-1 w-1 rounded-full bg-sage/50" />
          <span className="h-px w-9 bg-sage/30" />
        </div>

        {/* Mensagem principal */}
        <div className="mt-8 animate-fade-in-up delay-200">
          <p className="font-serif text-[1.72rem] font-semibold leading-[1.25] text-balance text-olive-deep sm:text-[1.85rem]">
            {mainQuote}
          </p>
        </div>

        {/* Mensagem secundária */}
        <div className="mt-5 animate-fade-in-up delay-300">
          <p className="text-[0.94rem] leading-relaxed text-balance text-sage-foreground/70">
            {secondaryQuote}
          </p>
        </div>

        {/* Links principais */}
        <nav
          aria-label="Links principais"
          className="mt-10 flex w-full flex-col gap-3.5 animate-fade-in-up delay-400"
        >
          {/* Ação principal */}
          <a
            href={bookingUrl}
            className="group flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-2xl bg-olive px-6 py-4 text-center text-[0.98rem] font-semibold tracking-[0.01em] text-creme-light shadow-[0_8px_22px_-12px_var(--color-olive)] ring-1 ring-inset ring-creme-light/15 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-olive-deep hover:shadow-[0_12px_28px_-12px_var(--color-olive)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0"
          >
            <Calendar
              aria-hidden="true"
              className="h-[1.05em] w-[1.05em] shrink-0 opacity-80 transition-transform duration-300 group-hover:scale-105"
              strokeWidth={1.75}
            />
            <span>Marcar Consulta</span>
          </a>

          {/* Página de apresentação / percurso */}
          <Link
            to="/conhece-me"
            className="group flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-2xl border border-olive/25 bg-olive-muted/60 px-6 py-4 text-center text-[0.96rem] font-medium tracking-[0.01em] text-olive-deep transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-olive/40 hover:bg-olive-muted hover:shadow-[0_8px_20px_-14px_var(--color-olive)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0"
          >
            <span>Conhece-me um pouco melhor</span>
            <ArrowRight
              aria-hidden="true"
              className="h-[1em] w-[1em] shrink-0 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </Link>
        </nav>

        {/* Especialidades */}
        <footer className="mt-12 animate-fade-in-up delay-500">
          <div
            aria-hidden="true"
            className="mx-auto mb-4 h-px w-10 bg-sage/25"
          />

          <p className="max-w-[320px] text-[0.62rem] font-medium uppercase leading-[1.7] tracking-[0.18em] text-sage-foreground/55">
            {specialities}
          </p>
        </footer>
      </div>
    </main>
  );
}
