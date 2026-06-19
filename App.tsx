import { useEffect, useMemo, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ArrowRight, Check, Calculator, Sparkles, MessageSquare, Phone, Mail,
  MapPin, Send, ChevronDown, ChevronRight, Sun, Moon, Globe, ShoppingBag, Smartphone,
  Gamepad2, Palette, FileText, Cpu, Zap, Coins, Award, TrendingUp, Headphones, ShieldCheck,
  Bot, AlertTriangle, ExternalLink, Clock, Tag, Users, CheckCircle2, Filter,
} from "lucide-react";
import {
  serviceCategories, portfolioCategories, portfolioItems, features, faqs,
  blogPosts, stats, clients,
} from "./data";
import {
  Counter, Reveal, ParticleField, GlowBlobs, SectionHeading, Modal, Marquee,
} from "./components";

const ORDER_EMAIL = "Solocoder836@gmail.com";
const ORDER_WHATSAPP = "27646130213";

const iconMap: Record<string, any> = {
  Globe, ShoppingBag, Smartphone, Gamepad2, Palette, FileText, Cpu,
  Zap, Coins, Award, TrendUp: TrendingUp, Headphones, ShieldCheck, Sparkles,
};

function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const Comp = iconMap[name];
  return Comp ? <Comp className={className} /> : null;
}

/* ===================== SCROLL TO SECTION UTILITY ===================== */
function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Helper to open the external order form - can be used across the site
// function openOrderForm(serviceName?: string) {
//   let url = EXTERNAL_FORM_URL;
//   if (serviceName) {
//     const params = new URLSearchParams({ entry: serviceName });
//     url += "?" + params.toString();
//   }
//   window.open(url, "_blank");
// }

