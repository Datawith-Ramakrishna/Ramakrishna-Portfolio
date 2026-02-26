import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  BadgeCheck,
  MapPin,
  Sparkles,
} from "lucide-react";

import FeaturedProjects from "./FeaturedProjects";
import { FileText, Download } from "lucide-react";

const LINKS = {
  email: "ramakrishna.parvatareddy@gmail.com",
  github: "https://github.com/Datawith-Ramakrishna",
  linkedin: "https://www.linkedin.com/in/ramakrishnareddy-parvatareddy",
};

const skillCards = [
  {
    title: "Web Development",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "WordPress",
      "PHP",
      "D3.js",
    ],
  },
  {
    title: ".NET Development",
    skills: [
      "C#",
      ".NET / ASP.NET Core",
      "REST APIs",
      "Entity Framework",
      "JWT Authentication",
      "LINQ",
      "HTML",
      "CSS",
      "MSSQL"
    ],
  },
  {
    title: "DevOps",
    skills: [
      "Azure DevOps",
      "Git",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Linux",
      "Python"
    ],
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#070A12] text-white">
      {/* subtle background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-48 -left-40 h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-10">
        {/* top nav */}
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Sparkles className="h-5 w-5 text-white/80" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Ramakrishna Reddy</div>
              <div className="text-xs text-white/60">Web Developer • .NET / React</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
              href={`mailto:${LINKS.email}`}
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>

        {/* hero */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <Pill>
                  <BadgeCheck className="mr-2 h-3.5 w-3.5" />
                  Available immediately
                </Pill>
                <Pill>
                  <MapPin className="mr-2 h-3.5 w-3.5" />
                  Open to relocate (Gießen)
                </Pill>
                <Pill>M.Sc. Computer Science (Bauhaus-Universität Weimar)</Pill>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                I build reliable{" "}
                <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
                  web projects
                </span>{" "}
                with .NET and React.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
                Master’s student in Germany with 2 years of professional experience in backend
                development (C#/.NET) and modern web UIs. I enjoy building clean APIs, fixing bugs,
                improving performance, and shipping features that matter.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
                >
                  View Projects <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href={`mailto:${LINKS.email}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <Card className="p-6">
              <div className="text-sm text-white/60">Focus</div>
              <div className="mt-2 text-lg font-semibold">Full Stack Development</div>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                <div className="flex items-start justify-between gap-3">
                  <span>Backend</span>
                  <span className="text-white/90">C# • .NET • REST • JWT</span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span>Frontend</span>
                  <span className="text-white/90">React • JS • HTML • CSS</span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span>Databases</span>
                  <span className="text-white/90">SQL Server • MySQL</span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span>Workflow</span>
                  <span className="text-white/90">Git • Docker • Agile</span>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>

        {/* sections */}
        <div className="mt-16 space-y-6">
          <Card className="p-7">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              I’m comfortable working across the full stack — designing REST APIs, managing databases, building responsive UI components, and collaborating within Agile teams. I focus on writing clean, maintainable code, debugging efficiently, and delivering polished, production-ready solutions.
            </p>
          </Card>

          <Card className="p-7">
            <h2 className="text-lg font-semibold">Skills</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {skillCards.map((card) => (
                <div
                    key={card.title}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
                  >
                  <h3 className="text-sm font-semibold text-white/90">
                    {card.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.skills.map((skill) => (
                      <Pill key={skill}>{skill}</Pill>
                    ))}
                  </div>
                </div>
                ))}
              </div>
          </Card>
        </div>

        {/* projects (Featured + Auto GitHub) */}
        <section id="projects" className="mt-16">
         
          <FeaturedProjects />
           <div className="mt-8 flex justify-center">
          <a 
            href="https://github.com/Datawith-Ramakrishna"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10"
            >
            View all projects on GitHub 
            <ArrowUpRight className="h-4 w-4" />
          </a>
          </div>
        </section>
        {/* Resume Section */}
<div className="mt-10 flex flex-col items-center gap-4">

  <div className="text-sm text-white/60">
    Download my resume
  </div>

  <div className="flex flex-wrap gap-3">

    {/* English Resume */}
    <a
      href="/Ramakrishna_Resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
    >
      <Download className="h-4 w-4" />
      Resume (English)
      
    </a>

    {/* German Resume */}
    <a
      href="/Ramakrishna_Resume_DE.pdf"
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10 transition"
    >
      <Download className="h-4 w-4" />
      Lebenslauf (Deutsch)
    </a>

  </div>
</div>

        {/* CTA */}
        <section className="mt-16">
          <Card className="p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold">Let’s build something great.</h2>
                <p className="mt-2 text-sm text-white/70">
                  I’m available immediately and happy to relocate for the right opportunity.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${LINKS.email}`}
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
                >
                  Email Me <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Card>
        </section>

        {/* footer */}
        <footer className="mt-12 pb-6 text-sm text-white/50">
          © {new Date().getFullYear()} Ramakrishna Reddy •{" "}
          <a
            className="underline underline-offset-4 hover:text-white"
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          •{" "}
          <a
            className="underline underline-offset-4 hover:text-white"
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </footer>
      </div>
    </div>
  );
}