import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  HeartPulse,
  PawPrint,
  Phone,
  Mail,
  Globe,
  MapPin,
  Facebook,
  Instagram,
  Menu,
  X,
  Quote,
  Star,
  UserCheck,
  BadgeCheck,
  Clock,
  Home,
} from "lucide-react";
import { useState } from "react";
import logoMarkAsset from "@/assets/logo-mark.png.asset.json";
import logoWordmarkAsset from "@/assets/logo-wordmark.png.asset.json";
import heroDogAsset from "@/assets/dog-hero.webp.asset.json";
import camillaNewAsset from "@/assets/camilla-new.jpg.asset.json";
import camillaDogAsset from "@/assets/camilla-dog.webp.asset.json";
import portraitAsset from "@/assets/portrait.webp.asset.json";
import dogSitAsset from "@/assets/dog-sit.webp.asset.json";
import dogTrailAsset from "@/assets/dog-trail.webp.asset.json";
import dogBallAsset from "@/assets/dog-ball.webp.asset.json";
import dogGrassAsset from "@/assets/dog-grass.webp.asset.json";

const logoUrl = logoMarkAsset.url;
const heroDog = heroDogAsset.url;
const camillaPhoto = camillaNewAsset.url;
const camillaDog = camillaDogAsset.url;
const portrait = portraitAsset.url;
const serviceSolo = dogSitAsset.url;
const servicePack = dogTrailAsset.url;
const serviceDropin = dogBallAsset.url;
const dogGrass = dogGrassAsset.url;

const NEW_CLIENTS_HREF =
  "https://www.timetopet.com/portal/wagsandjoy/create-account";
const EXISTING_CLIENTS_HREF = "https://www.timetopet.com/portal/wagsandjoy";
const CONTACT_HREF = "#contact";
const MEET_GREET_HREF =
  "mailto:camilla@wagsandjoy.com?subject=Meet%20and%20Greet%20Request";
const SERVICE_INQUIRY_HREF =
  "mailto:camilla@wagsandjoy.com?subject=Service%20Inquiry";

const SITE_URL = "https://wag-and-joy-landing.lovable.app";
const HOME_TITLE =
  "Wags and Joy Pet Care · Friendly Dog Walking in Davison, MI";
