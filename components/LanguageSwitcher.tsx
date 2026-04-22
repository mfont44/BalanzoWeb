import Link from "next/link";
import type { Locale } from "@/src/i18n/config";
import { SUPPORTED_LOCALES } from "@/src/i18n/config";
import { dictionaries } from "@/src/i18n/dictionaries";

type Props = {
  currentLocale: Locale;
  currentPath: string;
  label: string;
};

function localizePath(path: string, locale: Locale): string {
  if (path === "/") return `/${locale}`;
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return `/${locale}`;
  segments[0] = locale;
  return `/${segments.join("/")}`;
}

export default function LanguageSwitcher({
  currentLocale,
  currentPath,
  label,
}: Props) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/90 p-1 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur">
      <span className="px-2 text-zinc-500">{label}</span>
      {SUPPORTED_LOCALES.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={localizePath(currentPath, locale)}
            className={`rounded-full px-2.5 py-1 transition ${
              isActive
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
            }`}
          >
            {dictionaries[locale].localeLabel}
          </Link>
        );
      })}
    </div>
  );
}
