import React from 'react'
import Head from 'next/head'
// import Nav from '../components/nav'
import CloudinaryUploadWidget from '../components/cloudinary/UploadWidget'
import CloudinaryGallery from '../components/cloudinary/Gallery'
import { Container } from 'semantic-ui-react'

import { assetPrefix } from '../next.config'

const Home = () => (
  <div className="app">
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="MNM" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
      <title>MNM</title>
      <script src="//widget.cloudinary.com/v2.0/global/all.js" type="text/javascript" />
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    </Head>
    <style jsx global>{`
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}</style>

    {/* <Nav /> */}

    <header className='header'>
      <h1>MNM</h1>
      <p>Supercut</p>
    </header>
    <Container>
      <CloudinaryUploadWidget />
      <CloudinaryGallery />
    </Container>

    <style jsx>{`
      .header {
        background-image: linear-gradient(to bottom right, #8c6f6f, #46465d);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
      }
    `}</style>
  </div>
)

export default Home
