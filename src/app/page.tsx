import {
  Header,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
} from '@/components/sections';

import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';
import { metadata as meta } from '@/app/config';
import { createMetadata } from '@/lib/metadata';
import BannerComponent from '@/components/banner/banner';
import { Globe } from '@/components/magicui/globe';
import { RetroGrid } from '@/components/magicui/retro-grid';
export const metadata = createMetadata({
  title: {
    absolute: meta.site.title,
    template: `%s | ${meta.site.title}`
  },
  description: meta.site.description,
  twitter: {
    title: meta.site.title,
    description: meta.site.description
  }
});
export default function Home() {
  return (
    <SmoothScroll>
      <Header loader={true} />
      <div className="flex min-h-[100dvh] flex-col container max-w-screen-xl mx-auto">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
            <Globe />
          </span>
          <RetroGrid />
        </div>
      </div>
      <BannerComponent />
      <Cursor />
    </SmoothScroll>
  );
}