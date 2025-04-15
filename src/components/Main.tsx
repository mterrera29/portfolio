import MainButtons from './MainButtons';
import TechIcons from './TechIcons';
import AboutMe from './AboutMe';
import Hello from './Hello';

export default function Main() {
  return (
    <div className=' container max-w-140 px-3 py-4 pb-4 space-y-2 '>
      <Hello />
      <AboutMe />
      <TechIcons />
      <MainButtons />
    </div>
  );
}
