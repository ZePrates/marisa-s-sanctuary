import { createFileRoute } from "@tanstack/react-router";
import { Calendar, User } from "lucide-react";

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
    initials,
    name,
    title,
    mainQuote,
    secondaryQuote,
    specialities,
    bookingUrl,
    instagramUrl,
  } = profileConfig;

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-background px-6 py-12">
      {/* Subtle organic shapes in the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="animate-slow-drift absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
        <div className="animate-slow-drift-alt absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-sage/8 blur-3xl" />
        <div className="animate-slow-drift absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-sage/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center text-center">
        {/* Profile placeholder */}
        <div className="animate-soft-scale">
          <div className="relative rounded-full p-[3px] ring-1 ring-sage/25">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-sage-border bg-creme-light shadow-[0_8px_28px_-14px_var(--color-sage)]">
              <span className="font-serif text-3xl font-medium tracking-[0.08em] text-sage-dark">
                {initials}
              </span>
            </div>
            {/* Photo replacement note: swap the inner content for an <img /> later */}
          </div>
        </div>

        {/* Name and title */}
        <div className="mt-7 animate-fade-in-up delay-100">
          <h1 className="font-serif text-[2rem] leading-[1.15] font-semibold tracking-tight text-sage-dark sm:text-[2.25rem]">
            {name}
          </h1>
          <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-sage-foreground/75">
            {title}
          </p>
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="mt-8 flex animate-fade-in-up items-center gap-3 delay-200"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-sage/50" />
          <span className="h-1 w-1 rounded-full bg-sage/60" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-sage/50" />
        </div>

        {/* Main quote */}
        <div className="mt-8 animate-fade-in-up delay-200">
          <p className="font-serif text-[1.6rem] leading-snug font-medium text-balance text-sage-dark sm:text-[1.75rem]">
            {mainQuote}
          </p>
        </div>

        {/* Secondary quote */}
        <div className="mt-5 animate-fade-in-up delay-300">
          <p className="text-[0.95rem] leading-relaxed text-balance text-sage-foreground/70">
            {secondaryQuote}
          </p>
        </div>

        {/* Action links */}
        <nav
          aria-label="Links principais"
          className="mt-10 flex w-full flex-col gap-4 animate-fade-in-up delay-400"
        >
          <a
            href={bookingUrl}
            className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-sage px-6 py-[1.15rem] text-center text-base font-semibold tracking-[0.01em] text-sage-foreground shadow-[0_3px_14px_-5px_var(--color-sage)] ring-1 ring-inset ring-creme-light/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-sage-subtle hover:shadow-[0_10px_24px_-8px_var(--color-sage)] active:translate-y-0 active:shadow-[0_2px_8px_-4px_var(--color-sage)]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-creme-light/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <Calendar
              aria-hidden="true"
              className="h-[1.1em] w-[1.1em] shrink-0 opacity-80 transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.75}
            />
            <span>Marcar Consulta</span>
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl border border-sage/40 bg-sage/20 px-6 py-[1.05rem] text-center text-base font-medium tracking-[0.01em] text-sage-dark shadow-[0_2px_10px_-6px_var(--color-sage)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-sage/35 hover:shadow-[0_8px_20px_-8px_var(--color-sage)] active:translate-y-0"
          >
            <User
              aria-hidden="true"
              className="h-[1.1em] w-[1.1em] shrink-0 opacity-70 transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.75}
            />
            <span>Conhece-me um pouco melhor</span>
          </a>
        </nav>

        {/* Footer */}
        <footer className="mt-14 flex animate-fade-in-up flex-col items-center gap-3 delay-500">
          <span aria-hidden="true" className="h-px w-12 bg-sage/35" />
          <p className="text-[0.65rem] font-medium uppercase leading-relaxed tracking-[0.2em] text-sage-foreground/60">
            {specialities}
          </p>
        </footer>

      </div>
    </main>
  );
}
