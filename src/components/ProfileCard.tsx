"use client";

import { useState } from "react";
import Image from "next/image";
import { Profile } from "@/types/profile";

export function ProfileCard({ profile }: { profile: Profile }) {
  const p = profile.person; const [message, setMessage] = useState("");
  const copyEmail = async () => { try { await navigator.clipboard.writeText(p.email); setMessage("Email 已複製到剪貼簿"); } catch { setMessage(`Demo Email：${p.email}`); } };
  return <section className="profile-card container" id="about"><div className="avatar-wrap"><div className="avatar avatar-image"><Image src={p.image} alt={`${p.name} Demo profile image`} width={176} height={176} priority /><span className="visually-hidden">Demo profile image</span></div><p>{p.note}</p></div><div className="profile-details"><p className="section-kicker">DIGITAL NAME CARD</p><span className="demo-contact-label">DEMO CONTACT INFO</span><h2>{p.name}</h2><h3>{p.role}</h3><ul><li><span>⌖</span>服務區域：{p.area}</li><li><span className="line-dot">●</span>LINE：{p.line}</li><li><span>☎</span>電話：{p.phone}</li><li><span>✉</span>Email：{p.email}</li></ul><div className="contact-actions"><a className="contact-action" href={`tel:${p.phone}`} aria-label={`撥打電話給 ${p.name}`}>電話</a><button className="contact-action" type="button" onClick={() => setMessage("Demo：正式版本可串接 LINE 官方帳號或個人連結。")} aria-label="開啟 LINE 聯繫示範">LINE</button><button className="contact-action" type="button" onClick={copyEmail}>複製 Email</button></div>{message && <p className="inline-message" role="status">{message}</p>}</div><div className="qr-card"><b>LINE 快速聯繫</b><div className="qr-placeholder" aria-label="LINE QR Code placeholder"><i /><i /><i /><i /><strong>LINE</strong></div><span>掃描加入好友</span></div></section>;
}
