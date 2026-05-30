import { createFileRoute } from "@tanstack/react-router";
import { MinecraftCharacter } from "@/components/MinecraftCharacter";
import { Typewriter } from "@/components/Typewriter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samiran_Pal | AI/ML Engineer — Minecraft Portfolio" },
      {
        name: "description",
        content:
          "Samiran Pal — B.Tech in Artificial Intelligence & Machine Learning. A Minecraft-themed portfolio of projects, skills, and achievements.",
      },
      { property: "og:title", content: "Samiran_Pal | AI/ML Engineer" },
      {
        property: "og:description",
        content: "A blocky, pixel-perfect portfolio for an AI/ML engineer.",
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
    <nav className="sticky top-0 z-50 mc-dirt-bg border-b-[6px] border-[var(--mc-grass)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="mc-text-shadow text-sm md:text-base text-white">
          Samiran_Pal
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
                className="text-white hover:text-[var(--mc-yellow)] mc-text-shadow"
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
      className="relative mc-stone-bg overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, var(--mc-sky) 0%, var(--mc-sky) 55%, var(--mc-grass) 55%, var(--mc-grass-dark) 60%, var(--mc-dirt) 60%, var(--mc-dirt) 100%)",
      }}
    >
      {/* floating pixel clouds */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-[8%] top-[12%] h-6 w-24 bg-white" />
        <div className="absolute left-[14%] top-[8%] h-6 w-12 bg-white" />
        <div className="absolute right-[10%] top-[20%] h-5 w-20 bg-white" />
        <div className="absolute right-[18%] top-[14%] h-5 w-10 bg-white" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="mc-panel-dark p-6 md:p-8">
          <p className="text-[10px] text-[var(--mc-aqua)] mb-3">
            &lt;System&gt; player joined the game
          </p>
          <h1 className="mc-text-shadow text-2xl md:text-4xl leading-snug text-white">
            Hi, I&apos;m <span className="text-[var(--mc-yellow)]">Samiran</span>
          </h1>
          <p className="mt-3 text-[10px] md:text-xs text-[var(--mc-gray-ui)]">
            B.Tech — Artificial Intelligence &amp; Machine Learning
          </p>

          <div className="mt-6 min-h-[110px] text-xs md:text-sm leading-loose">
            <Typewriter
              lines={[
                "Loading Samiran.exe ...",
                "I build AI/ML systems & blocky web things.",
                "Type /projects to view my inventory.",
              ]}
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="mc-btn">
              View Projects
            </a>
            <a href="#contact" className="mc-btn" style={{ background: "var(--mc-grass-dark)" }}>
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] mc-float">
          <MinecraftCharacter />
          <div className="absolute left-1/2 top-4 -translate-x-1/2 mc-nametag">
            Samiran
          </div>
        </div>
      </div>
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
    <section id="about" className="mc-stone-bg py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionTitle>// About</SectionTitle>
        <div className="mc-panel-dark p-6 md:p-8 text-xs md:text-sm leading-loose">
          <p>
            <span className="text-[var(--mc-aqua)]">&gt; whoami</span>
          </p>
          <p className="mt-3">
            I&apos;m an AI/ML undergrad obsessed with turning research papers into things
            that actually run. I like computer vision, NLP, and full-stack glue
            code that lets models reach real users.
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
    <section id="projects" className="mc-dirt-bg py-20 px-6">
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
    <section id="skills" className="mc-stone-bg py-20 px-6">
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

function Achievements() {
  return (
    <section id="achievements" className="mc-dirt-bg py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionTitle>Achievements Unlocked</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((a) => (
            <div
              key={a.text}
              className="mc-panel-dark p-4 flex items-start gap-4"
            >
              <div className="text-2xl">{a.icon}</div>
              <div className="text-[10px] md:text-xs leading-relaxed">
                <div className="text-[var(--mc-yellow)] mb-1">Achievement get!</div>
                {a.text}
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
    <section id="contact" className="mc-stone-bg py-20 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <SectionTitle>// Contact</SectionTitle>
        <div className="mc-panel-dark p-6 md:p-8">
          <p className="text-[10px] md:text-xs leading-loose">
            Want to collaborate, hire, or just talk pixels?
          </p>
          <p className="mt-3 text-[10px] md:text-xs text-[var(--mc-aqua)]">
            samiran.pal@example.com
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a className="mc-btn" href="mailto:samiran.pal@example.com">
              Send Mail
            </a>
            <a
              className="mc-btn"
              style={{ background: "var(--mc-grass-dark)" }}
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="mc-btn"
              style={{ background: "var(--mc-stone-dark)" }}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mc-dirt-bg py-6 px-6 text-center text-[9px] md:text-[10px]">
      <p className="mc-text-shadow text-white">
        © {new Date().getFullYear()} Samiran_Pal — Built with blocks, bits &amp; React.
      </p>
    </footer>
  );
}
