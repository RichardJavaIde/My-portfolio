"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { useDictionary } from "@/context/lang-context";
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";

/**
 * Sección "Proyectos".
 * El texto viene del diccionario (t.projects.items[id]); la estructura
 * (stack, links, featured) viene de data/projects.ts.
 */
export function Projects() {
  const t = useDictionary();

  return (
    <Section id="proyectos" className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeading
        align="center"
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.description}
      />

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const item = t.projects.items[project.id];
          return (
            <li
              key={project.id}
              className={cn(project.featured && "md:col-span-2")}
            >
              <Card hover className="flex h-full flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  {project.featured && (
                    <Tag className="bg-cyan-600/10 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                      {t.projects.featuredBadge}
                    </Tag>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <Tag>{tech}</Tag>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <Button href={project.links.repo} external variant="outline" size="sm">
                    {t.projects.repoButton}
                  </Button>
                  {project.links.live && (
                    <Button href={project.links.live} external size="sm">
                      {t.projects.liveButton}
                    </Button>
                  )}
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}