import { assetPath } from "@/lib/assetPath";
import { Profile } from "@/types/profile";

export function OptionalModules({ profile }: { profile: Profile }) {
  return <section className="container modules"><div><p className="section-kicker">FUTURE-READY</p><h2>需要什麼，再加什麼。</h2><p>網站可依不同產業與實際需求持續擴充。</p></div><div className="module-chips">{profile.modules.map((module) => profile.type === "realty" && module === "區域找房" ? <a key={module} href={assetPath("/realty/area-search")}>區域找房 <span aria-hidden="true">→</span></a> : <span key={module}>{module}</span>)}</div></section>;
}
