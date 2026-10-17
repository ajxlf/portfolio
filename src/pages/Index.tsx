import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, FileDown, Moon, Sun, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Cadence",
    problem: "A personal planning web app combining activity scheduling, nutrition, workouts and journalling, with account-based cloud synchronisation.",
    stack: ["JavaScript", "Supabase", "PostgreSQL", "PWA", "GitHub Pages"],
    features: [
      "Built a weekly planner with recurring activities that can be completed independently",
      "Integrated Supabase authentication, PostgreSQL-backed persistence and realtime sync",
      "Added recipe and workout libraries, calorie and macro estimates, journalling, and data backup",
    ],
    github: "https://github.com/ajxlf/cadence",
    demo: "",
  },
  {
    name: "CyberDrive",
    problem: "An iOS and CarPlay navigation app concept combining MapKit routing with a custom cyberpunk-style map.",
    stack: ["Swift", "SwiftUI", "MapKit", "MapLibre", "CarPlay"],
    features: [
      "Implemented GPS position and heading, destination search, and driving-route flows",
      "Designed custom map styling using MapLibre and OpenStreetMap-derived vector data",
      "Documented a GitHub Actions simulator smoke test that builds, launches and captures diagnostic artefacts",
    ],
    github: "https://github.com/ajxlf/CyberDrive",
    demo: "",
  },
  {
    name: "Cross-Math",
    problem: "An Android arithmetic puzzle game in which players complete intersecting horizontal and vertical equations.",
    stack: ["Kotlin", "Jetpack Compose", "ViewModel", "Coroutines"],
    features: [
      "Generated variable-size puzzles with intersecting equations and validation of candidate placements",
      "Implemented live answer validation, scoring and an optional countdown mode",
      "Preserved puzzle and timer state across device rotation",
    ],
    github: "https://github.com/ajxlf/Cross-Math",
    demo: "",
  },
  {
    name: "Smart Campus JAX-RS API",
    problem: "A Java REST API for managing campus rooms, sensors and historical sensor readings.",
    stack: ["Java", "JAX-RS", "Jersey", "Maven", "REST"],
    features: [
      "Designed endpoints for linked room, sensor and sensor-reading resources",
      "Handled invalid relationships and prohibited operations with structured HTTP errors",
      "Documented the API with endpoint tables and reproducible curl examples",
    ],
    github: "https://github.com/ajxlf/smart-campus-jaxrs-api",
    demo: "",
  },
];

const skills = [
  { group: "Programming Languages", items: ["Java", "JavaScript", "TypeScript", "Kotlin", "Python", "SQL", "Swift"] },
  { group: "Web / Front End", items: ["HTML", "CSS", "React", "Vite", "Tailwind CSS"] },
  { group: "Back End / APIs", items: ["Django", "JAX-RS", "REST APIs", "Supabase"] },
  { group: "Databases", items: ["PostgreSQL", "SQLite", "Room"] },
  { group: "Mobile / Platform", items: ["Android", "Jetpack Compose", "SwiftUI", "MapKit", "MapLibre", "CarPlay"] },
  { group: "Tools", items: ["Git", "GitHub", "GitHub Actions", "Android Studio", "Jupyter Notebook"] },
  { group: "Spoken Languages", items: ["English — Fluent", "Portuguese — Fluent", "Spanish — B2"] },
];

const NAME = "Andre Lawson-Ferreira";
const EMAIL = "aj.ferreira@hotmail.co.uk";
const GITHUB = "https://github.com/ajxlf";
const LINKEDIN = "https://www.linkedin.com/in/andrelawferreira";
const CV_URL = "/portfolio/Andre_Ferreira_CV.pdf";

