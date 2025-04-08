import Main from './components/Main';

function App() {
  return (
    <main className=' min-h-screen flex justify-center'>
      <section className=' container flex flex-col md:flex-row sm:m-20 items-center 2xl:justify-center'>
        <Main />
        <div className='container px-3 py-2 pb-4 space-y-6 flex flex-col justify-center items-center'>
          <div className=' bg-black/15 border border-white/10 rounded-xl py-4 px-4 relative sm:w-[440px] w-[100%] sm:h-[250px]  '>
            <div className='flex flex-row justify-center items-center'>
              <p className=' text-2xl  text-transparent bg-clip-text bg-text-gradient text-center'>
                Estudios
              </p>
            </div>
            <p className=' text-1xl text-transparent bg-clip-text bg-text-gradient text-center'>
              <p className=' font-bold'>🏛 Universidad Nacional de Entre Rios</p>
              <p>
                🧾 Técnico Universitario en Desarrollo Web (en curso) - 2025
              </p>
            </p>
            <p className=' text-1xl text-transparent bg-clip-text bg-text-gradient text-center'>
              <p className=' font-bold'> 🏛 Universidad Fasta</p>
              <p> 🧾 Diplomado en Alfabetización Digital - 2017</p>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
