"use client"
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import TestimonialCard from './testimonial-card';
import Autoplay from 'embla-carousel-auto-scroll';
import { dataBrand } from '@/components/sections/skills/config';
import MotionWrap from '@/components/motion-wrap';
import TextReveal from '@/components/motion/text-reveal';
function Skills() {
  const firstRow = dataBrand.slice(0, dataBrand.length / 2);
  const secondRow = dataBrand.slice(dataBrand.length / 2);
  return (
    <MotionWrap className="w-full md:py-24 py-4" id="skills">
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <section className='flex items-center justify-start gap-2'>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                <TextReveal delay={0.1}>My Skills</TextReveal>
              </h2>
            </section>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Carousel
            opts={{
              align: 'start',
              dragFree: true,
              loop: true
            }}
            plugins={[
              Autoplay({
                speed: 600 / 1000,
                startDelay: 100,
                stopOnInteraction: false,
                stopOnMouseEnter: true
              })
            ]}
            className="w-full"
          >
            <CarouselContent>
              {firstRow.map((testimonial, index) => (
                <CarouselItem
                  key={`testimonial_${index}`}
                  className="md:basis-1/6 lg:basis-1/6 xl:basis-1/6 p-2">
                  <div className="h-full p-1">
                    <TestimonialCard
                      name={testimonial.label}
                      image={testimonial.image}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Carousel
            opts={{
              align: 'start',
              dragFree: true,
              loop: true
            }}
            plugins={[
              Autoplay({
                speed: 600 / 1000,
                direction: 'backward',
                startDelay: 100,
                stopOnInteraction: false,
                stopOnMouseEnter: true
              })
            ]}
            className="w-full"
          >
            <CarouselContent>
              {secondRow.map((testimonial, index) => (
                <CarouselItem
                  key={`testimonial-reverse_${index}`}
                  className="md:basis-1/6 lg:basis-1/6 xl:basis-1/6 p-1">
                  <div className="h-full p-1">
                    <TestimonialCard
                      name={testimonial.label}
                      image={testimonial.image}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
