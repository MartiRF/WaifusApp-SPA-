import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { WaifusApp } from './WaifusApp';
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WaifusApp />
    </BrowserRouter>
  </React.StrictMode>,
)
