"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { useDictionary, useLang } from "@/context/lang-context";
import { skillGroups } from "@/data/skills";

/**
 * Sección "Habilidades": tarjetas por área.
 * `group.category[lang]` usa el tipo LocalizedText con acceso dinámico seguro.
 */
export function Skills() {
  const t = useDictionary();
  const { lang } = useLang();

  return (
    <Section id="habilidades">
      <SectionHeading
        align="center"
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        description={t.skills.description}
      />

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <li key={group.category.en}>
            <Card className="flex h-full flex-col gap-4">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                {group.category[lang]}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}