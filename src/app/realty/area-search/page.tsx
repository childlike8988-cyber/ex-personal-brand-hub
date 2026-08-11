import type { Metadata } from "next";
import { AreaSearchShowcase } from "@/components/area-search/AreaSearchShowcase";
import { FooterCTA } from "@/components/FooterCTA";
import { Header } from "@/components/Header";
import { profiles } from "@/data/profiles";

export const metadata: Metadata = {
  title: "區域找房（展示） | E.X Personal Brand Website",
  description: "個人房仲品牌網站區域找房功能展示。",
};

export default function AreaSearchPage() {
  return <main className="site realty area-search-site"><Header profile={profiles.realty} activeNav="區域找房" isSubpage /><AreaSearchShowcase /><FooterCTA /><footer className="site-footer">© 2026 E.X Personal Brand Website · Area Property Search Demo<br />本頁資料與地圖均為展示用途。</footer></main>;
}
