import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function CitiesPage() {
  const [cities, setCities] = useState([])

  useEffect(() => {
    // Fetches list of cities from the backend API
    axios.get('/api/cities')
      .then(response => {
        // Implementation is private
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="cities-page-container">
      <h2>Heritage Cities</h2>
      {/* Grid of cities with animations */}
    </div>
  )
}

export default CitiesPage
