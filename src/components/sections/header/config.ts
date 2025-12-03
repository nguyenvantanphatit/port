import { Link } from '@/types/link';

const linkLimit = 4;
//

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    thumbnail: 'home.jpg'
  },
  {
    title: 'Skills',
    href: '/skills',
    thumbnail: 'projects.jpg'
  },
  {
    title: 'Professional Projects',
    href: '/projects',
    thumbnail: 'projects.jpg'
  },
  // {
  //   title: 'About',
  //   href: '/about',
  //   thumbnail: 'about.jpg'
  // },
  
  // {
  //   title: 'Blog',
  //   href: '/blog',
  //   thumbnail: 'blog.jpg'
  // }
];

export { linkLimit, links };
