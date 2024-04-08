import Link from 'next/link';
import PaginationButtons from './PaginationButtons';

export default function ImageSearchResults({ results }) {
  return (
    <div className='sm:pb-24 pb-40 mt-4'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4'>
      {results && results.items && results.items.length > 0 ? (
        results.items.map((result) => (
          <div className='mb-8' key={result?.link}>
            <div className='group'>
              {/* Renderizar el componente Link solo si result.image.contextLink es válido */}
              {result.image && result.image.contextLink && (
                <Link href={result.image.contextLink}>
                  <img
                    src={result.link}
                    alt={result.title}
                    className='h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300'
                  />
                </Link>
              )}
              {/* Usar result.image?.contextLink para el href del Link */}
              <Link href={result.image?.contextLink || '#'}>
                {/* Asegurarse de que result.title sea un texto válido */}
                <h2 className='group-hover:underline truncate text-xl'>
                  {result.title || 'Título no disponible'}
                </h2>
              </Link>
              {/* Mostrar result.displayLink solo si está definido */}
              {result.displayLink && (
                <Link href={result.image?.contextLink || '#'}>
                  <p className='group-hover:underline truncate text-gray-600'>
                    {result.displayLink}
                  </p>
                </Link>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No se encontraron resultados de búsqueda.</p>
      )}
    </div>
      <div className='ml-16'>
        <PaginationButtons />
      </div>
    </div>
  );
}