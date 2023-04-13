import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function NotFound() {
  return (
    <>
    <Head>
      <title>Page Not Found</title>
    </Head>
      <div>
        <h1>Erro 404</h1>
        <p>Página não encontrada</p>
        <Link href="/" >Voltar</Link>
      </div>
    </>
  )
}

export default NotFound;