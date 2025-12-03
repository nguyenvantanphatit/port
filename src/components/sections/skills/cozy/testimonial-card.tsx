import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import { Testimonial } from '@/types/testimonial';
import { ButtonCustom } from '@/components/ui/MovingBorders';

interface TestimonialCardProps extends Testimonial {
  className?: string;
}

function TestimonialCard({
  image,
  name,
  className
}: TestimonialCardProps) {
  return (
    <ButtonCustom
      duration={10000}
      className="text-start border-neutral-200 dark:border-slate-800"
    >
      <Card className={cn('h-full w-full rounded-xl', 'bg-muted/40 hover:bg-muted', className)}>
        <div className="flex items-center p-4 gap-3">
          <div className="h-12 w-12 xl:h-16 xl:w-16 overflow-hidden rounded-md border border-border p-1">
            <Image
              src={image || '/placeholder.svg'}
              alt={name || 'Anonymous'}
              className="aspect-square object-scale-down rounded-lg"
              height={80}
              width={80}
            />
          </div>
          <div>
            <p className="font-semibold xl:text-lg">{name || 'Anonymous'}</p>
          </div>
        </div>
      </Card>
    </ButtonCustom>
  );
}

export default TestimonialCard;
