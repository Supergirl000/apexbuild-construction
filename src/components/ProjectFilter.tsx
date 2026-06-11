"use client";

import { useMemo, useState } from "react";
import { projects, projectCategories } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectFilter() {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => active === "All" ? projects : projects.filter((project) => project.category === active), [active]);
  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {projectCategories.map((category) => <button key={category} onClick={() => setActive(category)} className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${active === category ? "bg-[var(--color-primary)] text-white" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-[var(--color-primary)]"}`}>{category}</button>)}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{visible.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
    </div>
  );
}
