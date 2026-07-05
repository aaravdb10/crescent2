import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function CityPage() {
  const { slug } = useParams()
  const [cityData, setCityData] = useState(null)

  useEffect(() => {
    // Fetches detailed cultural data for the active city by slug
    axios.get(`/api/cities/${slug}`)
      .then(response => {
        // Implementation is private
      })
      .catch(error => console.error(error))
  }, [slug])

  return (
    <div className="city-scrollytelling-container">
      {/* Immersive interactive scrollytelling visual presentation of cultural heritage */}
      {/* Cover, Food, Festivals, Art Forms, Architecture, History */}
    </div>
  )
}

export default CityPage
