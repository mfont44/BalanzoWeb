import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/src/i18n/config";

export default function RootPrivacyRedirectPage() {
  redirect(`/${DEFAULT_LOCALE}/privacy-policy`);
}
