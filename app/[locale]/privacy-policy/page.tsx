import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDictionary } from "@/src/i18n/dictionaries";
import { isLocale } from "@/src/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalizedPrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const currentPath = `/${locale}/privacy-policy`;

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.14),transparent_65%)]" />
      <div className="mx-auto w-full max-w-4xl px-6 py-8 sm:py-12">
        <header className="sticky top-4 z-20 mb-8 rounded-2xl border border-zinc-200/80 bg-white/85 px-4 py-3 shadow-sm backdrop-blur sm:px-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href={`/${locale}`} className="inline-flex items-center gap-3">
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

      <article className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950">
          {t.privacyPage.title}
        </h1>
        <p className="mt-3 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
          {t.privacyPage.updatedAt}
        </p>
        <p className="mt-5 text-zinc-600">{t.privacyPage.intro}</p>

        <div className="mt-10 space-y-8">
          {t.privacyPage.sections.map((section) => (
            <section key={section.title} className="space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <h2 className="text-xl font-semibold text-zinc-900">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-zinc-600">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
      </div>
    </div>
  );
}
