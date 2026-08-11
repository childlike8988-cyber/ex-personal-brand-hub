import { Profile } from "@/types/profile";

export function OptionalModules({ profile }: { profile: Profile }) {
  return <section className="container modules"><div><p className="section-kicker">FUTURE-READY</p><h2>需要什麼，再加什麼。</h2><p>網站可依不同產業與實際需求持續擴充。</p></div><div className="module-chips">{profile.modules.map((module) => <span key={module}>{module}</span>)}</div></section>;
}
