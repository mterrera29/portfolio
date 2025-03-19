import MainButtons from './MainButtons';
import {
  JavaScript,
  TypeScript,
  React,
  TailwindCSS,
  NodeJs,
  MongoDB,
} from 'developer-icons';

import profile from '../assets/terre.jpg';

export default function Main() {
  return (
    <div className=' container max-w-xl px-3 py-4 pb-4 space-y-2 '>
      <div>
        <div className='flex flex-row  items-center mb-2'>
          <div className='mr-3'>
            <img className=' rounded-full w-25 h-25' src={profile} alt='' />
          </div>
          <div>
            <div className='font-bold text-5xl flex flex-row '>
              <p className='text-transparent bg-clip-text bg-text-gradient  '>
                Hola!
              </p>
              <span className=' bg-blend-color'>👋</span>
            </div>
            <p className='text-transparent bg-clip-text bg-text-gradient  '></p>
            <p className=' text-3xl font-bold text-transparent bg-clip-text bg-text-gradient'>
              {' '}
              soy Matías Terrera
            </p>
          </div>
        </div>
        <div className=' text-transparent bg-clip-text bg-text-gradient flex flex-col'>
          <p className='text-1xl font-bold'>
            <span className=' text-2xl font-bold '>
              Desarrollador Web y Docente,{' '}
            </span>
            interesado en formar parte de proyectos donde utilizar mis
            conocimientos.
          </p>
        </div>
      </div>

      <div className=' flex flex-row items-center justify-between my-4'>
        <JavaScript size={30} />
        <TypeScript size={30} style={{ marginLeft: 20 }} />
        <React size={40} style={{ marginLeft: 20 }} />
        <TailwindCSS size={40} style={{ marginLeft: 20 }} />
        <NodeJs size={40} style={{ marginLeft: 20 }} />
        <MongoDB size={40} style={{ marginLeft: 20 }} />
      </div>
      <MainButtons />
    </div>
  );
}
