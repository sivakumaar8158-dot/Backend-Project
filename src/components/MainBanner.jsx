import mainbanner from '../assets/MainBanner.png'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <>
    
    <div className='relative w-full overflow-hidden'>
  
  <div className='relative h-100 md:h-125 lg:h-150'>
    
    <div className='absolute inset-0'>
      <img 
        src={mainbanner} 
        alt="Blood Donation Banner" 
        className='w-full h-full object-cover object-center'
      />
      
      <div className='absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent'></div>
    </div>

    
    <div className='relative max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center'>
      <div className='text-white max-w-2xl space-y-6 animate-fade-in'>
        
        <div className='inline-flex items-center gap-2 bg-red-500/90 backdrop-blur-sm px-4 py-2 rounded-full'>
          <div className='h-2 w-2 bg-white rounded-full animate-pulse'></div>
          <span className='text-sm font-semibold uppercase tracking-wider'>Save Lives Today</span>
        </div>

        
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
          Every Drop <span className='text-red-500'>Counts</span>
        </h1>

        
        <p className='text-lg md:text-xl text-gray-200 leading-relaxed'>
          Join our community of heroes. Your donation can save up to three lives. Be the reason someone smiles today.
        </p>

        
        <div className='flex flex-col sm:flex-row gap-4 pt-4'>
          <Link 
            to="/donate-blood" 
            className='inline-flex items-center justify-center px-8 py-4 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-all duration-300 hover:shadow-2xl hover:scale-105 group'
          >
            Donate Blood Now
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </Link>
          
          <Link  to="/find-donors" className='inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:border-white/50'>
            Find Donors
          </Link>
        </div>

        
        <div className='flex flex-wrap gap-8 pt-8'>
  <div className='text-center sm:text-left'>
    <p className='text-3xl md:text-4xl font-bold text-red-500'>1 Donation</p>
    <p className='text-sm text-gray-300'>Saves 3 Lives</p>
  </div>
  <div className='text-center sm:text-left'>
    <p className='text-3xl md:text-4xl font-bold text-red-500'>Every 2 Sec</p>
    <p className='text-sm text-gray-300'>Blood is Needed</p>
  </div>
  <div className='text-center sm:text-left'>
    <p className='text-3xl md:text-4xl font-bold text-red-500'>24/7</p>
    <p className='text-sm text-gray-300'>Service Available</p>
  </div>
</div>
      </div>
    </div>

    
    <div className='absolute bottom-0 left-0 right-0'>
      <svg className='w-full h-16 md:h-24 text-white' viewBox="0 0 1200 120" preserveAspectRatio="none"> </svg>
    </div>
  </div>
</div>
    
    
    </>
  )
}

export default MainBanner