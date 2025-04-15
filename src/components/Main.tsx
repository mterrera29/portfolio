import MainButtons from './MainButtons';
import TechIcons from './TechIcons';
import AboutMe from './AboutMe';
import Hello from './Hello';
import Header from './Header';
import { useState } from 'react';
import InfoCard from './InfoCard';

export default function Main() {
  const [pages, setPages] = useState(1);

  const handlePages = (page) => {
    setPages(page);
  };
  return (
    <div className=' container max-w-140 px-3 py-4 pb-4 space-y-2 '>
      <Header handlePages={handlePages} />
      <Hello />
      {pages === 1 ? <AboutMe /> : <InfoCard />}
      <TechIcons />
      <MainButtons />
    </div>
  );
}
