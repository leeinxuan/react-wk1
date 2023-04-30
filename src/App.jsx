import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/reset.css'
import './App.css'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();

//import { feedProducts } from './api'
//feedProducts();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Home />
      </div>
    </QueryClientProvider>
  )
}

export default App
