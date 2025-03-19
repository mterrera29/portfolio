import Main from './components/Main';

function App() {
  return (
    <main className=' min-h-screen'>
      <section className=' container flex flex-col md:flex-row  sm:m-20 items-center 2xl:justify-center'>
        <Main />
        <div className='container px-3 py-2 pb-4 space-y-6 flex flex-col justify-center items-start'>
          <div className=' bg-black/15 border border-white/10 rounded-xl py-4 px-4 relative sm:w-[440px] w-[100%] sm:h-[250px]  '>
            <div className='flex flex-row justify-center items-center'>
              <p className=' text-2xl  text-transparent bg-clip-text bg-text-gradient text-center'>
                Estudios
              </p>
            </div>
            <p className=' text-1xl text-transparent bg-clip-text bg-text-gradient text-center'>
              Técnico Universitario en Desarrollo Web (en curso) 2025-2026 -
              UNER
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
