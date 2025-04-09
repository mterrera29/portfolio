import InfoCard from './components/InfoCard';
import Main from './components/Main';

function App() {
  return (
    <main className=' min-h-screen flex flex-col justify-center'>
      <section className=' container flex flex-col md:flex-row sm:m-20 items-center 2xl:justify-center'>
        <Main />
        <InfoCard />
      </section>
    </main>
  );
}

export default App;
