import { ArrowUpRight } from "lucide-react";

const featured = [
    {
    title: "Portfolio",
    subtitle: "React • Tailwindcss • Vercel",
    description:
      "Developed and designed my personal portfolio using React and Tailwind CSS, and deployed it on Vercel for fast and reliable hosting.l",
    href: "https://github.com/Datawith-Ramakrishna/Ramakrishna-Portfolio", 
  },
  {
    title: "Task Management System",
    subtitle: "ASP.NET Core Web API • Entity Framework • SQL Server",
    description:
      "Built REST APIs for tasks and users with CRUD operations, clean API structure, and database integration.",
    href: "https://github.com/Datawith-Ramakrishna/Student-Task-Management-System", 
  },
  {
    title: "Music Parameter Visualization",
    subtitle: "D3.js • Interactive Data Visualization",
    description:
      "Interactive web visualization of music parameters like tempo and danceability using D3.js.",
    href: "https://github.com/Datawith-Ramakrishna/Music_Parameter_Visualization", 
  },

];

export default function FeaturedProjects() {
  return (
    <section className="mt-10">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <p className="mt-2 text-sm text-white/60">
            My top work — the projects I’m most proud of.
          </p>
        </div>
        
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {featured.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition"
          >
            <div className="text-lg font-semibold">{p.title}</div>
            <div className="mt-1 text-xs text-white/60">{p.subtitle}</div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              {p.description}
            </p>

            <a
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
              href={p.href}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}