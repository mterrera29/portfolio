export default function InfoCard() {
  return (
    <div className='container px-3 py-2 pb-4 space-y-6 flex flex-col justify-center items-center'>
      <div className=' bg-black/15 border border-white/10 rounded-xl py-4 px-4 relative sm:w-[440px] w-[100%] sm:h-[250px]  '>
        <div className='flex flex-row justify-center items-center border-b border-white/10'>
          <p className=' font-bold text-2xl bg-gradient-to-t from-orange-400 to-orange-600 bg-clip-text text-transparent'>
            Estudios
          </p>
        </div>
        <div className=' text-1xl text-transparent bg-clip-text bg-text-gradient text-center mb-2 mt-2'>
          <p className=' font-bold'>Universidad Nacional de Entre Rios</p>
          <p>Técnico Universitario en Desarrollo Web (en curso) - 2025</p>
        </div>
        <div className=' text-1xl text-transparent bg-clip-text bg-text-gradient text-center'>
          <p className=' font-bold'>Universidad Fasta</p>
          <p>Diplomado en Alfabetización Digital - 2017</p>
        </div>
      </div>
    </div>
  );
}
