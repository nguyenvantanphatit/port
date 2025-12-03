import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import ProjectCard from './project-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { project } from '@/app/source';
import TextReveal from '@/components/motion/text-reveal';
function Projects() {
  const projects = [...project.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <MotionWrap className="w-full md:pb-24 py-4" id="projects">
      <div className="px-4 md:px-6">
        <div className="grid gap-10">
          <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
              <TextReveal delay={0.1}>Professional Projects</TextReveal>
            </h2>
          </div>
          <div className="flex items-center justify-center overflow-hidden lg:px-12">
            <Carousel
              opts={{
                align: 'start'
              }}
              className="w-full"
            >
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem
                    key={`project_${index}`}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                      <div className="h-full">
                        <ProjectCard
                          title={project.data.title}
                          href={project.url}
                          description={project.data.description}
                          tags={project.data.tags}
                          thumbnail={`/images/projects/${project.slugs[0]}/cover.jpg`}
                        />
                      </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              <section className='block md:hidden mt-12'>
                <div className=" absolute inset-0 flex items-center gap-2 justify-end pointer-events-none">
                  <CarouselPrevious className="relative left-0 md:left-4 pointer-events-auto" />
                  <CarouselNext className="relative right-0 md:right-4 pointer-events-auto" />
                </div>
              </section>
            </Carousel>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
