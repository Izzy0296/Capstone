import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import CartProvider from './cartcontext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <React.StrictMode>

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </React.StrictMode>,
  </CartProvider>
)
