"use client";

import { useEffect, useRef } from "react";
import { Profile, ShowcaseItem } from "@/types/profile";

export function DetailModal({ profile, item, image, onClose }: { profile: Profile; item: ShowcaseItem; image: string; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { closeRef.current?.focus(); const escape = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); }; document.addEventListener("keydown", escape); const previous = document.body.style.overflow; document.body.style.overflow = "hidden"; return () => { document.removeEventListener("keydown", escape); document.body.style.overflow = previous; }; }, [onClose]);
  return <div className="modal-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title"><button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label="關閉詳情視窗">×</button><div className="modal-image" role="img" aria-label={`${item.title}展示圖片`} style={{ backgroundImage: `url(${image})`, backgroundPosition: item.imagePosition }} /><div className="modal-content"><p className="section-kicker">{profile.type === "realty" ? "PROPERTY PREVIEW" : "CURATED RECOMMENDATION"}</p><h2 id="detail-title">{item.title}</h2><strong>{item.price}</strong>{profile.type === "realty" && <p className="modal-specs">{item.location}<br />{item.layout} ・ {item.area}</p>}<p>{item.description}</p><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="button button-gold modal-action" href="#contact" onClick={onClose}>{profile.type === "realty" ? "預約看屋" : "立即預約 / 聯絡"}</a></div></section></div>;
}
