"use client";

import { useState } from "react";
import { Profile, ShowcaseItem } from "@/types/profile";
import { DetailModal } from "@/components/DetailModal";
import { assetPath } from "@/lib/assetPath";

export function ShowcaseSection({ profile }: { profile: Profile }) {
  const [selected, setSelected] = useState<ShowcaseItem | null>(null); const image = assetPath(profile.type === "realty" ? "/images/realty/contact-sheet.png" : "/images/generic/contact-sheet.png");
  return <section className="container showcase" id="showcase"><div className="section-heading"><div><p className="section-kicker">SHOWCASE</p><h2>{profile.showcase.title}</h2></div><a href="#contact">{profile.showcase.allLabel} <span>→</span></a></div><div className="showcase-grid">{profile.showcase.cards.map((card) => <article className="showcase-card" key={card.title}><div className="card-image" role="img" aria-label={`${card.title}展示圖片`} style={{ backgroundImage: `url(${image})`, backgroundPosition: card.imagePosition }} /><div className="card-content"><p className="card-meta">{profile.type === "realty" ? card.location : "FOOD & LIFESTYLE"}</p><h3>{card.title}</h3><p className="card-description">{profile.type === "realty" ? `${card.layout} ・ ${card.area}` : card.description}</p><strong>{card.price}</strong><div><button type="button" className="button button-outline small" onClick={() => setSelected(card)}>查看詳情</button><button type="button" className="button button-gold small" onClick={() => setSelected(card)}>{profile.showcase.bookingLabel}</button></div></div></article>)}</div>{selected && <DetailModal profile={profile} item={selected} image={image} onClose={() => setSelected(null)} />}</section>;
}
