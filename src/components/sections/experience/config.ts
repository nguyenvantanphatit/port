import { Experience } from '@/types/experience';
import { Target, Users } from 'lucide-react';
const experiences: Experience[] = [
  {
    company: "Echo Medi",
    logo: "/placeholder.svg?height=40&width=40",
    period: "02/2024 - Present",
    role: "Software Engineer",
    color: "border-red-400",
    accent: "stroke-red-400",
    bg: "bg-red-50",
    iconColor: "text-red-500",
    icon: Users,
    description: [
      {
        id: 1,
        title: "Socal RISE",
        desc: [
          "Developed a disaster recovery information aggregation platform, providing timely support services for users.",
          "Engineered a highly interactive and scalable platform using Next.js, Tailwind CSS, ShadCN, and Strapi, ensuring a seamless user experience, efficient content management, and robust API integrations."
        ]
      },
      {
        id: 2,
        title: "Echo Medi",
        desc: [
          "Implemented Next.js and Tailwind CSS to develop an efficient and responsive UI, enhancing the user experience for scheduling appointments, viewing test results, and purchasing products online.",
          'Strengthened authentication with FPT SMS Brandname OTP, improving security and reliability.',
          "Utilized FPT SMS Brandname to send OTPs for user authentication, improving both security and user experience.",
        ]
      },
      {
        id: 3,
        title: "His Dashboard Website, Internal Website and Blog Health Care Website"
      },
    ],
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'Shadcn',
      'Strapi',
      'Momo',
      'FPT SMS'
    ]
  },
  {
    company: "Viet Japan Digital",
    logo: "/placeholder.svg?height=40&width=40",
    period: "04/2023 - 1/2024",
    role: "Software Engineer",
    color: "border-teal-400",
    accent: "stroke-teal-400",
    bg: "bg-teal-50",
    iconColor: "text-teal-500",
    icon: Target,
    description: [
      {
        id: 1,
        title: "Luna",
        desc: [
          'Designed and implemented a versatile and adaptable React.js frontend with Ant Design, optimizing client, product, and financial management. Developed a robust and scalable Node.js backend, leveraging MySQL for efficient data storage and processing.',
          'Integrated Socket.io for real-time updates on quotations, production tracking, purchase order completion, and chat functionality to facilitate seamless communication between team members.',
        ]
      },
      {
        id: 2,
        title: "LABO",
        desc: [
          'Integrated ZaloPay to enable seamless and secure gift code redemption, enhancing transaction reliability.',
          'Utilized Angular to fix layout issues, implement dynamic UI features, and manage lottery functionalities, improving user experience and performance.',
        ]
      },
      {
        id: 3,
        title: "VJP Connect",
        desc: [
          'Developed a multilingual business networking platform connecting Vietnamese and Japanese professionals using i18n.',
          'Built the frontend with React.js and Ant Design, the backend with Node.js, and a scalable MySQL database.'
        ]
      },
      
    ],
    technologies: [
      'React.Js',
      'TypeScript',
      'Ant Design',
      'Angular',
      'ZaloPay',
      'Node.Js',
      'MySQL',
      "Socket.io",
      "Redix",
    ]
  }
]

export { experiences };