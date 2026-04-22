import ca from "./ca";
import en from "./en";
import es from "./es";
import type { Locale } from "./config";

export const dictionaries = {
  ca,
  es,
  en,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
