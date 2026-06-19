import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ============ Animated Counter ============ */
export function Counter({ to, suffix = "", duration = 2000 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ============ Reveal wrapper ============ */
export function Reveal({
  children,
  delay = 0,
  y = 30,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============ Particle background ============ */
export function ParticleField({ count = 40 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((i) => {
        const size = Math.random() * 4 + 1;
        const left = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 15 + Math.random() * 20;
        return (
          <span
            key={i}
            className="particle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              bottom: `-${size * 2}px`,
              animation: `particle-drift ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

/* ============ Glow blobs background ============ */
export function GlowBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="glow-blob animate-float-slow absolute -top-40 -left-40 h-[480px] w-[480px] bg-blue-600/40" />
      <div className="glow-blob animate-float-slow absolute top-40 -right-40 h-[520px] w-[520px] bg-indigo-600/30" style={{ animationDelay: "4s" }} />
      <div className="glow-blob animate-float-slow absolute -bottom-60 left-1/3 h-[560px] w-[560px] bg-cyan-500/25" style={{ animationDelay: "8s" }} />
    </div>
  );
}

/* ============ Section heading ============ */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`${alignCls} max-w-3xl`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-blue-300 backdrop-blur ${align === "center" ? "" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}

/* ============ Button ============ */
export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  icon,
}: {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}) {
  const base = "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300";
  const styles = {
    primary: "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/60 hover:scale-[1.02]",
    ghost: "text-white hover:bg-white/10",
    outline: "border border-white/20 bg-white/5 backdrop-blur text-white hover:border-blue-400/60 hover:bg-blue-500/10",
  }[variant];

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon}
      </span>
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {content}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {content}
    </button>
  );
}

/* ============ Modal / Overlay ============ */
export function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-auto rounded-3xl glass-strong p-6 md:p-8 shadow-2xl shadow-blue-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ============ Marquee ============ */
export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-2xl md:text-3xl font-bold text-white/30 tracking-tight">{it}</span>
            <span className="text-blue-500">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
