"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useScrollReveal, useStaggerReveal, useParallax } from "./hooks/useScrollReveal";

const A = "/assets/";

const services = [
  ["01", "Brand strategy", "Build a point of difference and a clear direction forward."],
  ["02", "Social media", "Create community, conversation and content worth sharing."],
  ["03", "Performance marketing", "Turn smart media, testing and insight into measurable growth."],
  ["04", "Website experiences", "Design digital homes that look good and work even harder."],
  ["05", "Content studio", "Make scroll-stopping visuals, video and stories with purpose."],
  ["06", "SEO & growth", "Build discoverability and momentum that compounds over time."],
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo ${light ? "logo-light" : ""}`} href="#top" aria-label="Blooming Hives home">
      <span className="logo-flower" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
        <span />
      </span>
      <span>blooming hives</span>
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "block" }}
    >
      <line x1="3.5" y1="12.5" x2="12.5" y2="3.5" />
      <polyline points="6 3.5 12.5 3.5 12.5 10" />
    </svg>
  );
}

function ArrowLink({
  children,
  lime = false,
  href = "#contact",
}: {
  children: React.ReactNode;
  lime?: boolean;
  href?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <a
      className={`pill ${lime ? "pill-lime" : ""}`}
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      style={{
        overflow: "visible",
      }}
    >
      {/* Subtle button background highlight on hover */}
      <motion.span
        className="pill-bg-highlight"
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 30,
          background: lime
            ? "linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.02) 100%)",
          pointerEvents: "none",
        }}
      />

      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>

      {/* Arrow wrapper with overflow: visible so the arrow can travel outside the button */}
      <span
        className="arrow-wrapper"
        aria-hidden="true"
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 22,
          height: 22,
          overflow: "visible",
          zIndex: 2,
        }}
      >
        {/* Short motion trail 2 (outer faint ghost) */}
        {!shouldReduceMotion && (
          <motion.span
            style={{
              position: "absolute",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              color: "inherit",
              overflow: "visible",
            }}
            initial={false}
            animate={
              isHovered
                ? {
                    x: 12,
                    y: -12,
                    opacity: [0, 0.4, 0],
                    scale: [0.92, 0.88, 0.8],
                    filter: "blur(1.6px) drop-shadow(0 0 4px rgba(255,255,255,0.8))",
                  }
                : {
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 1,
                    filter: "blur(0px) drop-shadow(0 0 0px transparent)",
                  }
            }
            transition={
              isHovered
                ? {
                    duration: 0.38,
                    times: [0, 0.45, 1],
                    ease: [0.22, 1, 0.36, 1],
                  }
                : { duration: 0.22 }
            }
          >
            <ArrowIcon />
          </motion.span>
        )}

        {/* Short motion trail 1 (middle ghost) */}
        {!shouldReduceMotion && (
          <motion.span
            style={{
              position: "absolute",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              color: "inherit",
              overflow: "visible",
            }}
            initial={false}
            animate={
              isHovered
                ? {
                    x: 18,
                    y: -18,
                    opacity: [0, 0.65, 0],
                    scale: [0.96, 0.92, 0.85],
                    filter: "blur(0.8px) drop-shadow(0 0 6px rgba(255,255,255,0.9))",
                  }
                : {
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 1,
                    filter: "blur(0px) drop-shadow(0 0 0px transparent)",
                  }
            }
            transition={
              isHovered
                ? {
                    duration: 0.4,
                    times: [0, 0.5, 1],
                    ease: [0.22, 1, 0.36, 1],
                  }
                : { duration: 0.22 }
            }
          >
            <ArrowIcon />
          </motion.span>
        )}

        {/* Main Arrow: Launches diagonally up-right crossing beyond boundary, glows, and briefly disappears */}
        <motion.span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            willChange: "transform, opacity, filter",
            color: "inherit",
            overflow: "visible",
          }}
          initial={false}
          animate={
            shouldReduceMotion
              ? { x: 0, y: 0, opacity: 1 }
              : isHovered
                ? {
                    x: 28,
                    y: -28,
                    opacity: [1, 0.95, 0],
                    filter: [
                      "drop-shadow(0 0 2px rgba(255,255,255,0.7))",
                      "drop-shadow(0 0 8px rgba(255,255,255,1)) drop-shadow(0 0 14px rgba(255,255,255,0.7))",
                      "drop-shadow(0 0 10px rgba(255,255,255,0))",
                    ],
                  }
                : {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    filter: "drop-shadow(0 0 0px rgba(255,255,255,0))",
                  }
          }
          transition={
            isHovered
              ? {
                  x: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                  y: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.42, times: [0, 0.65, 1], ease: "easeOut" },
                  filter: { duration: 0.42, times: [0, 0.35, 1] },
                }
              : {
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }
          }
        >
          <ArrowIcon />
        </motion.span>
      </span>
    </a>
  );
}

function Bloom({ className = "", mobile = false }: { className?: string; mobile?: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const petals = mobile
    ? ["50fc9", "36427", "699f9", "7f445", "546f2", "babbc"]
    : ["df4ec", "42111", "74fba", "8a9fb", "1a73d", "33685"];
  const center = mobile ? "8e1ad" : "c7ffb";

  return (
    <span className={`bloom ${className}`} aria-hidden="true">
      <motion.span
        className="bloom-petals"
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          transformOrigin: "64px 64px",
        }}
        animate={
          shouldReduceMotion
            ? { rotate: 0, scale: 1 }
            : {
                rotate: [-5, 5, -5],
                scale: [1, 1.04, 0.98, 1],
              }
        }
        transition={{
          rotate: {
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          },
          scale: {
            duration: 5.4,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
      >
        {petals.map((petal, index) => (
          <img key={petal} src={`${A}${petal}.svg`} alt="" className={`petal petal-${index + 1}`} />
        ))}
      </motion.span>
      {/* Center dot is 100% stable, fixed in place */}
      <img src={`${A}${center}.svg`} alt="" className="bloom-center" />
    </span>
  );
}

function Header() {
  return (
    <header className="site-header" id="top">
      <Logo />
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#process">About</a>
        <a href="#contact">Journal</a>
      </nav>
      <ArrowLink>LET&apos;S TALK</ArrowLink>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">
          <span />
          <span />
          <span />
        </summary>
        <div>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">About</a>
          <a href="#contact">Let&apos;s talk</a>
        </div>
      </details>
    </header>
  );
}

function HeroArt() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mouse parallax motion values (normalized from -1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid, luxurious feel
  const springConfig = { damping: 28, stiffness: 140, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Layered parallax translations (kept strictly within 5-8px maximum)
  const orbParallaxX = useTransform(smoothX, [-1, 1], [-4, 4]);
  const orbParallaxY = useTransform(smoothY, [-1, 1], [-4, 4]);

  const flowerParallaxX = useTransform(smoothX, [-1, 1], [-6, 6]);
  const flowerParallaxY = useTransform(smoothY, [-1, 1], [-6, 6]);

  const blueParallaxX = useTransform(smoothX, [-1, 1], [7, -7]);
  const blueParallaxY = useTransform(smoothY, [-1, 1], [7, -7]);

  const coralParallaxX = useTransform(smoothX, [-1, 1], [5, -5]);
  const coralParallaxY = useTransform(smoothY, [-1, 1], [5, -5]);

  const dotParallaxX = useTransform(smoothX, [-1, 1], [-7, 7]);
  const dotParallaxY = useTransform(smoothY, [-1, 1], [-7, 7]);

  useEffect(() => {
    // Disable mouse parallax on touch devices or small screens
    const isFinePointer = window.matchMedia("(pointer: fine) and (min-width: 761px)").matches;
    if (!isFinePointer || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const heroEl = document.querySelector(".hero");
      if (!heroEl) return;
      const rect = heroEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const nx = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
      const ny = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));
      mouseX.set(nx);
      mouseY.set(ny);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  return (
    <div className="hero-art" aria-label="Blooming Hives visual identity artwork">
      {/* Lavender Circle + Concentric Outline + Orbiting Black Dot */}
      <motion.div
        className="orb"
        style={{
          x: isMobile || shouldReduceMotion ? 0 : orbParallaxX,
          y: isMobile || shouldReduceMotion ? 0 : orbParallaxY,
        }}
      >
        {/* Large Lavender Circle: stays visually stable */}
        <Image src={`${A}5c7dc.svg`} alt="" width={316} height={316} priority />

        {/* Concentric Thin Black Outline: stays visually stable */}
        <Image
          className="orb-line"
          src={`${A}8fd33.svg`}
          alt=""
          width={240}
          height={240}
          priority
        />

        {/* White Flower with independent parallax & breathing/rotating petals */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            x: isMobile || shouldReduceMotion ? 0 : flowerParallaxX,
            y: isMobile || shouldReduceMotion ? 0 : flowerParallaxY,
          }}
        >
          <Bloom />
        </motion.div>

        {/* Precise continuous orbital animation of black dot around lavender circle circumference */}
        <div className="desktop-copy">
          <motion.div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 0,
              height: 0,
              pointerEvents: "none",
              zIndex: 10,
            }}
            animate={
              shouldReduceMotion
                ? { rotate: 67 }
                : { rotate: [67, 427] }
            }
            transition={{
              duration: 9,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* The dot is positioned exactly on the circumference: radius 158px */}
            <div
              style={{
                position: "absolute",
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: "#1D2922",
                left: -7,
                top: -158 - 7,
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="hero-coral" />

      {/* Electric Blue Card */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          x: isMobile || shouldReduceMotion ? 0 : blueParallaxX,
          y: isMobile || shouldReduceMotion ? 0 : blueParallaxY,
        }}
      >
        <motion.div
          className="blue-card"
          style={{ pointerEvents: "auto" }}
          animate={
            isMobile || shouldReduceMotion
              ? {}
              : {
                  y: [-5, 5, -5],
                  rotate: [6.5, 7.5, 6.5],
                }
          }
          transition={{
            duration: 5.2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <small>BRAND WITH AMBITION</small>
          <strong>
            MAKE
            <br />
            ROOM
            <br />
            TO GROW
          </strong>
          {/* Coral circle stamp on the blue card with subtle scale pulse */}
          <motion.div
            style={{
              position: "absolute",
              right: 18,
              bottom: 14,
              width: 58,
              height: 58,
            }}
            animate={
              shouldReduceMotion
                ? { scale: 1 }
                : { scale: [1, 1.055, 1] }
            }
            transition={{
              duration: 3.2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Image src={`${A}a1390.svg`} alt="" width={58} height={58} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Coral Card */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          x: isMobile || shouldReduceMotion ? 0 : coralParallaxX,
          y: isMobile || shouldReduceMotion ? 0 : coralParallaxY,
        }}
      >
        <motion.div
          className="coral-card"
          style={{ pointerEvents: "auto" }}
          animate={
            isMobile || shouldReduceMotion
              ? {}
              : {
                  y: [6, -6, 6],
                  rotate: [-5.4, -4.6, -5.4],
                }
          }
          transition={{
            duration: 5.8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <small>CREATIVE THAT CONNECTS</small>
          <strong>
            Ideas into
            <br />
            action.
          </strong>
        </motion.div>
      </motion.div>

      {/* Small Coral Dot: gentle floating movement */}
      <motion.div
        className="orbit-dot desktop-copy"
        style={{
          x: isMobile || shouldReduceMotion ? 0 : dotParallaxX,
          y: isMobile || shouldReduceMotion ? 0 : dotParallaxY,
        }}
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? { y: 0, x: 0 }
              : {
                  y: [-4, 4, -4],
                  x: [-2, 2, -2],
                }
          }
          transition={{
            duration: 4.4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image src={`${A}04aa6.svg`} alt="" width={22} height={22} />
        </motion.div>
      </motion.div>
    </div>
  );
}

function Hero() {
  const marqueeRef = useScrollReveal<HTMLDivElement>(0.2);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <main className="hero">
        <div className="hero-copy">
          <motion.p
            className="eyebrow desktop-copy"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            INDEPENDENT CREATIVE &amp; DIGITAL AGENCY &nbsp;/&nbsp; DELHI + EVERYWHERE
          </motion.p>
          <motion.p
            className="eyebrow mobile-copy"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            INDEPENDENT CREATIVE &amp; DIGITAL AGENCY
          </motion.p>
          <h1 style={{ overflow: "hidden" }}>
            <motion.span
              style={{ display: "inline-block" }}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Make your brand
            </motion.span>
            <br />
            <motion.span
              style={{ display: "inline-block" }}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              impossible to ignore.
            </motion.span>
          </h1>
          <motion.div
            className="hero-underline"
            initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
          />
          <motion.p
            className="hero-description"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
          >
            Strategy, standout creative and performance marketing — all working together to grow
            your brand.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.84, ease: [0.16, 1, 0.3, 1] }}
          >
            <ArrowLink>LET&apos;S TALK</ArrowLink>
            <a className="explore" href="#work">
              Explore our work&nbsp; ↓
            </a>
          </motion.div>
          <motion.p
            className="desktop-copy tiny-note"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            IDEAS THAT MOVE PEOPLE + BUSINESS
          </motion.p>
        </div>
        <HeroArt />
      </main>
      <div className="marquee reveal-up" ref={marqueeRef} aria-label="Think big, make noise, grow better, stay curious">
        <span className="desktop-copy">
          THINK BIG　✳　 MAKE NOISE　✳　 GROW BETTER　✳　 STAY CURIOUS　✳
        </span>
        <span className="mobile-copy">THINK BIG　✳　 GROW BETTER</span>
      </div>
    </>
  );
}

function Intro() {
  const sectionRef = useScrollReveal<HTMLElement>(0.15);
  const disciplinesRef = useStaggerReveal<HTMLDivElement>(":scope > span");

  return (
    <section className="intro section reveal-up" ref={sectionRef}>
      <p className="eyebrow desktop-copy">GOOD PEOPLE. AMBITIOUS IDEAS. BETTER OUTCOMES.</p>
      <p className="eyebrow mobile-copy">A CREATIVE PARTNER FOR AMBITIOUS TEAMS</p>
      <div className="intro-grid">
        <h2 className="desktop-copy">
          A creative partner for brands
          <br />
          with somewhere to go.
        </h2>
        <h2 className="mobile-copy">
          Ideas with purpose.
          <br />
          Work with impact.
        </h2>
        <p>
          <span className="desktop-copy">
            From first impression to final conversion, we bring the right mix of creative thinking
            and digital know-how to every touchpoint.
          </span>
          <span className="mobile-copy">
            We bring brand, digital and performance together to help good businesses grow.
          </span>
        </p>
      </div>
      <div className="disciplines desktop-copy stagger-children" ref={disciplinesRef}>
        <span>BRAND &amp; CULTURE</span>
        <span>DIGITAL EXPERIENCES</span>
        <span>PERFORMANCE &amp; GROWTH</span>
        <span>CONTENT THAT CONNECTS</span>
      </div>
    </section>
  );
}

function ProjectArtwork({ variant }: { variant: "bloom" | "move" | "energy" }) {
  if (variant === "bloom") {
    return (
      <div className="project-art art-bloom">
        <small>CONCEPT DIRECTION / 01</small>
        <strong>
          BLOOM
          <br />
          IN FULL
        </strong>
        <Image className="art-orbit" src={`${A}79740.svg`} alt="" width={68} height={68} />
        <span className="mini-bloom" aria-hidden="true">
          {["cb2fb", "f3f59", "47a8f", "b19aa", "630bb", "30bc8"].map((asset, index) => (
            <img
              key={asset}
              className={`mini-petal mini-${index + 1}`}
              src={`${A}${asset}.svg`}
              alt=""
            />
          ))}
          <img className="mini-center" src={`${A}c8b5b.svg`} alt="" />
        </span>
      </div>
    );
  }
  if (variant === "move") {
    return (
      <div className="project-art art-move">
        <small>CONCEPT DIRECTION / 02</small>
        <strong>
          MOVE
          <br className="desktop-copy" /> WITH
          <br className="desktop-copy" /> MEANING
        </strong>
        <Image src={`${A}9762d.svg`} alt="" width={104} height={104} />
        <i />
      </div>
    );
  }
  return (
    <div className="project-art art-energy">
      <small>CONCEPT DIRECTION / 03</small>
      <strong>
        GOOD
        <br />
        ENERGY
      </strong>
      <Image src={`${A}0ab69.svg`} alt="" width={110} height={110} />
      <Image src={`${A}0be75.svg`} alt="" width={70} height={70} />
    </div>
  );
}

function Work() {
  const headingRef = useScrollReveal<HTMLDivElement>(0.2);
  const gridRef = useStaggerReveal<HTMLDivElement>(":scope > article");

  const projects = [
    [
      "bloom",
      "BRAND WORLD • CONCEPT",
      "A brighter kind of beauty",
      "Identity, art direction & campaign system",
    ],
    [
      "move",
      "DIGITAL • CONCEPT",
      "Movement with meaning",
      "Content strategy, social & digital storytelling",
    ],
    [
      "energy",
      "CAMPAIGN • CONCEPT",
      "Good energy, everywhere",
      "Creative platform, production & paid social",
    ],
  ] as const;

  return (
    <section className="work section" id="work">
      <div className="section-heading reveal-up" ref={headingRef}>
        <h2>
          <span className="desktop-copy">Ideas made visible.</span>
          <span className="mobile-copy">Selected concepts</span>
        </h2>
        <p className="desktop-copy">A glimpse of the worlds we love to create.</p>
      </div>
      <div className="project-grid stagger-children" ref={gridRef}>
        {projects.map(([variant, label, title, description]) => (
          <article className={`project-card project-${variant}`} key={variant}>
            <ProjectArtwork variant={variant} />
            <div className="project-copy">
              <small>{label}</small>
              <h3>{title}</h3>
              <p className="desktop-copy">{description}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="desktop-copy concepts-note">
        VISUAL CONCEPTS FOR DESIGN EXPLORATION — NOT CLIENT CASE STUDIES
      </p>
    </section>
  );
}

function Services() {
  const headingRef = useScrollReveal<HTMLDivElement>(0.15);
  const gridRef = useStaggerReveal<HTMLDivElement>(":scope > a", 0.08);

  return (
    <section className="services" id="services">
      <div className="section services-inner">
        <p className="eyebrow desktop-copy">WHAT WE BRING TO THE TABLE</p>
        <p className="eyebrow mobile-copy">WHAT WE DO</p>
        <div className="section-heading service-heading reveal-up" ref={headingRef}>
          <h2>
            <span className="desktop-copy">Everything clicks together.</span>
            <span className="mobile-copy">One team. Many ways.</span>
          </h2>
          <p className="desktop-copy">
            One connected team for the ideas, experiences and growth that move your brand forward.
          </p>
        </div>
        <div className="service-grid stagger-children" ref={gridRef}>
          {services.map(([number, title, description]) => (
            <a href="#contact" className="service-card" key={number}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p className="desktop-copy">{description}</p>
              <span className="service-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const headingRef = useScrollReveal<HTMLDivElement>(0.2);
  const gridRef = useStaggerReveal<HTMLDivElement>(":scope > article", 0.1);

  const steps = [
    ["01", "Align", "We get close to your goals, audience and ambition before we make a move."],
    [
      "02",
      "Create",
      "We turn insight into ideas, identities and experiences people want to spend time with.",
    ],
    ["03", "Accelerate", "We launch, learn and optimise — making every next move smarter."],
  ];
  return (
    <section className="process section desktop-copy" id="process">
      <p className="eyebrow">HOW WE MAKE GOOD THINGS HAPPEN</p>
      <div className="process-heading reveal-up" ref={headingRef}>
        <h2>
          Good work isn&apos;t luck.
          <br />
          It&apos;s a process.
        </h2>
        <p>
          Clear thinking, collaborative making and an appetite to keep improving. That&apos;s our
          rhythm.
        </p>
      </div>
      <div className="process-grid stagger-children" ref={gridRef}>
        {steps.map(([number, title, copy], index) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
            {index === 1 && <Image src={`${A}15126.svg`} alt="" width={60} height={60} />}
            {index === 2 && <i />}
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const sectionRef = useScrollReveal<HTMLDivElement>(0.15);
  const artRef = useParallax<HTMLDivElement>(0.06);

  return (
    <section className="contact" id="contact">
      <div className="section contact-inner reveal-up" ref={sectionRef}>
        <p className="eyebrow">
          <span className="desktop-copy">GOT A GOOD FEELING ABOUT THIS?</span>
          <span className="mobile-copy">HAVE A GOOD ONE IN MIND?</span>
        </p>
        <h2>
          <span className="desktop-copy">
            Got a big idea?
            <br />
            Let&apos;s make it happen.
          </span>
          <span className="mobile-copy">
            Let&apos;s make it
            <br />
            happen.
          </span>
        </h2>
        <p className="desktop-copy contact-copy">
          Tell us what you&apos;re building. We&apos;ll bring the right people, ideas and energy to
          make it real.
        </p>
        <ArrowLink lime href="mailto:hello@bloominghives.com">
          LET&apos;S TALK
        </ArrowLink>
        <div className="contact-art desktop-copy" aria-hidden="true" ref={artRef}>
          <Image src={`${A}3a6c6.svg`} alt="" width={310} height={310} />
          <span>
            {["c795a", "b7ece", "7ac48", "902c0", "3c09c", "57c44"].map((asset, index) => (
              <img
                key={asset}
                src={`${A}${asset}.svg`}
                alt=""
                className={`contact-petal cp-${index + 1}`}
              />
            ))}
            <img src={`${A}0f19b.svg`} alt="" className="contact-center" />
          </span>
          <Image className="contact-orbit" src={`${A}f8d03.svg`} alt="" width={52} height={52} />
          <small>LET&apos;S BUILD SOMETHING GOOD.</small>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerRef = useScrollReveal<HTMLElement>(0.1);

  return (
    <footer className="reveal-up" ref={footerRef}>
      <div className="section footer-inner">
        <div className="footer-brand">
          <Logo light />
          <p className="desktop-copy">
            Creative thinking.
            <br />
            Meaningful growth.
          </p>
        </div>
        <div className="footer-links desktop-copy">
          <strong>EXPLORE</strong>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">About</a>
          <a href="#contact">Journal</a>
        </div>
        <div className="footer-links desktop-copy">
          <strong>SAY HELLO</strong>
          <a href="mailto:hello@bloominghives.com">Start a conversation</a>
          <span>Let&apos;s make something matter.</span>
        </div>
        <a className="mobile-copy footer-social" href="#contact">
          IN　↗
        </a>
        <div className="footer-bottom">
          <span>
            © 2026 BLOOMING HIVES <span className="desktop-copy"> /　ALL GOOD THINGS GROW.</span>
            <span className="mobile-copy"> /　DELHI, INDIA</span>
          </span>
          <span className="desktop-copy">DELHI, INDIA　•　WORKING EVERYWHERE</span>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Work />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
