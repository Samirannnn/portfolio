import { createFileRoute } from "@tanstack/react-router";
import { MinecraftCharacter } from "@/components/MinecraftCharacter";
import { Typewriter } from "@/components/Typewriter";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samiran_Pal | AI/ML Engineer — Minecraft Portfolio" },
      {
        name: "description",
        content:
          "Samiran Pal — Computer Science & Engineering undergrad. A Minecraft-themed portfolio of projects and skills.",
      },
      { property: "og:title", content: "Samiran_Pal | CSE Undergrad" },
      {
        property: "og:description",
        content: "A blocky, pixel-perfect portfolio for a CSE undergrad.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    name: "Emotion Detection System",
    icon: "👁",
    desc: "Computer-vision model detecting human emotions from hand gestures using a CNN pipeline.",
    tech: ["Python", "OpenCV", "TensorFlow"],
  },
  {
    name: "Smart PG Portal",
    icon: "🏠",
    desc: "Full-stack web app for room viewing, automated emails, and complaint tracking.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Fake News Detection",
    icon: "📰",
    desc: "ML + NLP system classifying real vs. fake news with TF-IDF and ensemble models.",
    tech: ["scikit-learn", "NLTK", "Pandas"],
  },
  {
    name: "V2V Handshake",
    icon: "🚗",
    desc: "Internet-free vehicle-to-vehicle communication for blind-spot safety alerts.",
    tech: ["Embedded C", "LoRa", "Arduino"],
  },
];

const skills = [
  { label: "Python", level: 9 },
  { label: "PyTorch / TensorFlow", level: 8 },
  { label: "SQL", level: 7 },
  { label: "C / C++", level: 7 },
  { label: "Java", level: 6 },
  { label: "Frontend Development", level: 8 },
];

const GITHUB_URL = "https://github.com/Samirannnn";
const LINKEDIN_URL = "https://www.linkedin.com/in/samiran-pal-948412321";
const EMAIL = "psamiran295@gmail.com";

function Index() {
  return (
    <div className="min-h-screen">
      <MCNav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

function MCNav() {
  return (
    <nav className="sticky top-0 z-50 border-b-2 border-[var(--mc-gold)]/40 backdrop-blur-sm" style={{ background: "color-mix(in oklab, var(--mc-obsidian) 85%, transparent)" }}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="mc-text-shadow text-sm md:text-base text-white">
          <span className="text-[var(--mc-gold)]">&lt;</span>
          Samiran_Pal
          <span className="text-[var(--mc-gold)]">/&gt;</span>
        </a>
        <ul className="flex flex-wrap items-center gap-4 md:gap-6 text-[10px] md:text-xs">
          {[
            ["/about", "#about"],
            ["/projects", "#projects"],
            ["/skills", "#skills"],
            ["/contact", "#contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-white/80 hover:text-[var(--mc-gold)] transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header
      id="top"
      className="relative mc-obsidian-bg overflow-hidden"
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="relative">
          <span className="mc-chip mb-5">[ Online · Ready Player One ]</span>
          <h1 className="mc-text-shadow mt-5 text-2xl md:text-5xl leading-tight text-white">
            Hi, I&apos;m <span className="text-[var(--mc-gold)]">Samiran</span>
          </h1>
          <div className="mc-divider my-5 w-40" />
          <p className="text-[10px] md:text-xs text-white/70 leading-loose">
            B.Tech — Computer Science &amp; Engineering
          </p>

          <div className="mt-6 min-h-[110px] text-xs md:text-sm leading-loose text-white/90">
            <Typewriter
              lines={[
                "Loading Samiran.exe ...",
                "I build clean software & blocky web things.",
                "Scroll down to open the inventory.",
              ]}
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="mc-btn">
              View Projects
            </a>
            <a href="#contact" className="mc-btn" style={{ background: "var(--mc-emerald)" }}>
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[560px]">
          <MinecraftCharacter />
          <div className="absolute left-1/2 top-4 -translate-x-1/2 mc-nametag pointer-events-none">
            Samiran
          </div>
          <SpeechBubble />
        </div>
      </div>
      <div className="mc-divider" />
    </header>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mc-text-shadow text-center text-lg md:text-2xl text-[var(--mc-yellow)] mb-10">
      {children}
    </h2>
  );
}

function About() {
  return (
    <section id="about" className="mc-obsidian-bg py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionTitle>// About</SectionTitle>
        <div className="mc-panel-dark p-6 md:p-8 text-xs md:text-sm leading-loose relative" style={{ boxShadow: "var(--shadow-pixel), var(--shadow-glow)" }}>
          <p>
            <span className="text-[var(--mc-aqua)]">&gt; whoami</span>
          </p>
          <p className="mt-3">
            I&apos;m a Computer Science &amp; Engineering undergrad who likes turning
            ideas into things that actually run — from clean backends to
            polished front-ends, with a soft spot for AI/ML on the side.
          </p>
          <p className="mt-3">
            Outside the terminal you&apos;ll find me mining ideas, crafting prototypes,
            and respawning after every failed deployment.
          </p>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mc-obsidian-bg py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Inventory — Projects</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="mc-panel p-5">
              <div className="flex items-center gap-3">
                <div
                  className="grid h-12 w-12 place-items-center text-2xl mc-panel-dark"
                  style={{ boxShadow: "none" }}
                >
                  <span>{p.icon}</span>
                </div>
                <h3 className="text-xs md:text-sm">{p.name}</h3>
              </div>
              <p className="mt-4 text-[10px] md:text-xs leading-relaxed text-neutral-800">
                {p.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-[var(--mc-stone-dark)] text-white text-[9px] md:text-[10px] px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mc-obsidian-bg py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionTitle>Skill Tree</SectionTitle>
        <div className="mc-panel-dark p-6 md:p-8 space-y-4">
          {skills.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between text-[10px] md:text-xs mb-2">
                <span>{s.label}</span>
                <span className="text-[var(--mc-yellow)]">Lv. {s.level}/10</span>
              </div>
              {/* XP bar */}
              <div className="flex gap-[2px] h-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1"
                    style={{
                      background:
                        i < s.level
                          ? "var(--mc-grass)"
                          : "var(--mc-stone-dark)",
                      boxShadow:
                        i < s.level
                          ? "inset 2px 2px 0 rgba(255,255,255,0.25), inset -2px -2px 0 rgba(0,0,0,0.35)"
                          : "inset 2px 2px 0 rgba(0,0,0,0.4), inset -2px -2px 0 rgba(255,255,255,0.05)",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mc-obsidian-bg py-20 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <SectionTitle>// Contact</SectionTitle>
        <div className="mc-panel-dark p-6 md:p-8">
          <p className="text-[10px] md:text-xs leading-loose">
            Want to collaborate, hire, or just talk pixels? Find me below.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              className="mc-btn"
              style={{ background: "var(--mc-gold)", color: "#1a1a1a", textShadow: "none" }}
              href={`mailto:${EMAIL}`}
            >
              Send Mail
            </a>
            <a
              className="mc-btn"
              style={{ background: "var(--mc-grass-dark)" }}
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="mc-btn"
              style={{ background: "var(--mc-stone-dark)" }}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-5 text-[10px] md:text-xs text-[var(--mc-aqua)] break-all">
            {EMAIL}
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-6 px-6 text-center text-[9px] md:text-[10px] border-t-2 border-[var(--mc-gold)]/30" style={{ background: "var(--mc-obsidian)" }}>
      <p className="mc-text-shadow text-white/80">
        © {new Date().getFullYear()} Samiran_Pal — Built with blocks, bits &amp; React.
      </p>
    </footer>
  );
}
