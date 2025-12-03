import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import { Button } from '@/components/ui/button';
import { ArrowUpRightIcon } from 'lucide-react';
import TextReveal from '@/components/motion/text-reveal';
import MyLargeSVG from '../../LargeSVG';
function About() {
  return (
    <MotionWrap className="w-full md:pt-44 py-12" id="about">
      <div className="px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
            <TextReveal delay={0.1}>About Me</TextReveal>
          </h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed space-y-2 text-justify">
              <TextReveal delay={0.1}>
                <li>Experienced Front-End Developer specializing in React.js and Next.js.</li>
                <li>Skilled in building modern, optimized web applications with clean UI/UX.</li>
                <li>Proficient in Node.js and Strapi for full-stack development needs.</li>
                <li>Worked on real-world projects including landing pages, e-commerce platforms, news websites, dashboards, HIS (Hospital Information System), blogs, quiz applications, and service sales platforms.</li>
              </TextReveal>
            </ul>
            <div className="flex gap-2 items-center">
              <Button asChild variant={'outline'}>
                <a href="https://tanphatdigital.com" target="_blank">
                  View Port <ArrowUpRightIcon className="ml-2 size-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full hidden md:block">
          <MyLargeSVG />
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
