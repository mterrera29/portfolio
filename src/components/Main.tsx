import MainButtons from './MainButtons';
import TechIcons from './TechIcons';
import AboutMe from './AboutMe';
import Hello from './Hello';
import Header from './Header';
import InfoCard from './InfoCard';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Main() {
  const [pages, setPages] = useState(1);

  const handlePages = (page: number) => {
    setPages(page);
  };

  return (
    <div className='container max-w-120 px-3 py-4 pb-4 space-y-2'>
      <Header handlePages={handlePages} />
      <Hello />

      <AnimatePresence mode='wait'>
        {pages === 1 ? (
          <motion.div
            key='about'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <AboutMe />
            <TechIcons />
            <MainButtons />
          </motion.div>
        ) : (
          <motion.div
            key='info'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <InfoCard />
            <TechIcons />
            <MainButtons />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
