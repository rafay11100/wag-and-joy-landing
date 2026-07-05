import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, PawPrint, Clock, Home } from "lucide-react";
import logoMarkAsset from "@/assets/logo-mark.png.asset.json";

const CONTACT_HREF =
  "mailto:camilla@wagsandjoy.com?subject=Service%20Inquiry";

export const Route = createFileRoute("/rates")({
  head: () => ({
    meta: [
      { title: "Services and Rates · Wags and Joy Pet Care" },
      {
        name: "description",
        content:
          "Transparent pricing for dog walking and drop-in pet visits with Wags and Joy Pet Care in Davison, MI.",
      },
      { property: "og:title", content: "Services and Rates · Wags and Joy Pet Care" },
      {
        property: "og:description",
        content:
          "Transparent pricing for dog walking and drop-in pet visits in Davison, MI.",
      },
    ],
  }),
  component: RatesPage,
});

const SERVICES = [
  {
    icon: Clock,
    title: "30 Minute Dog Walk",
    price: "$25",
    desc: "A brisk, happy walk with individual attention, sniff breaks, and plenty of tail wags.",
  },
  {
    icon: PawPrint,
    title: "60 Minute Dog Walk",
    price: "$40",
    desc: "A longer adventure for high-energy pups who love to explore and stretch their legs.",
  },
  {
    icon: Home,
    title: "30 Minute Drop-In Pet Visit",
    price: "$25",
    desc: "Feeding, potty breaks, fresh water, and cuddle time while you're away.",
  },
];

function RatesPage() {
  return (
    <div className="min-h-screen bg-cream text-navy">
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-cream-deep shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3">
            <Link to="/" className="flex items-center shrink-0" aria-label="Wags and Joy Pet Care">
              <img
                src={logoMarkAsset.url}
                alt="Wags and Joy Pet Care"
                width={240}
                height={240}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </Link>
            <Link
              to="/"
              className="text-sm font-bold uppercase tracking-wider text-navy hover:text-gold transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-script text-3xl text-gold">Simple &amp; honest</span>
          <h1 className="mt-1 font-serif-display text-4xl sm:text-5xl lg:text-6xl text-navy">
            Services and Rates
          </h1>
          <p className="mt-4 text-navy-soft leading-relaxed">
            Straightforward pricing for the care your pup deserves. Every visit
            includes love, patience, and attention as standard.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-3xl bg-card p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gold/20 mb-5">
                <s.icon className="h-7 w-7 text-navy" />
              </div>
              <h2 className="text-2xl text-navy font-serif-display">{s.title}</h2>
              <p className="mt-3 text-navy-soft leading-relaxed flex-1">
                {s.desc}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif-display text-4xl font-bold text-navy">
                  {s.price}
                </span>
                <span className="text-sm text-navy-soft">/ visit</span>
              </div>
              <a
                href={CONTACT_HREF}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-navy text-cream px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-soft shadow-sm hover:shadow-md"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-navy-soft italic">
          Additional rates upon request.
        </p>

        <div className="mt-16 rounded-[2rem] bg-cream-deep p-8 sm:p-12 text-center">
          <h2 className="font-serif-display text-3xl text-navy">
            Questions about a custom visit?
          </h2>
          <p className="mt-3 text-navy-soft max-w-xl mx-auto">
            Reach out directly and Camilla will put together something that
            fits your pup's needs.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a
              href={CONTACT_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-navy text-cream px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-navy-soft transition-all"
            >
              <Mail className="h-4 w-4" />
              Email Camilla
            </a>
            <a
              href="tel:+17207389557"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy text-navy px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-all"
            >
              <Phone className="h-4 w-4" />
              (720) 738-9557
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
