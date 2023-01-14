import '../styles/globals.css'
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { StateContext } from './context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster/>
  <Component {...pageProps} />
  </StateContext>
  )
}

export default MyApp
