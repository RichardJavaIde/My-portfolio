"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useDictionary } from "@/context/lang-context";
import { profile } from "@/data/profile";

/**
 * Sección "Contacto".
 * En v1 no hay formulario (un form real necesita estado o backend):
 * usamos mailto:, que es lo más simple y educativo.
 */
export function Contact() {
  const t = useDictionary();

  return (
    <Section id="contacto">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <SectionHeading
          align="center"
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${profile.email}`}>
            {t.contact.emailButton}
          </Button>
          <Button href={profile.github} external variant="outline">
            {t.contact.githubButton}
          </Button>
        </div>
      </div>
    </Section>
  );
}