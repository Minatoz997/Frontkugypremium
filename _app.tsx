import { AppProps } from 'next/app';
import { createContext, useState } from 'react';
import '../styles/globals.css';

export const UiContext = createContext({
  theme: {
    color: '#4785FF',
    gradient: 'from-blue-500 to-purple-500'
  },
  darkMode: true,
  lang: 'id'
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiContext.Provider 
      value={{
        theme: {
          color: '#4785FF',
          gradient: 'from-blue-500 to-purple-500'
        },
        darkMode: true,
        lang: 'id'
      }}
    >
      <Component {...pageProps} />
    </UiContext.Provider>
  );
}

export default MyApp;