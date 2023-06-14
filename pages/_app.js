import '../styles/globals.css';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { StateContext } from '../context/StateContext.page';
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }) {
  const redirectUri = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <Auth0Provider
      domain="dev-koz3ivhq2dj0py06.us.auth0.com"
      clientId="4SgpXstuuJIRQ5g0b7vZfQqFNtnYGZEE"
      authorizationParams={{
        redirect_uri: redirectUri
      }}
    >
      <StateContext>
        <Toaster />
        <Component {...pageProps} />
      </StateContext>
    </Auth0Provider>
  );
}

export default MyApp;
