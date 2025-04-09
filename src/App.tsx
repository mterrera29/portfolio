import InfoCard from './components/InfoCard';
import Main from './components/Main';

function App() {
  return (
    <main className=' min-h-screen flex flex-col justify-center'>
      <section className=' container flex flex-col items-center 2xl:justify-center mt-12'>
        <Main />
        <InfoCard />
      </section>
    </main>
  );
}

export default App;