/* ===================== NAVBAR ===================== */
function Navbar({ onOpenCalc }: { onOpenCalc: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#compare", label: "Compare" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "Why Us" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Order" },
  ];

  const handleNav = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    scrollTo(id);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${scrolled ? "glass-strong shadow-2xl shadow-blue-900/20" : "bg-transparent"}`}>
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/40 group-hover:shadow-blue-500/70 transition-all">
              <span className="text-white font-black text-lg tracking-tight">K</span>
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm md:text-base tracking-tight">KANDK</div>
              <div className="text-[10px] md:text-[11px] text-blue-300 font-medium tracking-widest uppercase">Tech Solutions</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button key={l.href} onClick={() => handleNav(l.href)} className="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-colors">
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={onOpenCalc} className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors">
              <Calculator className="h-4 w-4" />
              <span className="hidden xl:inline">Calculator</span>
            </button>
            <button onClick={() => scrollTo("contact")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/60 hover:scale-105 transition-all">
              Get Quote <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-white" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="lg:hidden mt-2 rounded-2xl glass-strong p-4 space-y-1">
              {links.map((l) => (
                <button key={l.href} onClick={() => handleNav(l.href)} className="block w-full text-left px-4 py-3 text-sm text-slate-200 hover:bg-white/5 rounded-xl">
                  {l.label}
                </button>
              ))}
              <button onClick={() => { onOpenCalc(); setOpen(false); }} className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500/10 border border-blue-400/30 px-4 py-3 text-sm text-blue-300">
                <Calculator className="h-4 w-4" /> Pricing Calculator
              </button>
              <button onClick={() => { scrollTo("contact"); setOpen(false); }} className="block w-full text-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-3 text-sm font-semibold text-white">
                Get Quote →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

/* ===================== HERO ===================== */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 hero-grid" />
      <GlowBlobs />
      <ParticleField count={50} />

      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <motion.div className="absolute top-32 right-[8%] glass-strong rounded-2xl p-4 w-60 shadow-2xl" animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity }}>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center"><Check className="h-5 w-5 text-white" /></div>
            <div><div className="text-xs text-slate-400">Project delivered</div><div className="text-sm font-semibold text-white">E-Commerce Store</div></div>
          </div>
          <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden"><div className="h-full w-full bg-gradient-to-r from-emerald-400 to-teal-500" /></div>
        </motion.div>
        <motion.div className="absolute bottom-32 left-[6%] glass-strong rounded-2xl p-4 w-64 shadow-2xl" animate={{ y: [0, 12, 0] }} transition={{ duration: 7, repeat: Infinity }}>
          <div className="text-xs text-blue-300 font-semibold tracking-wider uppercase">Live Stats</div>
          <div className="mt-2 flex items-end justify-between">
            <div className="text-3xl font-bold text-white">+128%</div>
            <div className="flex items-end gap-1 h-10">{ [20, 35, 28, 50, 42, 65, 58, 80].map((h, i) => <div key={i} className="w-1.5 rounded-t bg-gradient-to-t from-blue-600 to-cyan-400" style={{ height: `${h}%` }} />)}</div>
          </div>
          <div className="text-xs text-slate-400 mt-1">Client site traffic ↑</div>
        </motion.div>
        <motion.div className="absolute top-1/2 right-[3%] glass-strong rounded-2xl px-4 py-3 shadow-2xl" animate={{ rotate: [-2, 2, -2], y: [0, -6, 0] }} transition={{ duration: 8, repeat: Infinity }}>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">{[0,1,2].map(i => <div key={i} className="h-6 w-6 rounded-full border-2 border-black bg-gradient-to-br from-blue-400 to-indigo-500" />)}</div>
            <div className="text-xs text-white">⭐ 4.9/5 · 120+ reviews</div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 w-full">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-blue-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Launch Special — Premium Quality, Startup Prices
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-6 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02]">
            <span className="text-white">Professional</span><br /><span className="text-gradient">Digital Services</span><br /><span className="text-white">at Startup </span>
            <span className="relative inline-block">
              <span className="text-gradient-blue">Prices</span>
              <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 0.8, ease: "easeOut" }} className="absolute left-0 -bottom-2 h-1.5 w-full rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 origin-left" />
            </span><span className="text-blue-400">.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-8 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">
            Get high-quality <strong className="text-white">websites, mobile apps, graphic designs, business plans, e-commerce stores, gaming platforms</strong>, and <strong className="text-white">custom software solutions</strong> — without breaking the bank.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }} className="mt-10 flex flex-wrap items-center gap-4">
            <button onClick={() => scrollTo("contact")} className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/70 hover:scale-105 transition-all">
              Get Quote <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity" />
            </button>
            <button onClick={() => scrollTo("portfolio")} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur hover:border-blue-400/50 hover:bg-blue-500/10 transition-all">
              View Portfolio <ExternalLink className="h-4 w-4" />
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
            {["✓ No hidden fees", "✓ Fast delivery", "✓ 100% responsive", "✓ Free consultation"].map((t) => (
              <div key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" />{t}</div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-slate-500">
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="h-8 w-5 rounded-full border border-white/20 flex justify-center pt-1">
          <span className="h-1.5 w-1 rounded-full bg-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ===================== STATS ===================== */
function StatsStrip() {
  return (
    <section className="relative py-16 border-y border-white/5 bg-black/40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-black text-gradient-blue"><Counter to={s.value} suffix={s.suffix} /></div>
              <div className="mt-2 text-sm text-slate-400 tracking-wide">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <div className="text-center text-xs tracking-[0.3em] uppercase text-slate-500 mb-6">Trusted by growing businesses across South Africa</div>
        <Marquee items={clients} />
      </div>
    </section>
  );
}

/* ===================== SERVICES ===================== */
function Services() {
  const [active, setActive] = useState(serviceCategories[0].id);
  const current = serviceCategories.find((s) => s.id === active)!;

  return (
    <section id="services" className="relative py-24 md:py-32">
      <GlowBlobs />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Our Services" title={<>Everything your business <span className="text-gradient-blue">needs to thrive</span></>} description="From simple logos to enterprise software — explore our full range of digital services, all at unbeatable South African startup prices." />
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {serviceCategories.map((s) => (
              <button key={s.id} onClick={() => setActive(s.id)} className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${active === s.id ? "border-blue-400 bg-blue-500/20 text-white shadow-lg shadow-blue-500/20" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"}`}>
                <Icon name={s.icon} className="h-4 w-4" />{s.title}
              </button>
            ))}
          </div>
        </Reveal>
        <AnimatePresence mode="wait">
          <motion.div key={current.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {current.items.map((item, i) => (
              <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} className={`card-glow relative rounded-3xl p-6 md:p-7 ${item.popular ? "bg-gradient-to-br from-blue-900/60 via-blue-950/40 to-indigo-950/60 border border-blue-400/40" : "glass-strong"}`}>
                {item.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white shadow-lg"><Sparkles className="h-3 w-3" /> Popular</div>}
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${current.gradient} shadow-lg`}><Icon name={current.icon} className="h-5 w-5 text-white" /></div>
                <h3 className="mt-5 text-lg font-bold text-white">{item.name}</h3>
                <div className="mt-3 flex items-baseline gap-1"><span className="text-4xl font-black text-gradient-blue">{item.price}</span></div>
                <ul className="mt-6 space-y-3">{item.features.map((f) => (<li key={f} className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-none text-blue-400" /><span>{f}</span></li>))}</ul>
                {/* Description of how it works */}
                <div className="mt-5 pt-5 border-t border-white/10 space-y-2">
                  <div className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 flex-none mt-1.5" />
                    <span>Choose this package and you'll receive a full consultation within 24 hours</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 flex-none mt-1.5" />
                    <span>We'll design, build and test your project with your input at every stage</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 flex-none mt-1.5" />
                    <span>Final delivery within the agreed timeframe with free revisions</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <Reveal><div className="mt-10 text-center text-sm text-slate-400">Prices are intentionally below average South African agency rates — we're focused on building our portfolio and client base.</div></Reveal>
      </div>
    </section>
  );
}

/* ===================== WHY LOW PRICES ===================== */
function WhyLow() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-8 md:p-14">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="grid lg:grid-cols-2 gap-10 items-center relative">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-amber-300"><Zap className="h-3.5 w-3.5" /> New Business Launch Special</div>
                <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-white">Why our prices are so <span className="text-gradient-blue">ridiculously low</span></h2>
                <p className="mt-5 text-slate-300 text-lg leading-relaxed">We are a growing technology company focused on <strong className="text-white">building our portfolio</strong>, gaining client trust and establishing our reputation in South Africa's tech industry.</p>
                <p className="mt-4 text-slate-400 leading-relaxed">To celebrate our launch, we are offering premium-quality services at heavily discounted startup prices. You get senior-level work at junior-level rates — the best deal in the market right now.</p>
                <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4">
                  <AlertTriangle className="h-5 w-5 text-amber-400 flex-none mt-0.5" />
                  <p className="text-sm text-amber-200/90"><strong className="text-amber-300">Heads up:</strong> Prices may increase without notice as our business grows and portfolio expands. Lock in these rates today.</p>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: TrendingUp, label: "Build Portfolio", value: "50-70%", sub: "below market rates" },
                    { icon: Users, label: "Happy Clients", value: "120+", sub: "and counting" },
                    { icon: ShieldCheck, label: "Quality Promise", value: "100%", sub: "guaranteed" },
                    { icon: Zap, label: "Fast Turnaround", value: "3-14", sub: "days delivery" },
                  ].map((it, i) => (
                    <motion.div key={it.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }} className="glass rounded-2xl p-5 border border-white/10">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-500/30 border border-blue-400/30"><it.icon className="h-5 w-5 text-blue-300" /></div>
                      <div className="mt-3 text-3xl font-black text-white">{it.value}</div>
                      <div className="text-xs font-semibold text-blue-300 tracking-wide uppercase mt-1">{it.label}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{it.sub}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== FEATURES ===================== */
function Features() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Why Choose Us" title={<>The <span className="text-gradient-blue">KANDK</span> advantage</>} description="More than just affordable — we deliver real, professional value to every project." />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="card-glow h-full rounded-2xl glass-strong p-6 group cursor-default">
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/30 group-hover:border-blue-400 group-hover:scale-110 transition-all">
                  <Icon name={f.icon} className="h-5 w-5 text-blue-300" />
                  <div className="absolute inset-0 rounded-2xl bg-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== PORTFOLIO ===================== */
function Portfolio() {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(() => (filter === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === filter)), [filter]);

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <GlowBlobs />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Our Work" title={<>Featured <span className="text-gradient-blue">Projects</span></>} description="A glimpse at the websites, apps, games and systems we've delivered for real clients." />
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {portfolioCategories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs md:text-sm font-medium transition-all ${filter === cat ? "border-blue-400 bg-blue-500/20 text-white" : "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"}`}>
              <Filter className="h-3 w-3" />{cat}
            </button>
          ))}
        </div>
        <motion.div layout className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.div layout key={p.title} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} whileHover={{ y: -6 }} className="card-glow group relative overflow-hidden rounded-3xl glass-strong">
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.color} overflow-hidden`}>
                  <div className="absolute inset-0 opacity-40"><div className="absolute inset-0 hero-grid" /></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <div className="h-24 w-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        <div className="h-16 w-16 rounded-xl bg-white/20 flex items-center justify-center"><Sparkles className="h-8 w-8 text-white" /></div>
                      </div>
                      <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-white/40 animate-pulse" />
                      <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-white/30 animate-float-fast" />
                    </motion.div>
                  </div>
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-white">{p.category}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div><h3 className="text-lg font-bold text-white">{p.title}</h3><p className="text-xs text-slate-400 mt-1">{p.client}</p></div>
                    <div className="flex -space-x-1">{p.tags.map((t) => (<span key={t} className="rounded-full bg-blue-500/10 border border-blue-400/20 px-2 py-0.5 text-[10px] font-semibold text-blue-300">{t}</span>))}</div>
                  </div>
                  <button onClick={() => { scrollTo("contact"); setTimeout(() => { const textareas = document.querySelectorAll<HTMLTextAreaElement>("textarea"); if (textareas[0]) { textareas[0].value = `Hi KANDK, I'm interested in a project similar to "${p.title}" (${p.category}) for ${p.client}. Please send me a quote.`; } }, 600); }} className="mt-5 inline-flex items-center gap-1 text-sm text-blue-300 hover:text-white transition-colors">
                    Request similar project <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ===================== TESTIMONIALS SECTION REMOVED ===================== */

