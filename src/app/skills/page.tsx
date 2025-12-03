import Link from 'next/link';
import { project } from '@/app/source';
import TextReveal from '@/components/motion/text-reveal';
import Line from '@/components/motion/line';
import React from 'react';

import { createMetadata } from '@/lib/metadata';
import ProjectCard from '@/app/projects/_components/project-card';

import { metadata as meta } from '@/app/config';
import type { CollectionPage, WithContext } from 'schema-dts';
import { dataBrand } from '@/components/sections/skills/config';
import TestimonialCard from '@/components/sections/skills/cozy/testimonial-card';

const title = 'Professional Projects';
const description = 'Here are some professional projects I have worked on.';

export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    url: '/projects',
    title,
    description
  },
  twitter: {
    title,
    description
  }
});

const jsonLd: WithContext<CollectionPage> = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: title,
  description,
  url: `${meta.site.url}/projects`
};

export default function ProjectsPage(): React.ReactElement {
  
  return (
    <main className="my-14 flex-1 md:px-16 container mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          <h1 className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            <TextReveal delay={0.2}>Skills</TextReveal>
          </h1>
          <Line className={'mt-16'} />
        </div>
      </section>
      <section className="grid w-full grid-cols-2 gap-4 p-4 md:grid-cols-2 2xl:grid-cols-4">
        {dataBrand.map((testimonial, index) => (
            <div className="h-full p-1">
            <TestimonialCard
              name={testimonial.label}
              image={testimonial.image}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
