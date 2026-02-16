const Footer = () => {
  return (
    <>
      <footer className='bg-white border-t border-gray-100 relative overflow-hidden'>

        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className='max-w-7xl mx-auto px-6 py-12 relative z-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16'>


            <div className='space-y-6'>
              <div>
                <h4 className='text-2xl font-black bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent inline-block'>
                  Find Your Donor
                </h4>
                <p className='mt-3 text-gray-500 text-sm leading-relaxed'>
                  Join our mission to bridge the gap between donors and those in need.
                  Every drop counts, and every donor is a hero in someone's story.
                </p>
              </div>


              <div className='flex gap-3'>
                <div className='group p-2.5 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-xl transition-all duration-300 cursor-default'>
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </div>
                <div className='group p-2.5 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-xl transition-all duration-300 cursor-default'>
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </div>
                <div className='group p-2.5 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-xl transition-all duration-300 cursor-default'>
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </div>
              </div>
            </div>


            
            <div>
              <h5 className='font-bold text-gray-900 mb-5 flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-orange-500'></span>
                Community
              </h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center cursor-default">
                  <svg className="w-8 h-8 text-red-500 mb-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Connect</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center cursor-default">
                  <svg className="w-8 h-8 text-orange-500 mb-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Donate</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center cursor-default">
                  <svg className="w-8 h-8 text-yellow-500 mb-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Quick Aid</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center cursor-default">
                  <svg className="w-8 h-8 text-red-600 mb-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Secure</span>
                </div>
              </div>
            </div>


            <div>
              <h5 className='font-bold text-gray-900 mb-5 flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-red-500'></span>
                Why Donate?
              </h5>
              <ul className='space-y-4'>
                <li className='flex items-start gap-3 group'>
                  <div className='p-2 bg-red-50 text-red-500 rounded-lg group-hover:bg-red-100 transition-colors'>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <div>
                    <span className='block font-bold text-gray-800 text-sm'>Save 3 Lives</span>
                    <span className='text-xs text-gray-500'>A single pint can save up to three lives.</span>
                  </div>
                </li>
                <li className='flex items-start gap-3 group'>
                  <div className='p-2 bg-orange-50 text-orange-500 rounded-lg group-hover:bg-orange-100 transition-colors'>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <span className='block font-bold text-gray-800 text-sm'>Health Benefits</span>
                    <span className='text-xs text-gray-500'>Free health screening & reduced cancer risk.</span>
                  </div>
                </li>
                <li className='flex items-start gap-3 group'>
                  <div className='p-2 bg-yellow-50 text-yellow-500 rounded-lg group-hover:bg-yellow-100 transition-colors'>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <div>
                    <span className='block font-bold text-gray-800 text-sm'>Community Hero</span>
                    <span className='text-xs text-gray-500'>Be the lifeline for someone in your city.</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>


          <div className='border-t border-gray-100 mt-12 pt-8 flex items-center justify-center text-center'>
            <p className='text-xs text-gray-400 font-medium'>
              © 2026 <span className='text-red-600'>Find Your Donor</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>


    </>
  )
}

export default Footer