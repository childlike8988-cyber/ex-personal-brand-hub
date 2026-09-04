import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://excreatorstudio.com/"),
  title: "E.X Personal Brand Website",
  description: "個人品牌 × 業務展示 × 專業工具",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
