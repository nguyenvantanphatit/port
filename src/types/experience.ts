import React from 'react';

export interface Experience {
  company: string;
  logo: string;
  period: string;
  role: string;
  color: string;
  accent: string;
  bg: string;
  iconColor: string;
  icon: React.ElementType;
  description: {
    id: number;
    title: string;
    desc?: string[];
  }[];
  technologies: string[];
}
