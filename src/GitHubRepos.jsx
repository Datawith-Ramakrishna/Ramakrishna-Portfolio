import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const USERNAME = "Datawith-Ramakrishna";

export default function GitHubRepos({ limit = 7 }) {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ok | error

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setStatus("loading");
        const res = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

        const data = await res.json();

        // filter out forks, sort by recently updated
        const cleaned = data
          .filter((r) => !r.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        setRepos(cleaned);
        setStatus("ok");
      } catch (e) {
        if (e.name !== "AbortError") setStatus("error");
      }
    }

    load();
    return () => controller.abort();
  }, []);

  const list = useMemo(() => repos.slice(0, limit), [repos, limit]);

  return (
    <section className="mt-14">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold">More Projects</h2>
          <p className="mt-2 text-sm text-white/60">
            Auto-fetched from GitHub (always up to date).
          </p>
        </div>

        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-white/70 hover:text-white"
        >
          View all on GitHub <ArrowUpRight className="inline h-4 w-4" />
        </a>
      </div>

      {status === "loading" && (
        <div className="mt-6 text-sm text-white/60">Loading repositories…</div>
      )}

      {status === "error" && (
        <div className="mt-6 text-sm text-red-200">
          Could not load GitHub repos (rate limit or network). Try again later.
        </div>
      )}

      {status === "ok" && (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {list.map((r) => (
            <div
              key={r.id}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold">{r.name}</div>
                  <div className="mt-1 text-xs text-white/60">
                    Updated: {new Date(r.updated_at).toLocaleDateString()}
                  </div>
                </div>
                <a
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/70 hover:text-white"
                >
                  GitHub <ArrowUpRight className="inline h-4 w-4" />
                </a>
              </div>

              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                {r.description || "No description provided yet."}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {r.language && (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {r.language}
                  </span>
                )}
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  ⭐ {r.stargazers_count}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  🍴 {r.forks_count}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}