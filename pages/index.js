import React from 'react'
import Head from 'next/head'
// import Nav from '../components/nav'

import { assetPrefix } from '../next.config'

const Home = () => (
  <div className="app">
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href={`${assetPrefix}/favicon.ico`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="MNM" />
      <link rel="apple-touch-icon" href="logo192.png" />
      <link rel="manifest" href={`${assetPrefix}/manifest.json`} />
      <title>MNM</title>
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

    <style jsx>{`
      .app {
        text-align: center;
      }
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
