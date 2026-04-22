import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDictionary } from "@/src/i18n/dictionaries";
import { isLocale } from "@/src/i18n/config";

const SUPPORT_EMAIL = "itinerariapps@gmail.com";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalizedHomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const currentPath = `/${locale}`;

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_60%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-8 sm:py-12">
      <header className="sticky top-4 z-20 rounded-2xl border border-zinc-200/80 bg-white/85 px-4 py-3 shadow-sm backdrop-blur sm:px-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href={currentPath} className="inline-flex items-center gap-3">
          <Image src="/brand/icon.png" alt="Balanzo logo" width={34} height={34} className="rounded-lg" />
          <span className="text-lg font-semibold tracking-tight text-zinc-950">
            {t.appName}
          </span>
        </Link>
        <LanguageSwitcher
          currentLocale={locale}
          currentPath={currentPath}
          label={t.nav.language}
        />
        </div>
      </header>

      <section className="grid gap-8 rounded-3xl border border-zinc-200 bg-white px-7 py-10 shadow-sm sm:grid-cols-2 sm:items-center sm:px-10 sm:py-12">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-indigo-100 bg-indigo-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
            {t.hero.badge}
          </p>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-950 px-5 py-3 font-medium text-white transition hover:bg-zinc-800"
            >
              {t.hero.playStore}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              {t.hero.appStore}
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xs">
          <div className="absolute -inset-3 rounded-[2rem] bg-indigo-500/15 blur-xl" />
          <div className="relative rounded-[2rem] border border-zinc-200 bg-zinc-950 p-3 shadow-xl">
            <div className="rounded-[1.5rem] bg-white p-4">
              <div className="mb-3 h-4 w-24 rounded bg-zinc-100" />
              <div className="space-y-2">
                <div className="h-10 rounded-xl bg-indigo-50" />
                <div className="h-10 rounded-xl bg-zinc-100" />
                <div className="h-10 rounded-xl bg-zinc-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
          {t.features.title}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {t.features.items.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
            >
              <h3 className="text-lg font-semibold text-zinc-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
          {t.screenshots.title}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.screenshots.placeholders.map((label, index) => (
            <div
              key={label}
              className="relative mx-auto flex aspect-[9/19.5] w-full max-w-[240px] items-end overflow-hidden rounded-[1.8rem] border border-zinc-200 bg-zinc-950 p-4 text-sm text-white shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-indigo-400/30" />
              <div className="absolute left-1/2 top-2.5 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/25" />
              <span className="relative z-10 font-medium">{`${index + 1}. ${label}`}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-white p-7 shadow-sm sm:p-10">
        <h2 className="text-xl font-semibold text-zinc-950">{t.support.title}</h2>
        <p className="mt-2 max-w-3xl text-zinc-600">{t.support.description}</p>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="mt-4 inline-block rounded-lg bg-zinc-950 px-4 py-2 font-medium text-white transition hover:bg-zinc-800"
        >
          {SUPPORT_EMAIL}
        </a>
      </section>
      </div>
    </div>
  );
}
