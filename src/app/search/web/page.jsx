// app/web-search/page.jsx
import WebSearchResults from '@/components/WebSearchResults';
import Link from 'next/link';
import { Suspense } from 'react';

export default function WebSearchPage({ searchParams }) {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <WebSearchResultsComponent searchParams={searchParams} />
    </Suspense>
  );
}

const WebSearchResultsComponent = ({ searchParams }) => {
  const results = useWebSearchResults(searchParams);

  if (!results) {
    return (
      <>
        <div className='flex flex-col justify-center items-center pt-10'>
          <h1 className='text-3xl mb-4'>
            No se encontraron resultados para {searchParams.searchTerm}
          </h1>
          <p className='text-lg'>
            Intente buscar en la web o en imágenes{' '}
            <Link href='/' className='text-blue-500'>
              Inicio
            </Link>
          </p>
        </div>
      </>
    );
  }

  return <div>{results && <WebSearchResults results={results} />}</div>;
};

// Este componente se renderizará en el servidor
export const useWebSearchResults = async (searchParams) => {
  const startIndex = searchParams.start || '1';
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  );

  if (!response.ok) throw new Error('Something went wrong');

  const data = await response.json();
  return data;
};