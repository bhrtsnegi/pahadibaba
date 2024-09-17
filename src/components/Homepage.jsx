import backgroundImage from '../assets/main.jpg'
const Homepage = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div className='relative'>
        <p className='text-white text-xl font-bold'>Design - Develop - Deploy </p>
        <h1 className="text-white text-4xl font-bold">Welcome to the Homepage</h1>
        </div>
        
    </div>
  )
}

export default Homepage