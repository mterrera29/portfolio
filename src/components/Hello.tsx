import profile from '../assets/profile2.jpg';

export default function Hello() {
  return (
    <div className=' flex flex-col justify-center items-center'>
      <div className='flex flex-row  items-center mb-2'>
        <div className='mr-3'>
          <img className=' rounded-full w-20 h-20' src={profile} alt='' />
        </div>
        <div>
          <div className='font-bold text-4xl flex flex-row '>
            <p className='text-transparent bg-clip-text bg-text-gradient  '>
              Hola!
            </p>
            <span className=' bg-blend-color'>👋</span>
          </div>
          <p className='text-transparent bg-clip-text bg-text-gradient  '></p>
          <p className=' text-2xl font-bold text-transparent bg-clip-text bg-text-gradient md:text-3xl'>
            {' '}
            soy{' '}
            <span className='bg-gradient-to-t from-orange-400 to-orange-600 bg-clip-text text-transparent'>
              Matías Terrera
            </span>
          </p>
        </div>
      </div>
      <p className=' text-transparent bg-clip-text bg-text-gradient flex flex-col text-2xl font-bold mb-2 text-center '>
        Desarrollador Web y Docente
      </p>
    </div>
  );
}
