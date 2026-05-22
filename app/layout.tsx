import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteProfile } from "@/data/site";
import { localizedMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = {
  ...localizedMetadata("zh", "/"),
  metadataBase: new URL(siteProfile.seo.metadataBase),
  title: {
    default: siteProfile.seo.defaultTitle,
    template: siteProfile.seo.titleTemplate,
  },
  keywords: siteProfile.seo.keywords,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
