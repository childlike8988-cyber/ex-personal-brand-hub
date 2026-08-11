import { Profile } from "@/types/profile";

export function ServicesSection({ profile }: { profile: Profile }) {
  return <section className="container services" id="services"><div className="section-heading"><div><p className="section-kicker">WHAT THIS WEBSITE CAN DO</p><h2>{profile.services.title}</h2></div></div><div className="services-grid">{profile.services.cards.map((card) => <article key={card.title}><span aria-hidden="true">{card.icon}</span><div><h3>{card.title}</h3><p>{card.description}</p></div></article>)}</div></section>;
}
