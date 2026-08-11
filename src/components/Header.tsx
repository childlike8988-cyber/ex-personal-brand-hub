"use client";

import { useState } from "react";
import { Profile } from "@/types/profile";

const navTargets: Record<string, string> = { 首頁: "top", 精選物件: "showcase", 精選推薦: "showcase", 房貸試算: "calculator", 服務: "services", 關於我: "about", 聯絡: "contact" };

export function Header({ profile }: { profile: Profile }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="#top" aria-label="E.X 個人品牌網站首頁"><strong>E.X</strong><span><small>Personal Brand Website</small><b>個人品牌網站</b></span></a>
    <nav className={open ? "nav is-open" : "nav"} aria-label="主要導覽">{profile.nav.map((item) => <a key={item} href={`#${navTargets[item]}`} onClick={() => setOpen(false)}>{item}</a>)}</nav>
    <a className="button button-gold header-cta" href="#contact">立即諮詢</a>
    <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="切換導覽選單"><span /><span /><span /></button>
  </div></header>;
}
