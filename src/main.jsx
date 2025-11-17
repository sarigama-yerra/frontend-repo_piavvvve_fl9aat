import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import LayoutRoutes from './pages/LayoutRoutes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
