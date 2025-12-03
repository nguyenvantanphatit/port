'use client';
import React from 'react';
import { useRef } from 'react';
import Image from 'next/image';
function Hero() {
  const container = useRef<HTMLDivElement>(null);
  return (
    <section
      className="relative w-full overflow-hidden"
      ref={container}
    >
      <div className="relative z-10 h-[62.5dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
        </div>
      </div>
    </section>
  );
}

export default Hero;
