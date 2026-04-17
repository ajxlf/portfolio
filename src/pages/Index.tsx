import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, FileDown, Moon, Sun, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Smart Campus JAX-RS API",
    problem: "A RESTful API for managing smart campus data such as rooms, sensors, and sensor readings.",
    stack: ["Java", "JAX-RS", "Maven", "REST API"],
    features: [
      "Implemented resources for rooms, sensors, and sensor readings",
      "Designed API endpoints for creating, retrieving, and managing linked campus data",
      "Documented and tested endpoints with curl examples and project README guidance",
    ],
    github: "https://github.com/ajxlf/smart-campus-jaxrs-api",
    demo: "",
  },
  {
    name: "Sky Registry",
    problem: "A web application for browsing and searching structured organisational or registry-style data.",
    stack: ["Python", "Django", "HTML", "CSS", "SQLite"],
    features: [
      "Built data models with relationships and ordering",
      "Implemented list and detail views with search and filtering",
      "Added admin configuration and test coverage for core views and models",
    ],
    github: "https://github.com/ajxlf/sky-registry",
    demo: "",
  },
  {
    name: "Meal Prepper",
    problem: "An Android app for storing and searching meal data using both a web API data source and a local Room database.",
    stack: ["Kotlin", "Jetpack Compose", "Room", "SQLite", "Android"],
    features: [
      "Created multiple app screens for adding, searching, and viewing meals",
      "Stored hardcoded meal data in a local Room database",
      "Connected UI state and database queries in a coursework-focused mobile app workflow",
    ],
    github: "https://github.com/ajxlf/Meal-Prepper",
    demo: "",
  },
];

const skills = [
  { group: "Languages", items: ["Java", "JavaScript", "Kotlin", "Python", "SQL"] },
  { group: "Web / Front End", items: ["HTML", "CSS", "JavaScript", "React"] },
  { group: "Back End / APIs", items: ["JAX-RS", "REST APIs", "Django"] },
  { group: "Databases", items: ["SQLite", "Room"] },
  { group: "Tools", items: ["Git", "GitHub", "Android Studio", "SQLiteStudio", "Trello"] },
];

const NAME = "Andre Lawson-Ferreira";
const EMAIL = "aj.ferreira@hotmail.co.uk";
const GITHUB = "https://github.com/ajxlf";
const LINKEDIN = "https://www.linkedin.com/in/andrelawferreira";
const CV_URL = "public/cv.pdf";

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
              I&apos;m a Computer Science student building small, useful software projects while
              I learn. I enjoy figuring out how things work, writing clear code, and shipping
              something I can show people. This page collects what I&apos;ve made so far and
              where to find more.
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
              <MapPin className="h-3.5 w-3.5" /> Mitcham, England
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
                I&apos;m focused on getting solid at the fundamentals — data structures, web
                development, databases — and applying them by building things end-to-end. I&apos;m
                most interested in software engineering roles where I can keep learning from
                stronger engineers and contribute to real projects. Outside of coursework I
                spend time reading documentation, working through side projects, and improving
                the things on this page.
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
          <p className="font-mono text-xs">Mitcham · England</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
