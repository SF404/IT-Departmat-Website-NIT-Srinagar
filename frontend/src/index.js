import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CSSReset, ChakraProvider, ColorModeProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <ColorModeProvider
      options={{
        // initialColorMode: "light", // or "dark"
        useSystemColorMode: true,
      }}
    >
      <CSSReset />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ColorModeProvider>
  </ChakraProvider>
);

