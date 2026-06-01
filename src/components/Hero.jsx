import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Button from "./ui/Button.jsx";
import Pill from "./ui/Pill.jsx";
import NeuroPatternCanvas from "./NeuroPatternCanvas.jsx";
import HeroMockGraphs from "./HeroMockGraphs.jsx";
import { SectionParallaxLayers } from "./ui/ParallaxSection.jsx";
import { useIsMobile } from "../hooks/useMediaQuery.js";
import { useSectionParallax } from "../hooks/useSectionParallax.js";
import { staggerContainer, staggerItem, staggerItemReduced } from "../lib/scrollMotion.js";

const hiringStats = [
  {
    target: 10,
    suffix: "K+",
    line1: "vetted candidates",
    line2: "in our talent pool",
  },
  {
    target: 72,
    suffix: "h",
    line1: "median time to",
    line2: "first shortlist",
  },
  {
    target: 500,
    suffix: "+",
    line1: "successful",
    line2: "hires this year",
  },
  {
    target: 94,
    suffix: "%",
    line1: "client satisfaction",
    line2: "on every placement",
  },
];

function StatValue({ target, suffix, reduceMotion, delayMs = 0 }) {
  const [n, setN] = useState(0);
  const value = reduceMotion ? target : n;

  useEffect(() => {
    if (reduceMotion) return;

    let rafId = 0;
    let timeoutId = 0;
    // Long floor so small targets (10, 72, …) stay readable; larger targets stretch toward cap.
    const duration = Math.min(4800, Math.max(3100, 2600 + target * 4.2));

    const run = () => {
      setN(0);
      let startAt = 0;
      const tick = (now) => {
        if (!startAt) startAt = now;
        const elapsed = Math.min(1, (now - startAt) / duration);
        // Linear progress so digits tick steadily (easing was finishing small counts too abruptly).
        setN(Math.min(target, Math.round(elapsed * target)));
        if (elapsed < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    if (delayMs > 0) timeoutId = window.setTimeout(run, delayMs);
    else rafId = requestAnimationFrame(run);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [reduceMotion, target, delayMs]);

  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

const talentCards = [
  {
    name: "Aarav Mehta",
    role: "Frontend Engineer",
    meta: "React • 6 yrs • Available now",
    initials: "AM",
  },
  {
    name: "Sophia Lee",
    role: "Product Designer",
    meta: "Figma • UX Research • 4 yrs",
    initials: "SL",
  },
  {
    name: "Noah Carter",
    role: "Growth Marketer",
    meta: "B2B SaaS • Paid Ads • 5 yrs",
    initials: "NC",
  },
  {
    name: "Mia Johnson",
    role: "Full Stack Developer",
    meta: "Node.js • Next.js • Immediate",
    initials: "MJ",
  },
  {
    name: "Liam Walker",
    role: "DevOps Engineer",
    meta: "AWS • CI/CD • 7 yrs",
    initials: "LW",
  },
  {
    name: "Emma Davis",
    role: "UI Developer",
    meta: "Tailwind • React • 5 yrs",
    initials: "ED",
  },
  {
    name: "Ethan Brooks",
    role: "Data Analyst",
    meta: "SQL • Power BI • 4 yrs",
    initials: "EB",
  },
  {
    name: "Olivia Turner",
    role: "QA Engineer",
    meta: "Automation • Cypress • 6 yrs",
    initials: "OT",
  },
];

export default function Hero() {
  const marqueeCards = [...talentCards, ...talentCards];
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const marqueeParallax = useSectionParallax(52);
  const itemVariant = reduceMotion ? staggerItemReduced : staggerItem;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 36 : 88]);
  const parallaxScale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1, 1] : [1.14, 1.02],
  );
  const heroBgY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 28 : 72]);
  const heroAccentY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 40 : 110]);
  const heroBlueY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 24 : 56]);

  return (
    <>
      <section
        ref={heroRef}
        id="top"
        className="relative min-h-screen overflow-hidden bg-esds-ivory pb-16 pt-6 text-esds-ink sm:pb-20 sm:pt-8"
      >
        <div className="pointer-events-none absolute inset-0 opacity-90" aria-hidden>
          {reduceMotion ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-white via-esds-ivory to-esds-ivory" />
              <div className="absolute -right-16 top-0 h-[min(72vw,280px)] w-[min(72vw,280px)] rounded-full bg-[rgb(var(--accent-rgb))]/10 blur-3xl sm:-right-32 sm:h-[420px] sm:w-[420px]" />
              <div className="absolute bottom-0 left-0 h-[min(40vw,200px)] w-[min(90vw,480px)] bg-gradient-to-tr from-[rgb(var(--emerald-rgb))]/10 to-transparent blur-2xl sm:h-[280px]" />
            </>
          ) : (
            <>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white via-esds-ivory to-esds-ivory"
                style={{ y: heroBgY }}
              />
              <motion.div
                className="absolute -right-16 top-0 h-[min(72vw,280px)] w-[min(72vw,280px)] rounded-full bg-[rgb(var(--accent-rgb))]/8 blur-3xl sm:-right-32 sm:h-[420px] sm:w-[420px]"
                style={{ y: heroAccentY }}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-[min(40vw,200px)] w-[min(90vw,480px)] bg-gradient-to-tr from-[rgb(var(--emerald-rgb))]/10 to-transparent blur-2xl sm:h-[280px]"
                style={{ y: heroBlueY }}
              />
            </>
          )}
        </div>

        <div className="absolute inset-0 z-[1] min-h-screen w-full">
          {reduceMotion ? (
            <NeuroPatternCanvas className="min-h-screen h-full w-full" />
          ) : (
              <motion.div
              className="absolute inset-0 min-h-[100vh] w-full origin-center will-change-transform sm:min-h-[115vh]"
              style={{ y: parallaxY, scale: parallaxScale }}
            >
              <NeuroPatternCanvas className="min-h-[100vh] h-full w-full sm:min-h-[115vh]" />
            </motion.div>
          )}
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-white/70 via-esds-ivory/30 to-transparent sm:bg-gradient-to-r sm:from-white/80 sm:via-esds-ivory/25 sm:to-transparent"
          aria-hidden
        />

        <div className="relative z-[3] mx-auto grid min-h-[calc(100dvh-5rem)] w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-8 text-left pointer-events-none sm:min-h-[calc(100dvh-5.5rem)] sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 xl:gap-16">
          <motion.div
            className="w-full max-w-3xl lg:max-w-none"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
          >
            <motion.div variants={itemVariant} className="mb-6 flex justify-start">
              <Pill>
                AI-powered workflow from requisition to onboarding
              </Pill>
            </motion.div>
            <motion.h1
              variants={itemVariant}
              className="font-display text-balance text-3xl font-bold uppercase leading-[1.08] tracking-display text-esds-navy sm:text-5xl md:text-6xl"
            >
              Start hiring world&apos;s{" "}
              <span className="text-[rgb(var(--accent-rgb))]">top talent</span>
            </motion.h1>
            <motion.p
              variants={itemVariant}
              className="mt-6 max-w-2xl text-pretty font-expressive text-lg italic leading-relaxed text-esds-ink/85 sm:text-xl"
            >
              Hire from our pool of 10,000+ vetted developers, designers, and
              marketers.
            </motion.p>
            <motion.div
              variants={itemVariant}
              className="mt-8 flex flex-wrap justify-start gap-3 pointer-events-auto"
            >
              <Button variant="primary" className="px-8 py-3.5 text-base">
                Hire Talent
              </Button>
              <a href="#ai-panel">
                <Button variant="ghost" className="px-8 py-3.5 text-base">
                  Meet AI Panel
                </Button>
              </a>
            </motion.div>

            <motion.div
              variants={itemVariant}
              className="pointer-events-auto mt-10 w-full max-w-5xl border-t border-[rgb(var(--accent-rgb))]/35 pt-8 sm:mt-14 sm:pt-10"
            >
              <div className="grid grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-4">
                {hiringStats.map((stat, index) => (
                  <div key={stat.line1} className="min-w-0">
                    <p className="text-3xl font-bold tabular-nums leading-none text-[rgb(var(--accent-rgb))] sm:text-4xl md:text-5xl">
                      <StatValue
                        target={stat.target}
                        suffix={stat.suffix}
                        reduceMotion={reduceMotion}
                        delayMs={index * 100}
                      />
                    </p>
                    <p className="mt-3 font-functional text-sm font-normal leading-snug text-esds-navy">
                      <span className="block">{stat.line1}</span>
                      <span className="block">{stat.line2}</span>
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="pointer-events-auto w-full lg:max-w-none">
            <HeroMockGraphs />
          </div>
        </div>
      </section>

      <section
        ref={marqueeParallax.ref}
        className="relative overflow-hidden border-y border-[rgb(var(--navy-rgb))]/10 bg-white py-8"
      >
        {!marqueeParallax.reduceMotion ? (
          <SectionParallaxLayers
            layerY={marqueeParallax.layerY}
            blobY={marqueeParallax.blobY}
          />
        ) : null}
        <div className="relative z-10 mx-auto mb-4 max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            className="font-editorial text-2xl font-semibold text-esds-navy sm:text-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45 }}
          >
            Available Talent This Week
          </motion.h1>
        </div>
        <div className="relative z-10 overflow-hidden">
          <motion.div
            className="marquee-track flex w-max gap-4 px-4 sm:px-6 lg:px-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {marqueeCards.map((card, index) => (
              <motion.article
                key={`${card.name}-${index}`}
                variants={staggerItem}
                className="min-w-[min(260px,78vw)] rounded-xl border border-[rgb(var(--navy-rgb))]/10 bg-esds-ivory p-3 shadow-[0_4px_20px_-8px_rgba(26,43,74,0.12)] sm:min-w-[260px]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(var(--accent-rgb))]/20 text-sm font-bold text-[rgb(var(--accent-rgb))]">
                    {card.initials}
                  </div>
                  <div className="text-left leading-tight">
                    <p className="font-functional text-sm font-semibold text-esds-navy">{card.name}</p>
                    <p className="font-functional text-xs text-[rgb(var(--emerald-rgb))]">{card.role}</p>
                  </div>
                </div>
                <p className="mt-2 font-functional text-xs text-esds-ink/65">{card.meta}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
