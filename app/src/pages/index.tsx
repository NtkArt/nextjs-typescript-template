import React from 'react'
import Head from 'next/head'
import MarvelLogo from '../assets/MarvelLogo.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Page title</title>
      </Head>

      <main>
        <MarvelLogo />
        <h1>Hello world</h1>
        <p>A Typescript React &amp; Next.js template for fast development.</p>
      </main>
    </Container>
  )
}

export default Home
