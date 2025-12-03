'use client';
import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import ContactForm from './contact-form';
import TextReveal from '@/components/motion/text-reveal';
import AnimationPage from '../../about/cozy/animation';
import { FacebookIcon, GithubIcon, YoutubeIcon } from 'lucide-react';
import Image from 'next/image';
function Contact() {
  return (
    <MotionWrap className="w-full" id="contact">
      <div className="px-4 md:px-6">
        <div className="py-3">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            <TextReveal delay={0.1}>Contact Me</TextReveal>
          </h2>
          <p className="max-w-[600px] text-muted-foreground">
            <TextReveal delay={0.1}>
            Have a question or want to collaborate? Feel free to send me a message using the form below
            </TextReveal>
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full gap-4 py-4 lg:w-2/4">
            <AnimationPage />
          </div>
          <div className="flex w-full flex-col gap-4 py-3 lg:w-2/4">
            <ContactForm />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Contact;
