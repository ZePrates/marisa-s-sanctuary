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
      {/* Subtle organic shape in the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-sage/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center text-center">
        {/* Profile placeholder */}
        <div className="animate-soft-scale">
          <div className="relative">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-sage-border bg-creme-light shadow-sm">
              <span className="font-serif text-3xl font-medium text-sage-dark">
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
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-sage-foreground/80">
            {title}
          </p>
        </div>

        {/* Main quote */}
        <div className="mt-10 animate-fade-in-up delay-200">
          <p className="font-serif text-2xl leading-snug font-medium text-sage-dark sm:text-[1.625rem]">
            {mainQuote}
          </p>
        </div>

        {/* Secondary quote */}
        <div className="mt-5 animate-fade-in-up delay-300">
          <p className="text-base leading-relaxed text-sage-foreground/70">
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
            className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-sage px-6 py-4 text-center text-base font-semibold text-sage-foreground shadow-[0_2px_12px_-4px_var(--color-sage)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-subtle hover:shadow-[0_6px_20px_-6px_var(--color-sage)] active:translate-y-0 active:shadow-[0_2px_8px_-4px_var(--color-sage)]"
          >
            <Calendar
              aria-hidden="true"
              className="h-[1.1em] w-[1.1em] shrink-0 opacity-80 transition-transform duration-300 group-hover:scale-110"
              strokeWidth={2}
            />
            <span>Marcar Consulta</span>
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-sage/85 px-6 py-4 text-center text-base font-semibold text-sage-foreground shadow-[0_2px_10px_-4px_var(--color-sage)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage hover:shadow-[0_6px_18px_-6px_var(--color-sage)] active:translate-y-0 active:shadow-[0_2px_8px_-4px_var(--color-sage)]"
          >
            <User
              aria-hidden="true"
              className="h-[1.1em] w-[1.1em] shrink-0 opacity-80 transition-transform duration-300 group-hover:scale-110"
              strokeWidth={2}
            />
            <span>Conhece-me um pouco melhor</span>
          </a>
        </nav>

      </div>
    </main>
  );
}
