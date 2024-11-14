import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import App from './App'
import {StyleProvider} from "./theme/StyleProvider.tsx";
import customTheme from './theme/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={customTheme}>
      <StyleProvider>
        <App />
      </StyleProvider>
    </ChakraProvider>
  </StrictMode>
)
