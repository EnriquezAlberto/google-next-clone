import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';
import { Suspense } from 'react'

export default async function ImageSearchPage({ searchParams }) {
  const startIndex = searchParams.start || '1';
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}&searchType=image&start=${startIndex}`
  );
  if (!response.ok) throw new Error('Hubo algún error');
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <><div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>
          No se encontraron resultados para {searchParams.searchTerm}
        </h1>
        <p className='text-lg'>
          Intente buscar en la web o en imágenes{' '}
          <Link href='/' className='text-blue-500'>
            Inicio
          </Link>
        </p>
      </div><Suspense>
          <ImageSearchPage />
        </Suspense>
        </>
    );
  }

  return <div>{results && <ImageSearchResults results={data} />}</div>;
}
