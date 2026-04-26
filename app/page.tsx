import { DEFAULT_LOCALE } from "@/src/i18n/config";
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
