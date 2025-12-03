import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube,
  SiFacebook

} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'nguyenvantanphat.it@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/nguyenvantanphatit',
      Icon: SiGithub
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/tanphat05062001',
      Icon: SiFacebook
    },
  ]
};

export { contact };
