import Link from "next/link";
import type { Locale } from "@/src/i18n/config";
import { getDictionary } from "@/src/i18n/dictionaries";

const SUPPORT_EMAIL = "itinerariapps@gmail.com";

type Props = {
  locale: Locale;
};

export default function Footer({ locale }: Props) {
  const t = getDictionary(locale);

  return (
    <footer className="border-t border-zinc-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href={`/${locale}/privacy-policy`}
          className="transition-colors hover:text-indigo-700"
        >
          {t.nav.privacy}
        </Link>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="transition-colors hover:text-indigo-700"
        >
          {t.nav.support}: {SUPPORT_EMAIL}
        </a>
      </div>
    </footer>
  );
}
