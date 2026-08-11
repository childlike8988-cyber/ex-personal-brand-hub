"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { Header } from "@/components/Header";
import { ProfileSwitch } from "@/components/ProfileSwitch";
import { HeroSection } from "@/components/HeroSection";
import { ProfileCard } from "@/components/ProfileCard";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { BookingDemo } from "@/components/BookingDemo";
import { ServicesSection } from "@/components/ServicesSection";
import { FooterCTA } from "@/components/FooterCTA";
import { OptionalModules } from "@/components/OptionalModules";
import { profiles } from "@/data/profiles";
import { ProfileType } from "@/types/profile";
import { assetPath } from "@/lib/assetPath";

export default function Home() {
  const [active, setActive] = useState<ProfileType>("realty");
  const profile = profiles[active];
  const assetVariables = { "--realty-sheet": `url("${assetPath("/images/realty/contact-sheet.png")}")`, "--generic-sheet": `url("${assetPath("/images/generic/contact-sheet.png")}")` } as CSSProperties;
  return <main className={`site ${active}`} style={assetVariables}><Header profile={profile} /><div className="switch-wrap container"><ProfileSwitch active={active} onChange={setActive} /></div><HeroSection profile={profile} /><ProfileCard profile={profile} /><ShowcaseSection profile={profile} />{active === "realty" ? <MortgageCalculator /> : <BookingDemo />}<ServicesSection profile={profile} /><OptionalModules profile={profile} /><FooterCTA /><footer className="site-footer">© 2026 E.X Personal Brand Website · Showcase Demo<br />實際建置內容、維護、網域與第三方服務依討論方案為準。</footer></main>;
}
