"use client";

import { ProfileType } from "@/types/profile";

export function ProfileSwitch({ active, onChange }: { active: ProfileType; onChange: (profile: ProfileType) => void }) {
  return <div className="switch-area"><div className="profile-switch" role="group" aria-label="展示模式切換"><span>INDUSTRY DEMO</span><button className={active === "realty" ? "active" : ""} onClick={() => onChange("realty")} aria-pressed={active === "realty"}>房仲業</button><button className={active === "generic" ? "active" : ""} onClick={() => onChange("generic")} aria-pressed={active === "generic"}>通用行業</button></div><p>同一套網站架構，可依不同產業與個人需求切換與客製。</p></div>;
}
