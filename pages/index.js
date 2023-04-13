import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name='keyboards' content='Roupas, Calçados, Boné'></meta>
        <meta name='description' content='Encontre a melhor roupa pra você'></meta>

      </Head>
      <div className={styles.container}>
        <h1>Hello world</h1>
      </div>
    </>
  )
}
