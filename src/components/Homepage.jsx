import { useState } from 'react'
import backgroundImage from '../assets/main.jpg'
import Button from './Button';
const Homepage = () => {
  const [headline, setheadline] = useState(["Limits"]);
  
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div className='relative mx-8'>
        <p className='text-white text-xl font-bold'>Design - Develop - Deploy </p>
        <h1 className="text-white text-8xl font-bold">Create a Website Without {headline}</h1>
        <Button />
        </div>
        
    </div>
  )
}

export default Homepage