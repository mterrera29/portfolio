import emailIcon from '../assets/mail.svg';
import githubIcon from '../assets/github.svg';
import linkdinIcon from '../assets/linkedin.svg';

export default function MainButtons() {
  return (
    <div className='flex items-center justify-between gap-4'>
      <a
        href=''
        className='inline-flex h-12 animate-background-shine items-center justify-center rounded-lg border border-white/20 bg-[linear-gradient(90deg,#00FF0000,45%,#262627,80%,#00FF0000)] bg-[length:200%_100%] px-6 font-medium text-white/80 hover:shadow-[0_0_20px_#68686b] transition-all duration-400 ease-in-out hover:border-gray-300 hover:opacity-80 '
      >
        Curriculum
      </a>
      <div className='flex items-center justify-center gap-4'>
        <a href=''>
          <button className='inline-flex h-12 animate-background-shine items-center justify-center rounded-lg border border-white/20  w-12 font-medium image-white/80  hover:opacity-80 cursor-pointer hover:shadow-[0_0_20px_#68686b] transition-all duration-400 ease-in-out hover:border-gray-300'>
            <img
              alt='Linkedin Logo'
              loading='lazy'
              width='20'
              height='23'
              decoding='async'
              data-nimg='1'
              style={{ color: 'transparent' }}
              src={emailIcon}
            />
          </button>
        </a>
        <a href=''>
          <button className='inline-flex h-12 animate-background-shine items-center justify-center rounded-lg border border-white/20  w-12 font-medium image-white/80  hover:opacity-80 cursor-pointer hover:shadow-[0_0_20px_#68686b] transition-all duration-400 ease-in-out hover:border-gray-300'>
            <img
              alt='Linkedin Logo'
              loading='lazy'
              width='20'
              height='23'
              decoding='async'
              data-nimg='1'
              style={{ color: 'transparent' }}
              src={linkdinIcon}
            />
          </button>
        </a>
        <a href=''>
          <button className='inline-flex h-12 animate-background-shine items-center justify-center rounded-lg border border-white/20  w-12 font-medium image-white/80 hover:opacity-80 cursor-pointer hover:shadow-[0_0_20px_#68686b] transition-all duration-400 ease-in-out hover:border-gray-300'>
            <img
              alt='Linkedin Logo'
              loading='lazy'
              width='20'
              height='23'
              decoding='async'
              data-nimg='1'
              style={{ color: 'transparent' }}
              src={githubIcon}
            />
          </button>
        </a>
      </div>
    </div>
  );
}
