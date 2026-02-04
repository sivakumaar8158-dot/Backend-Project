import { Link } from "react-router-dom"
import Logo from '../assets/MainLogo.png'

const NavBar = () => {
  return (
  <div className='bg-white backdrop-blur-sm shadow-xl sticky top-0 z-50'>
  <div className='max-w-7xl mx-auto px-8 py-4'>
    <div className='flex items-center justify-between'>
      
      
      <div className='flex items-center gap-4'>
        <div className='relative group cursor-pointer'>
          
          <div className='absolute -inset-2 bg-linear-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-2xl blur-md opacity-75 group-hover:opacity-100 animate-pulse'></div>
          <div className='absolute -inset-1 bg-linear-to-r from-yellow-300 to-orange-300 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500'></div>
          <div className='absolute inset-0 bg-white rounded-xl scale-95'></div>
        
          <img 
            className="relative h-16 w-16 rounded-xl shadow-2xl z-10 transform group-hover:scale-110 transition-transform duration-300" 
            src={Logo} alt="mainlogo" />
        
        </div>
        
        
        <div className='hidden md:block'>
          <h1 className='text-2xl font-bold bg-linear-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent'>
            Find Your Donor
          </h1>
          
        </div>
      </div>

      
      <div className='flex items-center gap-3 bg-gray-100 rounded-full p-1.5'>

        <Link className='px-5 py-2 text-gray-600 font-medium rounded-full transition-all duration-300 hover:bg-white hover:text-yellow-600 hover:shadow-sm' 
          to="/" > Home </Link>
        <Link className='px-5 py-2 text-gray-600 font-medium rounded-full transition-all duration-300 hover:bg-white hover:text-yellow-600 hover:shadow-sm' 
          to="/register" > Register </Link>
        <Link className='px-5 py-2 bg-yellow-400 text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg' 
          to="/login" > Login </Link>

      </div>
    </div>
  </div>
</div>
  )
}
export default NavBar