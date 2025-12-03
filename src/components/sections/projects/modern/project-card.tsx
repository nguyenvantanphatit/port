import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/types/project';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import TextReveal from '@/components/motion/text-reveal';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ButtonCustom } from '@/components/ui/MovingBorders';

interface ProjectCardProps extends Project {
  href: string;
  thumbnail: string;
  className?: string;
}

function ProjectCard({
  title,
  description,
  href,
  thumbnail,
  tags,
  className
}: ProjectCardProps) {
  return (
    <ButtonCustom
      duration={10000}
      containerClassName="h-full"
      className="text-start border-neutral-200 dark:border-slate-800"
    >
      <Card
        className={cn(
          'relative flex h-full flex-col justify-between border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900',
          className
        )}
      >
        <CardContent className="p-4 md:p-6">
          <div className="grid gap-2">
            <AspectRatio ratio={16 / 9} className="z-[2] inline-block overflow-hidden rounded-md mb-2">
              <Image
                src={thumbnail || '/placeholder.svg'}
                alt={`Image of ${title}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </AspectRatio>
            <h3 className="text-lg font-bold">
              <TextReveal delay={0.1}>{title}</TextReveal>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <TextReveal delay={0.1}>{description || ''}</TextReveal>
            </p>
            {/* <div className="mt-2 flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <Badge key={`project-tag_${index}`}>{tag.label}</Badge>
              ))}
            </div> */}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-end p-2 md:p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className="z-[2] rounded-full w-16 h-16 border border-zinc-950/10 dark:border-zinc-50/10"
                  asChild
                >
                  <Link href={href} aria-label={`Go to external page ${title}`}>
                    <ArrowUpRight />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More Details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
        <Link href={href} className="z-1 absolute inset-0 block" aria-label={`Go to external page ${title}`} />
      </Card>
    </ButtonCustom>
  );
}

export default ProjectCard;
