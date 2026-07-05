import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import HomePage from './pages/HomePage'
import CitiesPage from './pages/CitiesPage'
import CityPage from './pages/CityPage'
import AboutPage from './pages/AboutPage'
import ConnectPage from './pages/ConnectPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cities" element={<CitiesPage />} />
          <Route path="/cities/:slug" element={<CityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
