import mainbanner from '../assets/CleanBanner.png'
import MainLogo from '../assets/MainLogo.png'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative w-full overflow-hidden bg-gray-50'>

     
      <div className='relative min-h-[600px] lg:min-h-[700px] lg:h-[85vh] flex items-center'>


        <div className='absolute inset-0'>
          <img
            src={mainbanner}
            alt="Blood Donation Banner"
            className='w-full h-full object-cover object-right lg:object-[80%_center]' 
          />

          <div className='absolute inset-0 bg-linear-to-r from-white via-white/40 to-transparent lg:w-[65%]'></div>
          <div className='absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent lg:hidden'></div> 
        </div>


        <div className='relative max-w-7xl mx-auto px-6 md:px-8 w-full h-full flex items-center z-10'>


          <div className='max-w-xl lg:max-w-2xl space-y-8 animate-fade-in py-12 lg:py-0'>


            <div className="flex items-center gap-4 mb-6">
              <img src={MainLogo} alt="Logo" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
              <div className='hidden md:block h-12 w-0.5 bg-gray-300 rounded-full'></div>
              <div className='hidden md:block'>
                <p className="text-xl font-bold text-gray-800 tracking-wide">FIND YOUR DONOR</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Connect • Donate • Save</p>
              </div>
            </div>


            <div className='inline-flex items-center gap-2 bg-linear-to-r from-red-500 to-orange-500 text-white px-5 py-2 rounded-full shadow-lg shadow-red-500/20 transform hover:scale-105 transition-transform cursor-default'>
              <div className='h-2 w-2 bg-white rounded-full animate-pulse'></div>
              <span className='text-sm font-bold uppercase tracking-wider'>Save Lives Today</span>
            </div>


            <h1 className='text-5xl md:text-6xl/tight lg:text-7xl/tight font-extrabold text-gray-900 tracking-tight'>
              Every Drop <br />
              <span className='bg-linear-to-r from-red-600 to-orange-600 bg-clip-text text-transparent filter drop-shadow-sm'>Counts Forever</span>
            </h1>


            <p className='text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-lg'>
              Join our community of everyday heroes. A single donation can save up to three lives. Make a difference today.
            </p>


            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <Link
                to="/donorpage"
                className='inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-xl shadow-red-500/30 hover:shadow-red-500/40 hover:-translate-y-1 group'
              >
                Donate Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                to="/finderspage"
                className='inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-gray-300'
              >
                Find Donors
              </Link>
            </div>


            <div className='flex items-center gap-8 pt-6 border-t border-gray-200/60 mt-8'>


            </div>

          </div>
        </div>


        <div className='absolute bottom-0 left-0 right-0 z-10'>
          <svg className='w-full h-8 md:h-16 text-gray-50 fill-current' viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,432.84,2,302.54,92.4,120.4,142.3,10,140V0H0V120H1200V0C1181.79,90.46,1102.82,109.91,985.66,92.83Z" className="opacity-100"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default MainBanner