import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import User from './components/User.jsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/Renault'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)