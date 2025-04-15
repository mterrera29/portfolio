export default function Header({ handlePages }) {
  return (
    <div className='text-white flex flex-row justify-center items-center gap-5'>
      <div onClick={() => handlePages(1)}>Sobre mi</div>
      <div onClick={() => handlePages(2)}>Estudios</div>
      <div onClick={() => handlePages(3)}>Proyectos</div>
    </div>
  );
}
