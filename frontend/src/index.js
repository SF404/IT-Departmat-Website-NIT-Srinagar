import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  ChakraProvider,  extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: (props) => ({

      "::-webkit-scrollbar": {
        width: "10px",
      },
      "*::-webkit-scrollbar-track": {
        background: "white",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#e5e5e5",
      },
    }),
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
