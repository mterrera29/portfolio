type HeaderProps = {
  handlePages: (page: number) => void;
};

export default function Header({ handlePages }: HeaderProps) {
  return (
    <div className='text-transparent bg-clip-text bg-text-gradient flex flex-row justify-center items-center gap-5 uppercase mb-3'>
      <div onClick={() => handlePages(1)} className=' cursor-pointer'>
        Sobre mi
      </div>
      <div>|</div>
      <div onClick={() => handlePages(2)} className=' cursor-pointer'>
        Estudios
      </div>
      <div>|</div>
      <div onClick={() => handlePages(3)} className=' cursor-pointer'>
        Proyectos
      </div>
    </div>
  );
}
