import MainButtons from './MainButtons';

import profile from '../assets/profile2.jpg';
import TechIcons from './TechIcons';

export default function Main() {
  return (
    <div className=' container max-w-140 px-3 py-4 pb-4 space-y-2 '>
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
      <div className=' text-transparent bg-clip-text bg-text-gradient flex flex-col'>
        <p className='text-1xl font-bold text-center'>
          Desde el año 2022 asumí el desafio de estudiar programación para
          integrar estas tecnologías en el ámbito educativo, donde cuento con 10
          años de experiencia como docente.
        </p>
        <p className='text-1xl font-bold text-center'>
          Actualmente estoy interesado en formar parte de proyectos en donde
          utilizar mis habilidades como Desarrollador Web.
        </p>
      </div>
      <TechIcons />
      <MainButtons />
    </div>
  );
}
