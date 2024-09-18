import React from 'react'
import backgroundImage from '../assets/main.jpg'

const Pages = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  )
}

export default Pages