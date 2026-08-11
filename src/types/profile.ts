export type ProfileType = "realty" | "generic";

export type ShowcaseItem = {
  title: string;
  description: string;
  price: string;
  imagePosition: string;
  location?: string;
  layout?: string;
  area?: string;
  tags: string[];
};

export type Profile = {
  type: ProfileType;
  label: string;
  eyebrow: string;
  isDemo: true;
  nav: string[];
  hero: { title: string[]; subtitle: string; description: string; primaryCta: string; secondaryCta: string; visualTitle: string; visualBody: string };
  person: { name: string; role: string; area: string; line: string; phone: string; email: string; note: string };
  showcase: { title: string; allLabel: string; bookingLabel: string; cards: ShowcaseItem[] };
  services: { title: string; cards: { title: string; description: string; icon: string }[] };
  modules: string[];
};
