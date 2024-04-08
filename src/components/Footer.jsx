import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    <footer className='absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
      <div className='border-b px-8 py-3'>
        <CountryLookup />
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0'>
        <ul className='flex items-center space-x-6'>
          <li className='hover:underline cursor-pointer'>Acerca de</li>
          <li className='hover:underline cursor-pointer'>Publicidad
</li>
          <li className='hover:underline cursor-pointer'>Negocio</li>
          <li className='hover:underline cursor-pointer'>Cómo funciona la búsqueda</li>
        </ul>
        <ul className='flex items-center space-x-6'>
          <li className='hover:underline cursor-pointer'>Privacidad
</li>
          <li className='hover:underline cursor-pointer'>Términos</li>
          <li className='hover:underline cursor-pointer'>Ajustes</li>
        </ul>
      </div>
    </footer>
  );
}