const Index = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-sm bg-background/80 border-b border-border">
        <nav className="container-prose flex h-16 items-center justify-between" aria-label="Primary">
          <a href="#top" className="font-display text-lg font-medium tracking-tight">
            {NAME}
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-secondary transition-colors"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="section-y">
          <div className="container-prose">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Portfolio · 2026
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight">
              {NAME}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Computer Science Student · Aspiring Software Engineer
            </p>
            <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed">
              I build software across web, mobile and backend systems. My projects include a cross-device personal planner, an iOS/CarPlay navigation concept, an Android puzzle game and a Java REST API. I focus on solving practical problems, explaining technical decisions and making projects easy to run and evaluate.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={CV_URL} target="_blank" rel="noopener noreferrer" download>
                  <FileDown className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> London, United Kingdom
            </p>
          </div>
        </section>

        <div className="container-prose"><div className="hairline" /></div>

        {/* About */}
        <section id="about" className="section-y">
          <div className="container-prose grid gap-10 md:grid-cols-[200px_1fr]">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground pt-2">
              About
            </h2>
            <div className="max-w-2xl">
              <p className="font-display text-2xl md:text-3xl leading-snug">
                Computer Science BSc at the University of Westminster, graduating 2027.
              </p>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                I’m studying for a BSc in Computer Science at the University of Westminster, graduating in 2027. I’m preparing for graduate software engineering roles, with a particular interest in dependable applications, APIs and aerospace software. My projects span web, mobile and platform development, and I use them to deepen my understanding of design trade-offs, implementation and testing.
              </p>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                Outside software, boxing and chess keep me focused on discipline, deliberate practice and continuous improvement.
              </p>
            </div>
          </div>
        </section>

        <div className="container-prose"><div className="hairline" /></div>

        {/* Projects */}
        <section id="projects" className="section-y">
          <div className="container-prose">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Featured Projects
                </h2>
                <p className="font-display text-3xl md:text-4xl">Selected work.</p>
              </div>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                More on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid gap-6 md:gap-8">
              {projects.map((p, i) => (
                <article
                  key={p.name}
                  className="group grid gap-6 md:grid-cols-[80px_1fr] rounded-lg border border-border bg-card p-6 md:p-8 transition-colors hover:border-foreground/30"
                >
                  <div className="font-mono text-xs text-muted-foreground pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl md:text-3xl font-medium">{p.name}</h3>
                      <div className="flex items-center gap-2">
                        {p.github && (
                          <Button asChild size="sm" variant="ghost">
                            <a href={p.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-1.5 h-3.5 w-3.5" /> Code
                            </a>
                          </Button>
                        )}
                        {p.demo && (
                          <Button asChild size="sm" variant="outline">
                            <a href={p.demo} target="_blank" rel="noopener noreferrer">
                              Live <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                      {p.problem}
                    </p>
                    <ul className="mt-5 space-y-1.5 text-sm leading-relaxed">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-3">
                          <span className="text-muted-foreground mt-2 h-px w-3 bg-current shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-xs px-2 py-1 rounded border border-border text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="container-prose"><div className="hairline" /></div>

        {/* Skills */}
        <section id="skills" className="section-y">
          <div className="container-prose grid gap-10 md:grid-cols-[200px_1fr]">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground pt-2">
              Skills
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {skills.map((cat) => (
                <div key={cat.group}>
                  <h3 className="font-display text-lg mb-3">{cat.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {cat.items.map((s) => (
                      <li
                        key={s}
                        className="font-mono text-xs px-2.5 py-1 rounded border border-border text-muted-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container-prose"><div className="hairline" /></div>

        {/* Links */}
        <section id="links" className="section-y">
          <div className="container-prose">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Links
            </h2>
            <p className="font-display text-3xl md:text-4xl mb-10">Find me here.</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-border p-5 hover:border-foreground/40 hover:bg-secondary/50 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Github className="h-5 w-5" />
                  <span className="font-medium">GitHub</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-border p-5 hover:border-foreground/40 hover:bg-secondary/50 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5" />
                  <span className="font-medium">LinkedIn</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group flex items-center justify-between rounded-lg border border-border p-5 hover:border-foreground/40 hover:bg-secondary/50 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <FileDown className="h-5 w-5" />
                  <span className="font-medium">CV (PDF)</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </section>

        <div className="container-prose"><div className="hairline" /></div>

        {/* Contact */}
        <section id="contact" className="section-y">
          <div className="container-prose grid gap-10 md:grid-cols-[200px_1fr]">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground pt-2">
              Contact
            </h2>
            <div className="max-w-2xl">
              <p className="font-display text-3xl md:text-4xl leading-tight">
                Open to graduate &amp; placement software engineering roles.
              </p>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                The fastest way to reach me is by email. I aim to reply within a couple of days.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={`mailto:${EMAIL}`}>
                    <Mail className="mr-2 h-4 w-4" /> {EMAIL}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container-prose py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {NAME}. Built with React &amp; Tailwind.</p>
          <p className="font-mono text-xs">London · United Kingdom</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
