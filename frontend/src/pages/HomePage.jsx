import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="homepage-container">
      {/* Immersive Landing, Map SVG & City Showcases */}
      {/* Visual Design and Scrollytelling Implementation is Private */}
      <h1>Crescent - Journey Through India's Cultural Heritage</h1>
      <p>Explore the diverse cultures, traditions, and arts across different regions of India.</p>
      <Link to="/cities">Explore Cities</Link>
    </div>
  )
}

export default HomePage