/* ===================== PRICING CALCULATOR MODAL ===================== */
function PricingCalculator({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [catId, setCatId] = useState(serviceCategories[0].id);
  const [tier, setTier] = useState(0);
  const [extras, setExtras] = useState<Record<string, boolean>>({});
  const cat = serviceCategories.find((c) => c.id === catId)!;
  const item = cat.items[tier];
  const extraList = [
    { id: "hosting", label: "Hosting & Domain (1 year)", price: 500 },
    { id: "seo", label: "Advanced SEO Setup", price: 800 },
    { id: "logo", label: "Logo Design", price: 50 },
    { id: "content", label: "Copywriting", price: 1200 },
    { id: "maintenance", label: "Maintenance (6 months)", price: 1500 },
  ];
  const total = item.priceNum + extraList.filter((e) => extras[e.id]).reduce((s, e) => s + e.price, 0);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-blue-300"><Calculator className="h-3 w-3" /> Pricing Calculator</div>
          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">Estimate your project</h3>
          <p className="text-sm text-slate-400 mt-1">Pick a service, tier and add-ons for an instant quote.</p>
        </div>
        <button onClick={onClose} className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10"><X className="h-4 w-4 mx-auto" /></button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-xs font-semibold tracking-widest uppercase text-slate-400">Service Category</label>
          <select value={catId} onChange={(e) => { setCatId(e.target.value); setTier(0); }} className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-400">
            {serviceCategories.map((s) => (<option key={s.id} value={s.id} className="bg-black">{s.title}</option>))}
          </select>
          <label className="mt-5 block text-xs font-semibold tracking-widest uppercase text-slate-400">Package</label>
          <div className="mt-2 space-y-2">
            {cat.items.map((it, i) => (
              <button key={it.name} onClick={() => setTier(i)} className={`w-full flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all ${tier === i ? "border-blue-400 bg-blue-500/10 text-white" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"}`}>
                <span className="font-semibold">{it.name}</span>
                <span className="font-bold text-blue-300">{it.price}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold tracking-widest uppercase text-slate-400">Optional Add-Ons</label>
          <div className="mt-2 space-y-2">
            {extraList.map((e) => (
              <label key={e.id} className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm cursor-pointer transition-all ${extras[e.id] ? "border-blue-400 bg-blue-500/10 text-white" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"}`}>
                <span className="flex items-center gap-3"><input type="checkbox" checked={!!extras[e.id]} onChange={(ev) => setExtras({ ...extras, [e.id]: ev.target.checked })} className="h-4 w-4 accent-blue-500" />{e.label}</span>
                <span className="font-bold text-blue-300">R{e.price.toLocaleString()}</span>
              </label>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-900/60 to-indigo-900/60 p-5">
            <div className="text-xs tracking-widest uppercase text-blue-300 font-semibold">Estimated Total</div>
            <div className="mt-1 text-4xl font-black text-gradient-blue">R{total.toLocaleString()}</div>
            <div className="mt-1 text-xs text-slate-400">Final quote may vary based on specific requirements.</div>
            <button onClick={() => { onClose(); scrollTo("contact"); }} className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-lg w-full">
              Request this quote <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

/* ===================== BLOG ===================== */
function Blog() {
  return (
    <section id="blog" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-blue-300"><FileText className="h-3.5 w-3.5" /> Insights</div>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl">Tips, guides & stories from the <span className="text-gradient-blue">KANDK blog</span></h2>
          </div>
          <a href="https://www.google.com/search?q=best+web+design+tips+2026+small+business" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white">Browse more free guides <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="card-glow group block rounded-3xl glass-strong overflow-hidden">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.color} overflow-hidden`}>
                    <div className="absolute inset-0 hero-grid opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center"><FileText className="h-16 w-16 text-white/70" /></div>
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-white"><Tag className="h-3 w-3" /> {p.category}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400"><Clock className="h-3 w-3" /> {p.readTime}<span>•</span><span>{p.date}</span></div>
                    <h3 className="mt-3 text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-400 line-clamp-2">{p.excerpt}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-300">Read more <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" /></div>
                  </div>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== FAQ ===================== */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading eyebrow="FAQ" title={<>Got questions? <span className="text-gradient-blue">We've got answers.</span></>} description="Everything you need to know before starting your project with KANDK." />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="rounded-2xl glass-strong overflow-hidden border border-white/10 hover:border-blue-400/30 transition-colors">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex items-center justify-between gap-4 w-full p-5 md:p-6 text-left">
                  <span className="font-semibold text-white text-sm md:text-base">{f.q}</span>
                  <span className={`flex-none h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-transform ${open === i ? "rotate-180" : ""}`}><ChevronDown className="h-4 w-4 text-blue-300" /></span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-slate-300 leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== NEWSLETTER ===================== */
function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    // Simple mailto for newsletter subscription
    const subject = encodeURIComponent("Newsletter Subscription");
    const body = encodeURIComponent(`Please subscribe me to your newsletter.%0A%0AEmail: ${email}`);
    window.open(`mailto:Solocoder836@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 md:p-12 text-center">
            <div className="absolute inset-0 hero-grid opacity-30" />
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-cyan-400/40 blur-3xl animate-float-slow" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-400/40 blur-3xl animate-float-slow" style={{ animationDelay: "4s" }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-white backdrop-blur"><Mail className="h-3.5 w-3.5" /> Newsletter</div>
              <h3 className="mt-4 text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">Get tech tips & launch offers straight to your inbox</h3>
              <p className="mt-3 text-blue-100 max-w-xl mx-auto">Join 1,200+ subscribers. No spam, unsubscribe anytime.</p>
              <form onSubmit={handleSubscribe} className="mt-7 mx-auto flex flex-col sm:flex-row gap-3 max-w-md">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@company.co.za" className="flex-1 rounded-full bg-white/10 border border-white/20 backdrop-blur px-5 py-3 text-white placeholder-white/60 outline-none focus:border-white/60" />
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-blue-700 font-bold px-6 py-3 hover:scale-105 transition-transform">
                  {subscribed ? <><Check className="h-4 w-4" /> Subscribed!</> : <>Subscribe <Send className="h-4 w-4" /></>}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== ORDER FORM (WhatsApp orders) ===================== */
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceCategories[0].title,
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.email.trim()) next.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address";
    if (!form.phone.trim()) next.phone = "Please enter your phone number";
    if (!form.message.trim()) next.message = "Please describe what you need";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const sendByWhatsApp = () => {
    if (!validate()) return;
    const timestamp = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" });
    const text = encodeURIComponent(
      `New Order Request\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nBudget: ${form.budget || "Not specified"}\n\nProject Details:\n${form.message}\n\nSent: ${timestamp}`
    );
    window.open(`https://wa.me/${ORDER_WHATSAPP}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <GlowBlobs />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Place Your Order"
          title={<>Send your project request through <span className="text-gradient-blue">WhatsApp</span></>}
          description="Fill in the short form below, then send your order directly to us on WhatsApp."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <Reveal>
              <div className="card-glow rounded-3xl glass-strong p-7">
                <h3 className="text-xl font-bold text-white">Contact information</h3>
                <p className="mt-2 text-sm text-slate-400">You can also reach us directly using the details below.</p>
                <div className="mt-6 space-y-4">
                  <a href="tel:0673493612" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg"><Phone className="h-5 w-5 text-white" /></div>
                    <div><div className="text-xs text-slate-400">Phone</div><div className="font-semibold text-white">067 349 3612</div></div>
                  </a>
                  <a href={`https://wa.me/${ORDER_WHATSAPP}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg"><ExternalLink className="h-5 w-5 text-white" /></div>
                    <div><div className="text-xs text-slate-400">WhatsApp</div><div className="font-semibold text-white">+27 64 613 0213</div></div>
                  </a>
                  <a href={`mailto:${ORDER_EMAIL}`} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg"><Mail className="h-5 w-5 text-white" /></div>
                    <div><div className="text-xs text-slate-400">Email</div><div className="font-semibold text-white break-all">{ORDER_EMAIL}</div></div>
                  </a>
                  <div className="flex items-center gap-4 p-3 rounded-xl">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg"><MapPin className="h-5 w-5 text-white" /></div>
                    <div><div className="text-xs text-slate-400">Location</div><div className="font-semibold text-white">South Africa · Remote-first</div></div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <div className="card-glow rounded-[2rem] glass-strong p-6 md:p-8 lg:p-10">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-slate-400">Full name <span className="text-blue-400">*</span></label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="John Doe"
                      className={`mt-2 w-full rounded-xl bg-white/[0.04] border ${errors.name ? "border-red-400" : "border-white/10"} px-4 py-3 text-white placeholder-white/35 outline-none focus:border-blue-400 focus:bg-white/[0.06] transition-all`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-slate-400">Email <span className="text-blue-400">*</span></label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@company.co.za"
                      className={`mt-2 w-full rounded-xl bg-white/[0.04] border ${errors.email ? "border-red-400" : "border-white/10"} px-4 py-3 text-white placeholder-white/35 outline-none focus:border-blue-400 focus:bg-white/[0.06] transition-all`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-slate-400">Phone number <span className="text-blue-400">*</span></label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="067 000 0000"
                      className={`mt-2 w-full rounded-xl bg-white/[0.04] border ${errors.phone ? "border-red-400" : "border-white/10"} px-4 py-3 text-white placeholder-white/35 outline-none focus:border-blue-400 focus:bg-white/[0.06] transition-all`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-slate-400">Service needed</label>
                    <select
                      value={form.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white outline-none focus:border-blue-400 focus:bg-white/[0.06] transition-all"
                    >
                      {serviceCategories.map((c) => (
                        <option key={c.id} value={c.title} className="bg-black text-white">{c.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-xs font-semibold tracking-widest uppercase text-slate-400">Budget</label>
                  <input
                    type="text"
                    value={form.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    placeholder="e.g. R5,000 - R10,000"
                    className="mt-2 w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/35 outline-none focus:border-blue-400 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                <div className="mt-5">
                  <label className="block text-xs font-semibold tracking-widest uppercase text-slate-400">Project details <span className="text-blue-400">*</span></label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={6}
                    placeholder="Tell us what you need, the features you want, and any deadlines..."
                    className={`mt-2 w-full rounded-xl bg-white/[0.04] border ${errors.message ? "border-red-400" : "border-white/10"} px-4 py-3 text-white placeholder-white/35 outline-none focus:border-blue-400 focus:bg-white/[0.06] transition-all resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={sendByWhatsApp}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-green-400/30 bg-green-500/10 px-6 py-4 font-semibold text-green-300 hover:bg-green-500/20 hover:scale-[1.01] transition-all"
                  >
                    Send Order on WhatsApp <ExternalLink className="h-4 w-4" />
                  </button>
                </div>

                {sent && (
                  <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                    Your order is ready to send through WhatsApp. If nothing opened, please allow pop-ups and try again.
                  </div>
                )}

                <p className="mt-4 text-xs text-slate-500 text-center">
                  This form prepares your order and sends it directly to our WhatsApp with all your details included.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== FOOTER ===================== */
function Footer({ onOpenCalc }: { onOpenCalc: () => void }) {
  return (
    <footer className="relative border-t border-white/5 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/40"><span className="text-white font-black text-lg">K</span></div>
              <div><div className="text-white font-bold">KANDK Tech Solutions & Trading</div><div className="text-xs text-blue-300 font-medium tracking-widest uppercase">Premium · Affordable</div></div>
            </button>
            <p className="mt-4 text-sm text-slate-400 max-w-sm">We build affordable professional digital solutions for startups, small businesses, entrepreneurs, content creators and growing companies across South Africa.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <button onClick={onOpenCalc} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10"><Calculator className="h-3.5 w-3.5" /> Pricing Calculator</button>
              <button onClick={() => scrollTo("contact")} className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300 hover:bg-blue-500/20">Get Quote <ArrowRight className="h-3.5 w-3.5" /></button>
            </div>
          </div>
          <FooterCol title="Services" links={[
            { label: "Website Design", onClick: () => scrollTo("services") },
            { label: "E-Commerce", onClick: () => scrollTo("services") },
            { label: "Mobile Apps", onClick: () => scrollTo("services") },
            { label: "Game Development", onClick: () => scrollTo("services") },
            { label: "Graphic Design", onClick: () => scrollTo("services") },
            { label: "Business Plans", onClick: () => scrollTo("services") },
            { label: "Custom Software", onClick: () => scrollTo("services") },
          ]} />
          <FooterCol title="Company" links={[
            { label: "About", onClick: () => scrollTo("about") },
            { label: "Compare Packages", onClick: () => scrollTo("compare") },
            { label: "Portfolio", onClick: () => scrollTo("portfolio") },
            { label: "Blog", onClick: () => scrollTo("blog") },
            { label: "FAQ", onClick: () => scrollTo("faq") },
            { label: "Order", onClick: () => scrollTo("contact") },
          ]} />
          <FooterCol title="Contact" links={[
            { label: "Order Form", onClick: () => scrollTo("contact") },
            { label: "Email Us", href: `mailto:${ORDER_EMAIL}` },
            { label: "WhatsApp Us", href: `https://wa.me/${ORDER_WHATSAPP}?text=Hi%20KANDK%2C%20I%27d%20like%20to%20place%20an%20order.`, external: true },
          ]} />
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">© {new Date().getFullYear()} KANDK Tech Solutions & Trading. All rights reserved.</div>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <button onClick={() => scrollTo("contact")} className="hover:text-white">Privacy</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-white">Terms</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-white">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href?: string; external?: boolean; onClick?: () => void }[] }) {
  return (
    <div>
      <div className="text-xs font-semibold tracking-widest uppercase text-blue-300">{title}</div>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            {l.onClick ? (
              <button onClick={l.onClick} className="text-sm text-slate-400 hover:text-white transition-colors">{l.label}</button>
            ) : (
              <a href={l.href} target={l.external ? "_blank" : undefined} rel={l.external ? "noreferrer noopener" : undefined} className="text-sm text-slate-400 hover:text-white transition-colors">{l.label}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ===================== FLOATING WIDGETS ===================== */
function WhatsAppFloat() {
  return (
    <a href="https://wa.me/27646130213?text=Hi%20KANDK%2C%20I%27d%20like%20a%20quote%20for%20a%20project." target="_blank" rel="noreferrer" className="fixed bottom-6 left-6 z-40 group flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-white font-semibold shadow-2xl shadow-green-500/40 hover:scale-105 transition-all">
      <span className="relative flex">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.45 3.43 1.31 4.92L2 22l5.36-1.4a9.88 9.88 0 0 0 4.68 1.19h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02A9.85 9.85 0 0 0 12.04 2m0 1.67c2.2 0 4.26.86 5.82 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23-.95 0-1.88-.16-2.77-.48l-.65-.24-3.68.96.98-3.59-.26-.62a8.2 8.2 0 0 1-1.25-4.36c.01-4.54 3.7-8.24 8.24-8.24m-2.7 3.49c-.17 0-.44.06-.67.32-.23.26-.88.86-.88 2.1 0 1.24.9 2.44 1.02 2.61.13.17 1.77 2.7 4.29 3.79 2.1.89 2.53.71 2.98.67.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.3-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.65.81-.79.98-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.44.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42l-.48-.01Z" />
        </svg>
        <span className="pulse-ring" />
      </span>
      <span className="hidden md:inline">Chat on WhatsApp</span>
    </a>
  );
}

function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([{ role: "bot", text: "Hi! I'm KANDK AI assistant 👋 Ask me about pricing, services or delivery times." }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const respond = (q: string) => {
    const lower = q.toLowerCase();
    if (/price|cost|cheap|afford/.test(lower)) return "Our services start from just R50 (logo) up to R80,000+ for AI platforms. Use the pricing calculator for a quick estimate!";
    if (/how long|time|delivery|days/.test(lower)) return "Starter projects take 3-5 days, business websites 7-14 days, and custom software 4-12 weeks.";
    if (/game/.test(lower)) return "We build 2D games from R5,000 and advanced PC games from R75,000+. What type are you thinking?";
    if (/website|site/.test(lower)) return "Websites start at R500 for a starter site and go up to R6,500+ for corporate builds.";
    if (/app|mobile/.test(lower)) return "Mobile apps range from R5,000 (business) to R25,000+ (enterprise).";
    if (/contact|phone|email/.test(lower)) return "Call 067 349 3612 or email Solocoder836@gmail.com. WhatsApp also available!";
    if (/host/.test(lower)) return "Yes, we offer hosting & domain registration at competitive rates.";
    if (/revis/.test(lower)) return "Every project includes revisions — we work until you're 100% happy.";
    return "Great question! For a detailed answer, reach out to our team via WhatsApp or the contact form — we reply within a few hours.";
  };

  const send = () => {
    if (!input.trim()) return;
    const q = input.trim();
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTimeout(() => { setMessages((m) => [...m, { role: "bot", text: respond(q) }]); setTyping(false); }, 900);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="mb-4 w-[340px] max-w-[90vw] rounded-3xl glass-strong overflow-hidden shadow-2xl shadow-blue-500/20 flex flex-col" style={{ height: "500px", maxHeight: "70vh" }}>
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 p-4">
              <div className="relative h-10 w-10 rounded-full bg-white/20 flex items-center justify-center"><Bot className="h-5 w-5 text-white" /><span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 border-2 border-blue-600" /></div>
              <div><div className="font-bold text-white text-sm">KANDK AI Assistant</div><div className="text-xs text-blue-100">Online · replies in seconds</div></div>
              <button onClick={() => setOpen(false)} className="ml-auto h-8 w-8 rounded-full hover:bg-white/10 text-white flex items-center justify-center"><X className="h-4 w-4" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-black/20">
              {messages.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${m.role === "user" ? "bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-br-sm" : "bg-white/10 text-slate-100 rounded-bl-sm border border-white/10"}`}>{m.text}</div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 flex gap-1.5">
                    <span className="typing-dot h-2 w-2 rounded-full bg-blue-300" />
                    <span className="typing-dot h-2 w-2 rounded-full bg-blue-300" />
                    <span className="typing-dot h-2 w-2 rounded-full bg-blue-300" />
                  </div>
                </div>
              )}
            </div>
            <div className="p-3 border-t border-white/10">
              <div className="flex gap-2">
                <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Ask about pricing, services..." className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-blue-400" />
                <button onClick={send} className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center hover:scale-105 transition-transform"><Send className="h-4 w-4" /></button>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {["Pricing", "Delivery time", "Websites", "Apps"].map((s) => (<button key={s} onClick={() => setInput(s)} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] text-slate-300 hover:bg-white/10">{s}</button>))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setOpen(!open)} className="group relative h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 text-white shadow-2xl shadow-blue-500/40 hover:scale-110 transition-all flex items-center justify-center" aria-label="Chat">
        <AnimatePresence mode="wait">
          {open ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X className="h-5 w-5" /></motion.span> : <motion.span key="msg" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><MessageSquare className="h-5 w-5" /></motion.span>}
        </AnimatePresence>
        {!open && <><span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-400 border-2 border-black animate-pulse" /><span className="pulse-ring" /></>}
      </button>
    </div>
  );
}

/* ===================== SERVICE COMPARISON ===================== */
function ServiceComparison() {
  const [catId, setCatId] = useState("websites");
  const cat = serviceCategories.find((c) => c.id === catId)!;
  const tiers = cat.items.slice(0, 4);
  const allFeatures = useMemo(() => {
    const s = new Set<string>();
    tiers.forEach((t) => t.features.forEach((f) => s.add(f)));
    return Array.from(s);
  }, [tiers]);

  return (
    <section id="compare" className="relative py-24 md:py-32">
      <GlowBlobs />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Compare Services" title={<>Find the <span className="text-gradient-blue">perfect package</span></>} description="Compare features side-by-side to pick the package that fits your budget and needs." />
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {serviceCategories.map((s) => (
              <button key={s.id} onClick={() => setCatId(s.id)} className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${catId === s.id ? "border-blue-400 bg-blue-500/20 text-white shadow-lg shadow-blue-500/20" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"}`}>
                <Icon name={s.icon} className="h-4 w-4" />{s.title}
              </button>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 overflow-x-auto rounded-3xl glass-strong">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-5 text-left text-xs font-semibold tracking-widest uppercase text-slate-400 w-1/3">Feature</th>
                  {tiers.map((t) => (<th key={t.name} className={`p-5 text-center ${t.popular ? "bg-blue-500/10" : ""}`}><div className="text-xs font-semibold tracking-wider uppercase text-blue-300">{t.name.replace(/R[\d,]+\+?/g, "").trim() || t.name.split(" ")[0]}</div><div className="mt-2 text-2xl font-black text-white">{t.price}</div></th>))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feat, i) => (
                  <tr key={feat} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                    <td className="p-4 text-sm text-slate-300">{feat}</td>
                    {tiers.map((t) => {
                      const has = t.features.includes(feat);
                      return (<td key={t.name} className={`p-4 text-center ${t.popular ? "bg-blue-500/[0.04]" : ""}`}>{has ? <Check className="h-5 w-5 text-emerald-400 mx-auto" /> : <span className="text-slate-600">—</span>}</td>);
                    })}
                  </tr>
                ))}
                <tr>
                  <td className="p-5" />
                  {tiers.map((t) => (
                    <td key={t.name} className={`p-5 text-center ${t.popular ? "bg-blue-500/10" : ""}`}>
                      <button onClick={() => scrollTo("contact")} className={`inline-flex items-center justify-center gap-1 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${t.popular ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg" : "border border-white/10 bg-white/5 text-white hover:bg-white/10"}`}>
                        Choose <ArrowRight className="h-3 w-3" />
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ===================== SCROLL TO TOP ===================== */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 h-11 w-11 rounded-full glass-strong border border-white/10 text-white hover:bg-blue-500/20 hover:border-blue-400 transition-all" aria-label="Scroll to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mx-auto"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ===================== THEME TOGGLE ===================== */
function ThemeToggle({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  return (
    <button onClick={() => setDark(!dark)} className="fixed top-24 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full glass-strong border border-white/10 text-white hover:scale-110 transition-transform" aria-label="Toggle theme">
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

/* ===================== MAIN APP ===================== */
export default function App() {
  const [dark, setDark] = useState(true);
  const [calcOpen, setCalcOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", !dark);
  }, [dark]);

  return (
    <div className={dark ? "bg-[#03060f] text-white" : "bg-[#f5f8ff] text-slate-900"}>
      <Navbar onOpenCalc={() => setCalcOpen(true)} />
      <ThemeToggle dark={dark} setDark={setDark} />
      <Hero />
      <StatsStrip />
      <Services />
      <WhyLow />
      <Features />
      <ServiceComparison />
      <Portfolio />
      <Blog />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer onOpenCalc={() => setCalcOpen(true)} />

      <WhatsAppFloat />
      <AIChatWidget />
      <ScrollToTop />

      <PricingCalculator open={calcOpen} onClose={() => setCalcOpen(false)} />
    </div>
  );
}
