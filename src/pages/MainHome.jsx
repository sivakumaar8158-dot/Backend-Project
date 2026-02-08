import MainBanner from "../components/MainBanner";
import MainLogo from "../assets/MainLogo.png";

const MainHome = () => {
  return (
    <div className="bg-gray-50 min-h-screen">


      <MainBanner />


      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-1 rounded-full shadow-md">
              <img src={MainLogo} alt="Logo" className="w-26 h-26 object-cover rounded-full" />
            </div>
          </div>

          <blockquote className="text-3xl md:text-5xl font-serif text-gray-800 leading-tight mb-8">
            "To give blood is to give life. Your donation is the greatest gift you can offer."
          </blockquote>
          <cite className="text-gray-500 font-medium tracking-widest uppercase text-sm not-italic flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-red-300"></span>
            Be A Savior
            <span className="w-8 h-px bg-red-300"></span>
          </cite>
        </div>
      </section>

      <section className="pb-20 pt-8 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm bg-red-50 px-4 py-2 rounded-full">Simple Process</span>
            <h2 className="text-4xl font-black text-gray-900 mt-4 mb-4">How It Works</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Becoming a lifesaver is easier than you think. Follow these simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

            <div className="hidden md:block absolute top-12 left-[100px] right-[100px] h-1 bg-gradient-to-r from-red-200 via-orange-200 to-red-200 -z-10 rounded-full"></div>


            <div className="text-center relative bg-white p-6 rounded-2xl border border-transparent hover:border-red-100 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg mb-6 transform hover:rotate-12 transition-transform">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Register</h3>
              <p className="text-gray-500 leading-relaxed">Sign up in seconds. Create your profile and become a part of our donor community.</p>
            </div>


            <div className="text-center relative bg-white p-6 rounded-2xl border border-transparent hover:border-orange-100 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white shadow-lg mb-6 transform hover:rotate-12 transition-transform">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Find or Donate</h3>
              <p className="text-gray-500 leading-relaxed">Search for blood needs nearby or receive notifications when someone needs your help.</p>
            </div>


            <div className="text-center relative bg-white p-6 rounded-2xl border border-transparent hover:border-red-100 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg mb-6 transform hover:rotate-12 transition-transform">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Save Lives</h3>
              <p className="text-gray-500 leading-relaxed">Visit the hospital and donate. Your small act creates a massive impact.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MainHome;