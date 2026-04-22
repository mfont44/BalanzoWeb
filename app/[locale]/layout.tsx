import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import type { Locale } from "@/src/i18n/config";
import { isLocale } from "@/src/i18n/config";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <main className="flex min-h-screen flex-col">
        <div className="flex-1">{children}</div>
        <Footer locale={locale as Locale} />
      </main>
    </>
  );
}
