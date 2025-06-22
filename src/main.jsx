import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'flowbite/dist/flowbite.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'
import App from './App.jsx'
import { js } from '@eslint/js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
 <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </StrictMode>
)