const HOME_DESCRIPTION =
  "Insured, first-aid-certified dog walking and drop-in pet visits in Davison, MI. Solo walks, pack walks, cat care. Book your free meet & greet.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESCRIPTION },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: heroDogAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESCRIPTION },
      { name: "twitter:image", content: heroDogAsset.url },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Wags and Joy Pet Care",
          description: HOME_DESCRIPTION,
          url: `${SITE_URL}/`,
          image: heroDogAsset.url,
          email: "camilla@wagsandjoy.com",
          areaServed: "Davison, MI",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Davison",
            addressRegion: "MI",
            addressCountry: "US",
          },
          priceRange: "$$",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Pet Care Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "30 Minute Dog Walk" },
                price: "25",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "60 Minute Dog Walk" },
                price: "40",
                priceCurrency: "USD",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "30 Minute Drop-In Pet Visit",
                },
                priceCurrency: "USD",
              },
            ],
          },
        }),
      },
    ],
  }),
  component: Landing,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#meet", label: "Meet & Greet" },
  { href: "#reviews", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

function TrustBadge({
  icon: Icon,
  children,
}: {
  icon: typeof ShieldCheck;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-deep px-3 py-1 text-xs font-semibold text-navy">
      <Icon className="h-3.5 w-3.5 text-gold" strokeWidth={2.5} />
      {children}
    </span>
  );
}

function PillButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "gold";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md";
  const styles = {
    primary: "bg-navy text-cream hover:bg-navy-soft",
    gold: "bg-gold text-navy hover:bg-gold-soft",
    ghost: "border-2 border-navy text-navy hover:bg-navy hover:text-cream",
  };
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function Blob({
  className = "",
  color = "var(--cream-deep)",
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <svg
      className={`block w-full h-12 sm:h-16 ${className}`}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <path
        d="M0,80 C240,10 480,75 720,40 C960,5 1200,75 1440,30 L1440,80 L0,80 Z"
        fill={color}
      />
    </svg>
  );
}

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-cream text-navy">
      {/* TOP CONTACT STRIP */}
      <div className="hidden md:block bg-navy text-cream/90 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <div className="flex items-center gap-5">
            <a href="tel:+17207389557" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="h-3.5 w-3.5 text-gold" /> (720) 738-9557
            </a>
            <a href="mailto:camilla@wagsandjoy.com" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="h-3.5 w-3.5 text-gold" /> camilla@wagsandjoy.com
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold" /> Davison, Michigan
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-gold" /> Fully Insured</span>
            <span className="opacity-40">·</span>
            <span className="inline-flex items-center gap-1.5"><HeartPulse className="h-3.5 w-3.5 text-gold" /> Red Cross Pet First Aid</span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-cream-deep shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3">
            <a href="#top" className="flex items-center shrink-0" aria-label="Wags and Joy Pet Care">
              <img
                src={logoUrl}
                alt="Wags and Joy Pet Care"
                width={240}
                height={240}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </a>
            <nav className="hidden lg:flex items-center gap-7">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="relative text-sm font-bold uppercase tracking-wider text-navy hover:text-gold transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="hidden lg:flex items-center gap-3">
              <PillButton
                href={NEW_CLIENTS_HREF}
                variant="ghost"
                className="!py-2.5 !px-5"
              >
                New Clients
              </PillButton>
              <PillButton
                href={EXISTING_CLIENTS_HREF}
                variant="ghost"
                className="!py-2.5 !px-5"
              >
                Existing Clients
              </PillButton>
              <PillButton href={CONTACT_HREF} variant="gold" className="!py-2.5 !px-6">
                Book Now
              </PillButton>
            </div>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden rounded-full p-2 text-navy hover:bg-cream-deep"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {menuOpen && (
            <div className="lg:hidden pb-4 flex flex-col gap-1 border-t border-cream-deep pt-3">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-bold uppercase tracking-wider text-navy hover:bg-cream-deep"
                >
                  {n.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 items-start">
                <PillButton href={NEW_CLIENTS_HREF} variant="ghost">
                  New Clients
                </PillButton>
                <PillButton href={EXISTING_CLIENTS_HREF} variant="ghost">
                  Existing Clients
                </PillButton>
                <PillButton href={CONTACT_HREF} variant="gold">
                  Book Now
                </PillButton>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="font-script text-3xl text-gold">Hello, friend!</span>
              <h1 className="mt-2 font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-navy">
                Friendly and Professional Dog Walking You Can Trust.
              </h1>
              <p className="mt-6 text-lg text-navy-soft max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Individual, caring attention for every dog, because your pup
                deserves a walk that feels like a play date with a friend.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <PillButton href={CONTACT_HREF} variant="primary">
                  Book Now
                </PillButton>
                <PillButton href="#services" variant="ghost">
                  Our Services
                </PillButton>
              </div>
              <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start md:hidden">
                <TrustBadge icon={ShieldCheck}>Fully Insured</TrustBadge>
                <TrustBadge icon={HeartPulse}>Pet First Aid Trained</TrustBadge>
                <TrustBadge icon={UserCheck}>Background Checked</TrustBadge>
                <TrustBadge icon={BadgeCheck}>ID Verified</TrustBadge>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-brand-yellow opacity-40 scale-90" aria-hidden />
              <div className="relative aspect-square max-w-md mx-auto rounded-full overflow-hidden ring-8 ring-cream shadow-2xl">
                <img
                  src={heroDog}
                  alt="Happy blue heeler dog smiling on a red rock trail"
                  width={1080}
                  height={1080}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-2 rounded-full bg-cream px-4 py-2 shadow-lg flex items-center gap-2 rotate-6">
                <PawPrint className="h-4 w-4 text-gold" />
                <span className="text-xs font-bold text-navy">Tail-wag guaranteed</span>
              </div>
              <div className="absolute -bottom-3 -left-2 rounded-full bg-navy text-cream px-4 py-2 shadow-lg flex items-center gap-2">
                <HeartPulse className="h-4 w-4 text-gold" />
                <span className="text-xs font-bold">First-aid certified</span>
              </div>
            </div>
          </div>
          {/* Desktop trust badges row */}
          <div className="hidden md:flex flex-wrap gap-2 justify-center lg:justify-start mt-10">
            <TrustBadge icon={ShieldCheck}>Fully Insured</TrustBadge>
            <TrustBadge icon={HeartPulse}>Pet First Aid Certified</TrustBadge>
            <TrustBadge icon={UserCheck}>Background Checked</TrustBadge>
            <TrustBadge icon={BadgeCheck}>ID Verified</TrustBadge>
            
          </div>
        </div>
        <Blob color="var(--cream-deep)" />
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-cream-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square max-w-md mx-auto rounded-full overflow-hidden ring-8 ring-cream shadow-xl">
                <img
                  src={camillaPhoto}
                  alt="Camilla Herod, owner of Wags and Joy Pet Care"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover scale-150 origin-bottom"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-4 left-4 bg-cream rounded-2xl shadow-lg p-3 w-40 rotate-[-4deg]">
                <img
                  src={camillaDog}
                  alt="Camilla with her dog outside"
                  width={400}
                  height={400}
                  loading="lazy"
                  className="rounded-xl aspect-square object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <span className="font-script text-3xl text-gold">About me</span>
              <h2 className="mt-1 text-4xl sm:text-5xl text-navy">
                Your Pet Is Part of Our Family
              </h2>
              <div className="mt-6 space-y-4 text-navy-soft leading-relaxed">
                <p>
                  Hi, I'm Camilla, the heart behind Wags and Joy Pet Care. I've
                  spent my life surrounded by animals, and turning that love
                  into a profession has been the most natural step in the world.
                  Every dog who walks with me gets patience, presence, and play.
                </p>
                <p>
                  I'm <strong className="text-navy">American Red Cross Cat
                  and Dog First Aid certified</strong>, fully insured, and
                  committed to treating your pup the way I treat my own, like
                  family. From energetic adventurers to gentle seniors, I tailor
                  every visit to who your dog actually is.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { num: "100%", label: "Insured" },
                  { num: "Red Cross", label: "Certified" },
                  { num: "ID", label: "Verified" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-cream p-4 text-center shadow-sm"
                  >
                    <div className="font-serif-display text-lg font-bold text-navy">
                      {s.num}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-navy-soft mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-script text-3xl text-gold">What we offer</span>
            <h2 className="mt-1 text-4xl sm:text-5xl text-navy">
              Walks &amp; Visits, Tailored to Your Pup
            </h2>
            <p className="mt-4 text-navy-soft">
              Choose the care that fits your dog's personality and your
              schedule. Every option includes love and attention as standard.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Solo Walks",
                desc: "One-on-one walks for dogs who do best with undivided attention and their own pace.",
                img: serviceSolo,
              },
              {
                title: "Household Pack Walks",
                desc: "Two or more pups from the same family, walked together for double the fun.",
                img: servicePack,
              },
              {
                title: "Drop-In Visits",
                desc: "Feeding, potty breaks, fresh water, and plenty of cuddles when you're away.",
                img: serviceDropin,
              },
            ].map((s) => (
              <article
                key={s.title}
                className="group rounded-3xl bg-card p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square rounded-full overflow-hidden ring-4 ring-cream-deep mx-auto max-w-[220px]">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="mt-6 text-2xl text-center text-navy">{s.title}</h3>
                <p className="mt-3 text-center text-navy-soft leading-relaxed">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RATES */}
      <section id="rates" className="bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-script text-3xl text-gold">Simple &amp; honest</span>
            <h2 className="mt-1 text-4xl sm:text-5xl text-navy">Services and Rates</h2>
            <p className="mt-4 text-navy-soft leading-relaxed">
              Straightforward pricing for the care your pup deserves. Every visit
              includes love, patience, and attention as standard.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "30 Minute Dog Walk",
                price: "$25",
                desc: "A fun and enriching walk in your neighborhood tailored to your dog's needs.",
              },
              {
                icon: PawPrint,
                title: "60 Minute Dog Walk",
                price: "$40",
                desc: "A fun and enriching walk in your neighborhood tailored to your dog's needs.",
              },
              {
                icon: Home,
                title: "30 Minute Drop-In Pet Visit",
                prices: [
                  { label: "Dogs", price: "$25" },
                  { label: "Cats", price: "$20" },
                ],
                desc: "Visit includes potty break, litter box scooping, fresh water, feeding, and lots of love and attention.",
              },
            ].map((s) => (
              <article
                key={s.title}
                className="flex flex-col rounded-3xl bg-cream p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gold/20 mb-5">
                  <s.icon className="h-7 w-7 text-navy" />
                </div>
                <h3 className="text-2xl text-navy font-serif-display">{s.title}</h3>
                <p className="mt-3 text-navy-soft leading-relaxed flex-1">
                  {s.desc}
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  {Array.isArray(s.prices) ? (
                    s.prices.map((tier) => (
                      <div key={tier.label} className="flex items-baseline gap-2">
                        <span className="text-sm font-medium text-navy-soft">{tier.label}:</span>
                        <span className="font-serif-display text-4xl font-bold text-navy">
                          {tier.price}
                        </span>
                        <span className="text-sm text-navy-soft">/ visit</span>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif-display text-4xl font-bold text-navy">
                        {s.price}
                      </span>
                      <span className="text-sm text-navy-soft">/ visit</span>
                    </div>
                  )}
                </div>
                <a
                  href={SERVICE_INQUIRY_HREF}
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
        </div>
      </section>

      {/* MEET & GREET */}
      <section id="meet" className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy text-cream px-8 py-12 sm:p-14 lg:p-16 shadow-xl">
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <span className="font-script text-3xl text-gold">It's on us</span>
                <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl text-cream">
                  Free Meet &amp; Greet for All New Clients
                </h2>
                <p className="mt-4 text-cream/80 max-w-xl leading-relaxed">
                  A relaxed chance to get to know you and your dog before the
                  first walk, so everyone feels comfortable from day one. Call
                  or email Camilla directly to schedule your Meet and Greet.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={MEET_GREET_HREF}
                    className="inline-flex items-center gap-2 rounded-full bg-cream/10 hover:bg-cream/20 px-4 py-2 text-sm font-semibold text-cream transition-colors"
                  >
                    <Mail className="h-4 w-4 text-gold" />
                    camilla@wagsandjoy.com
                  </a>
                  <a
                    href="tel:+17207389557"
                    className="inline-flex items-center gap-2 rounded-full bg-cream/10 hover:bg-cream/20 px-4 py-2 text-sm font-semibold text-cream transition-colors"
                  >
                    <Phone className="h-4 w-4 text-gold" />
                    (720) 738-9557
                  </a>
                </div>
              </div>
              <PillButton href={MEET_GREET_HREF} variant="gold" className="self-start lg:self-center">
                Email to Schedule
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="bg-cream-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-script text-3xl text-gold">Kind words</span>
            <h2 className="mt-1 text-4xl sm:text-5xl text-navy">
              Testimonials
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Cathy F.", quote: "Camilla is mature and loving with pets. She has many years of experience caring for dogs and cats. Your fur babies will receive affectionate and reliable care from Camilla." },
              { name: "Michael W.", quote: "Camilla Herod has a very kind heart when it comes to the care of dogs. I watched her raise her dog, Gaia, for years. There is no finer dog parent than Camilla." },
            ].map((t, i) => (
              <figure
                key={i}
                className="relative rounded-3xl bg-cream p-8 sm:p-10 shadow-sm text-center"
              >
                <Quote
                  className="absolute -top-5 left-1/2 -translate-x-1/2 h-10 w-10 text-gold bg-cream-deep rounded-full p-2"
                  aria-hidden
                />
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-navy leading-relaxed font-serif-display text-lg italic">
                  "{t.quote}"
                </p>
                <figcaption className="mt-6 text-sm font-bold text-navy">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section aria-label="Happy clients" className="bg-cream-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[dogGrass, dogTrailAsset.url, dogBallAsset.url, portrait].map((src, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-md">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section id="area" className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gold/20 mb-6">
            <MapPin className="h-8 w-8 text-navy" />
          </div>
          <h2 className="text-4xl sm:text-5xl text-navy">
            Serving Davison &amp; the Surrounding Area
          </h2>
          <p className="mt-4 text-navy-soft max-w-xl mx-auto">
            Based in Davison, Michigan, happily walking and visiting dogs
            throughout the local community. If you're just outside the area,
            reach out anyway, we'd love to see if we can still make it work for
            you and your pup.
          </p>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="bg-cream pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gold-soft p-10 sm:p-16 text-center shadow-xl">
            <PawPrint className="absolute top-6 left-6 h-10 w-10 text-navy/15 -rotate-12" aria-hidden />
            <PawPrint className="absolute bottom-6 right-8 h-12 w-12 text-navy/15 rotate-12" aria-hidden />
            <PawPrint className="absolute top-1/2 right-12 h-6 w-6 text-navy/10" aria-hidden />
            <span className="font-script text-3xl text-navy">Ready when you are</span>
            <h2 className="mt-1 text-4xl sm:text-5xl text-navy">
              Let's Plan Your Pup's Next Adventure
            </h2>
            <p className="mt-4 text-navy/80 max-w-xl mx-auto">
              Reach out to get started. Meet &amp; greet always on the house.
            </p>
            <div className="mt-8">
              <PillButton href={CONTACT_HREF} variant="primary" className="!px-10 !py-4 text-base">
                Book Now
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="bg-navy text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <img
                src={logoWordmarkAsset.url}
                alt="Wags and Joy Pet Care"
                width={1920}
                height={600}
                className="h-24 sm:h-28 w-auto object-contain"
              />
              <p className="mt-5 text-cream/70 leading-relaxed max-w-sm">
                Friendly, insured, first-aid certified dog walking and drop-in
                visits in Davison, Michigan.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-10 w-10 grid place-items-center rounded-full bg-cream/10 hover:bg-gold hover:text-navy transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-10 w-10 grid place-items-center rounded-full bg-cream/10 hover:bg-gold hover:text-navy transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-cream font-serif-display text-xl">Get in Touch</h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:camilla@wagsandjoy.com"
                    className="flex items-center gap-3 text-cream/80 hover:text-gold"
                  >
                    <Mail className="h-4 w-4 text-gold" />
                    camilla@wagsandjoy.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+17207389557"
                    className="flex items-center gap-3 text-cream/80 hover:text-gold"
                  >
                    <Phone className="h-4 w-4 text-gold" />
                    +1 (720) 738-9557
                  </a>
                </li>
                <li>
                  <a
                    href="https://wagsandjoy.com"
                    className="flex items-center gap-3 text-cream/80 hover:text-gold"
                  >
                    <Globe className="h-4 w-4 text-gold" />
                    wagsandjoy.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-cream/80">
                  <MapPin className="h-4 w-4 text-gold" />
                  Davison, Michigan
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-cream font-serif-display text-xl">
                Ready to Book?
              </h3>
              <p className="mt-3 text-cream/70 text-sm leading-relaxed">
                Reach out to schedule a free meet &amp; greet and let's see if
                we're the right fit for your dog.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <PillButton href="mailto:camilla@wagsandjoy.com" variant="gold">
                  Email Camilla
                </PillButton>
                <PillButton href="tel:+17207389557" variant="ghost" className="!border-cream !text-cream hover:!bg-cream hover:!text-navy">
                  Call
                </PillButton>
              </div>
              <div className="mt-5 rounded-2xl bg-cream/5 border border-cream/15 p-4">
                <p className="text-xs uppercase tracking-wider text-cream/60 font-bold">
                  Book an Appointment
                </p>
                <p className="mt-1 text-xs text-cream/60">
                  Online scheduling coming soon.
                </p>
                <PillButton
                  href="#contact"
                  variant="gold"
                  className="mt-3 !py-2.5 !px-5 opacity-70 cursor-not-allowed"
                >
                  Book an Appointment
                </PillButton>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/10 px-3 py-1 text-xs font-semibold text-cream">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                  Fully Insured
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/10 px-3 py-1 text-xs font-semibold text-cream">
                  <HeartPulse className="h-3.5 w-3.5 text-gold" />
                  Pet First Aid
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/10 px-3 py-1 text-xs font-semibold text-cream">
                  <UserCheck className="h-3.5 w-3.5 text-gold" />
                  Background Checked
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/10 px-3 py-1 text-xs font-semibold text-cream">
                  <BadgeCheck className="h-3.5 w-3.5 text-gold" />
                  ID Verified
                </span>
              </div>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-cream/15 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-cream/60">
            <p>© {new Date().getFullYear()} Wags and Joy Pet Care LLC. All rights reserved.</p>
            <p>Made with love for dogs in Davison, MI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
