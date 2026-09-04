"use client";

import { useState } from "react";
import { assetPath } from "@/lib/assetPath";
import { Profile } from "@/types/profile";

const EX_CREATOR_STUDIO_URL = "https://excreatorstudio.com/";

const navTargets: Record<string, string> = {
  首頁: EX_CREATOR_STUDIO_URL, 精選物件: "#showcase", 精選推薦: "#showcase", 區域找房: "/realty/area-search", 房貸試算: "#calculator", 服務: "#services", 關於我: "#about", 聯絡: "#contact",
};

export function Header({ profile, activeNav, isSubpage = false }: { profile: Profile; activeNav?: string; isSubpage?: boolean }) {
  const [open, setOpen] = useState(false);
  const hrefFor = (item: string) => {
    const target = navTargets[item];
    if (target.startsWith("http")) return target;
    if (target.startsWith("/")) return assetPath(target);
    return isSubpage ? assetPath(`/${target}`) : target;
  };
  return <header className="site-header"><div className="container header-inner">
    <a className="ecosystem-back-link" href={EX_CREATOR_STUDIO_URL} aria-label="返回 E.X 主站"><span className="ecosystem-back-link__desktop">← 返回 E.X 主站</span><span className="ecosystem-back-link__mobile">← E.X 主站</span><small>Creator Ecosystem</small></a>
    <a className="brand" href={EX_CREATOR_STUDIO_URL} aria-label="前往 E.X 主站"><strong>E.X</strong><span><small>Personal Brand Website</small><b>個人品牌網站</b></span></a>
    <nav className={open ? "nav is-open" : "nav"} aria-label="主要導覽">{profile.nav.map((item) => <a key={item} className={activeNav === item ? "active" : ""} href={hrefFor(item)} onClick={() => setOpen(false)}>{item}</a>)}</nav>
    <a className="button button-gold header-cta" href={isSubpage ? assetPath("/#contact") : "#contact"}>立即諮詢</a>
    <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="開啟主要導覽"><span /><span /><span /></button>
  </div></header>;
}
