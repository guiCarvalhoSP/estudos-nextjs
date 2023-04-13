import React from 'react'
import Image from 'next/image';

import styles from '../styles/About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, perspiciatis in temporibus quaerat necessitatibus dignissimos tempora doloribus dolore quisquam nesciunt totam molestias iste? Soluta earum laboriosam sint nobis aspernatur quibusdam.</p>
      <Image
          src="/images/charizard.png" 
          width="300"
          height="300"
          alt="Charizard"
      />
    </div>
  )
}

export default About;