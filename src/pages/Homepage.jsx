import { useState, useEffect } from 'react'
import backgroundImage from '../assets/main.jpg'
import BusinessCard from '../components/BusinessCard';
const Homepage = () => {

  const textArray = ['Grow', 'Trusted', 'Social'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Set up the interval to change text every 2 seconds (2000 ms)
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
}, []);

  const handleMouseEnter = () => {
      setIsHovered(true);
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
  };
  
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Right Div */}
        <div className='relative mx-12 flex-1 sm:text-lg'>
        <p className='text-purple-500 text-4xl font-bold'>Design - Develop - Deploy </p>
        <span className="text-white text-8xl font-bold">Now Make Your Business More </span>
        <span className='text-purple-500 text-8xl font-extrabold'>{textArray[currentIndex]}.</span>
        <p className='text-white text-xl font-medium mt-4'>Helps you to develop websites according to your niche requirement and business needs.</p>
        </div>
      {/* Left Div */}
        <div className='flex-1 hidden sm:block'>
          <div
            className="bg-[#202634] text-lg text-white font-bold m-24 p-6 border-none rounded-lg"
          >
            <p className='text-gray-400'>Makeup your website</p>
            <div 
              className='mt-2'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
                {!isHovered ? 
                <h2 className='text-2xl'>Hover over me &#128531;</h2> : 
                <h2 className='text-4xl'>I am happy now &#128516;</h2>
                }
            </div>
          </div>
          <div>
            <BusinessCard />
            <BusinessCard />
          </div>
        </div>
    </div>
  )
}

export default Homepage