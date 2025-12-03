'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CodeIcon } from 'lucide-react';
import styles from './style.module.scss';
import { opacity, background } from './anim';
import Nav from './nav';

import { metadata as meta } from '@/app/config';
import ModeToggle from '@/components/mode-toggle';

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {

  const [isActive, setIsActive] = useState<boolean>(false);

  return (

    <motion.header
      className={styles.header}
      initial={{
        y: -80
      }}
      animate={{
        y: 0
      }}
      transition={{
        delay: loader ? 0.5 : 0,
        duration: 0.2
      }}
    >
      <div className='container max-w-screen-xl mx-auto'>
        <div className={styles.bar}>
          <Link href="/" className="flex items-center justify-center">
            <span className="text-md font-semibold transition-transform hover:translate-x-1 hover:translate-y-1 uppercase">
              {meta.author.name}
            </span>
          </Link>
          <div onClick={() => setIsActive(!isActive)} className={styles.el}>
            <div className={styles.label}>
              <motion.p
                variants={opacity}
                animate={!isActive ? 'open' : 'closed'}
              >
                Menu
              </motion.p>
              <motion.p variants={opacity} animate={isActive ? 'open' : 'closed'}>
                Close
              </motion.p>
            </div>
            <div
              className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
            >
            </div>
          </div>
        </div>
        <motion.div
          variants={background}
          initial="initial"
          animate={isActive ? 'open' : 'closed'}
          className={styles.background}
        ></motion.div>
        <AnimatePresence mode="wait">
          {isActive && <Nav setIsActive={setIsActive} />}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
