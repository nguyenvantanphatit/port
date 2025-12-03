import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import { experiences } from '@/components/sections/experience/config';
import { Card } from '@/components/ui/card';
import TextReveal from '@/components/motion/text-reveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { ButtonCustom } from '@/components/ui/MovingBorders';
function Experiences() {
  return (
    <>
      <MotionWrap className="w-full md:pb-24 py-4" id="experiences">
        <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
          <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
              <TextReveal delay={0.1}>Work Experience</TextReveal>
            </h2>
          </div>
          <section className='hidden md:block'>
            <div className="relative flex flex-col gap-16">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {index < experiences.length - 1 && (
                    <div className="absolute left-[105px] top-[210px] w-2 h-full flex flex-col items-center justify-between">
                      <div className="w-3 h-3 rounded-full bg-white border-2 border-current" style={{ borderColor: `var(--${exp.color})` }} />
                      <div className="border-l-2 border-dashed flex-1" style={{ borderColor: `var(--${exp.color})` }} />
                      <div className="w-3 h-3 rounded-full bg-white border-2 border-current" style={{ borderColor: `var(--${experiences[index + 1].color})` }} />
                    </div>
                  )}
                  <div className="relative flex-shrink-0">
                    <ButtonCustom
                      key={index}
                      duration={10000}
                      borderRadius="100%"
                      className="text-start border-neutral-200 dark:border-slate-800"
                    >
                      <div className="relative w-[210px] h-[210px]">
                        <div className={`absolute inset-0 rounded-full border-2 ${exp.color}`}>
                          {[...Array(18)].map((_, i) => (
                            <div
                              key={i}
                              className={`absolute w-1.5 h-1.5 rounded-full ${exp.bg}`}
                              style={{
                                left: '48%',
                                top: '48%',
                                transform: `rotate(${i * 20}deg) translate(105px, -50%)`
                              }}
                            />
                          ))}
                        </div>
                        <svg
                          className="absolute inset-0"
                          viewBox="0 0 210 210"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M40 105C40 69.1015 69.1015 40 105 40C140.899 40 170 69.1015 170 105"
                            className={`${exp.accent}`}
                            strokeWidth="2"
                          />
                        </svg>
                        <div className={`absolute inset-4 rounded-full ${exp.bg} flex flex-col items-center justify-center p-6 text-center`}>
                          <exp.icon className={`w-8 h-8 mb-2 ${exp.iconColor}`} />
                          <h3 className="font-semibold mb-1 text-black">{exp.company}</h3>
                          <p className="text-xs text-gray-600 leading-tight">{exp.period}</p>
                        </div>
                      </div>
                    </ButtonCustom>
                  </div>
                  <section className='hidden md:block'>
                    <ButtonCustom
                      key={index}
                      duration={10000}
                      className="text-start border-neutral-200 dark:border-slate-800"
                    >
                      <Card className="flex-grow p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full border border-border dark:bg-slate-800 flex items-center justify-center dark:text-cyan-400 text-black">
                            {exp.company.slice(0, 1)}
                          </div>
                          <div>
                            <h2 className="text-xl font-semibold">{exp.company}</h2>
                            <p className="text-muted-foreground">{exp.role}</p>
                          </div>
                        </div>
                        {exp.description.map((descItem) => (
                          <div key={descItem.id} className="mb-4">
                            <h4 className="font-semibold">{descItem.title}</h4>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                              {descItem.desc?.map((point, idx) => (
                                <li key={idx} className="pl-2">{point}</li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        <div>
                          <p className="font-semibold mb-2">TECHNOLOGIES:</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </ButtonCustom>
                  </section>
                </div>
              ))}
            </div>
          </section>
          <section className='block md:hidden'>
            <Carousel
              opts={{
                align: 'start'
              }}
              className="w-full"
            >
              <CarouselContent>
                {experiences.map((exp, index) => (
                  <CarouselItem
                    key={`${index}`}
                    className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <>
                      <div className="h-full bg-background">
                        <ButtonCustom
                          key={index}
                          duration={10000}
                          className="text-start h-full"
                        >
                          <Card className="flex-grow p-6 border-none">
                            <div className="flex items-center gap-4 mb-4">
                              <div className={` rounded-full ${exp.bg} flex items-center justify-center w-10 h-10`}>
                                <h3 className="font-semibold mb-1 text-black text-2xl">{exp.company.slice(0, 1)}</h3>
                              </div>
                              <div>
                                <h2 className="text-xl font-semibold">{exp.company}</h2>
                                <p className="text-muted-foreground">{exp.role}</p>
                              </div>
                            </div>
                            {exp.description.map((descItem) => (
                              <div key={descItem.id} className="mb-4">
                                <h4 className="font-semibold">{descItem.title}</h4>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                  {descItem.desc?.map((point, idx) => (
                                    <li key={idx} className="pl-2">{point}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}


                            <div>
                              <p className="font-semibold mb-2">TECHNOLOGIES:</p>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </Card>
                        </ButtonCustom>
                      </div>
                    </>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <section className='block md:hidden'>
                <div className="absolute -bottom-12 inset-0 flex items-center gap-2 justify-end pointer-events-none">
                  <CarouselPrevious className="relative left-0 md:left-4 pointer-events-auto" />
                  <CarouselNext className="relative right-0 md:right-4 pointer-events-auto" />
                </div>
              </section>
            </Carousel>
          </section>
        </div>
      </MotionWrap>
    </>
  );
}

export default Experiences;
