import Link from 'next/link';
import React from 'react'

import styles from '../styles/Navbar.module.css'
function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/products">Produtos</Link>
        </li>

        <li>
          <Link href="/about">Sobre</Link>
        </li>

        <li>
          <Link href="/todos">Todo</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;