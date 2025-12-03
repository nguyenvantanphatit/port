'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';
import { Teko } from 'next/font/google';
import { cn } from '@/lib/utils';
import { PieChart, Pie, Cell } from 'recharts';
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { Card, CardContent } from "@/components/ui/card";

interface PreloaderProps {
  progress: number;
}

const teko = Teko({ weight: '400', subsets: ['latin'] });

export function Preloader({ progress }: PreloaderProps) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
    }
  };

  const chartData = [
    { name: 'Progress1', value: Math.min(progress, 33) },
    { name: 'Progress2', value: Math.min(Math.max(progress - 33, 0), 33) },
    { name: 'Progress3', value: Math.min(Math.max(progress - 66, 0), 34) },
    { name: 'Remaining', value: Math.max(100 - progress, 0) }
  ];

  const COLORS = ['#FF0000', '#FFA500', '#FFFF00', 'hsl(var(--muted))'];

  const chartConfig: ChartConfig = {
    Progress1: { color: '#FF0000' },
    Progress2: { color: '#FFA500' },
    Progress3: { color: '#FFFF00' },
    Remaining: { color: 'hsl(var(--muted))' },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed z-30 flex h-[100dvh] w-[100dvw] cursor-wait items-center justify-center bg-background px-[60px] pb-[40px]"
    >
      {dimension.width > 0 && (
        <>
          <Card className="absolute z-[1] bg-transparent shadow-none border-none">
            <CardContent className="p-0">
              <ChartContainer className="h-[300px] w-[300px]" config={chartConfig}>
                <PieChart width={300} height={300}>
                  <Pie
                    data={chartData}
                    cx={150}
                    cy={150}
                    innerRadius={100}
                    outerRadius={120}
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className={cn(
              teko.className,
              'absolute z-[2] flex items-center text-[72px]',
              progress === 100 ? 'text-red-500' : 'text-foreground'
            )}
          >
            {Math.round(progress)}%
          </motion.p>
          <svg className="absolute top-0 h-[calc(100%+300px)] w-full">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className={'fill-background'}
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}