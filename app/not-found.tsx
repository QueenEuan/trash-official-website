import type { Metadata } from "next";
import { NotFoundContent } from "@/components/NotFoundContent";

export const metadata: Metadata = {
  title: { absolute: "404 | TRASH" },
  description: "這個網址沒有對應的 TRASH 官方頁面。",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundContent />;
}
