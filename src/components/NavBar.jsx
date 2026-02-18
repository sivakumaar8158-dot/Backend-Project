import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import Logo from '../assets/MainLogo.png'

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkUser = () => {
      const sessionUser = sessionStorage.getItem('currentUser');
      const localUser = localStorage.getItem('currentUser');
      const storedUser = sessionUser || localUser;

      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Error parsing user data:", error);
          sessionStorage.removeItem('currentUser');
          localStorage.removeItem('currentUser');
        }
      } else {
        setUser(null);
      }
    };

    checkUser();

    const handleStorageChange = (e) => {
      if (e.key === 'currentUser') {
        checkUser();
        if (!e.newValue) {

          setUser(null);
          navigate('/');
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);


    window.addEventListener('auth-change', checkUser);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('auth-change', checkUser);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');


    window.dispatchEvent(new Event('storage'));

    setUser(null);
    setShowDropdown(false);
    navigate('/');
  };

  return (
    <div className='bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3'>
        <div className='flex items-center justify-between'>


          <div className='flex items-center gap-4'>
            <Link to={user ? "/mainhome" : "/"} className='relative group cursor-pointer'>
              <div className='absolute -inset-2 bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full blur-md opacity-75 group-hover:opacity-100 animate-pulse'></div>
              <img
                className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-lg z-10 transform group-hover:scale-105 transition-transform duration-300 ring-2 ring-white"
                src={Logo} alt="mainlogo" />
            </Link>

            <div className='hidden md:block'>
              <h1 className='text-xl sm:text-2xl font-black bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-tight'>
                Find Your Donor
              </h1>
            </div>
          </div>


          <div className='flex items-center gap-4'>


            {user ? (
              <div className="flex items-center gap-3 sm:gap-6">

                <Link
                  to="/mainhome"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 hover:text-orange-600 bg-gray-50 hover:bg-orange-50 rounded-full transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>

                <Link
                  to="/finderspage"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 hover:text-orange-600 bg-gray-50 hover:bg-orange-50 rounded-full transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Find a Donor
                </Link>

                <Link
                  to="/donorpage"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-600 hover:text-orange-600 bg-gray-50 hover:bg-orange-50 rounded-full transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Donate Now
                </Link>


                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-3 group focus:outline-none bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-full transition-all duration-300 border border-orange-100/50"
                  >
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-800 group-hover:text-orange-700 transition-colors">{user.fullName}</p>
                    </div>

                    <div className="h-9 w-9 rounded-full bg-linear-to-tr from-orange-400 to-red-500 p-0.5 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                        <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>

                    <svg className={`w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>


                  {showDropdown && (
                    <div className="absolute right-0 top-full mt-3 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 transform origin-top-right transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                      <div className="p-4 bg-gray-50/50 border-b border-gray-100">
                        <p className="text-sm font-bold text-gray-900">{user.fullName}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                      <div className="p-2">
                        <Link to="/profile" onClick={() => setShowDropdown(false)} className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                          My Profile
                        </Link>
                        <div className="h-px bg-gray-100 my-1"></div>
                        <p className="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Information</p>
                        <Link to="/bloodtypes" onClick={() => setShowDropdown(false)} className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors">
                          Blood Types
                        </Link>
                        <Link to="/donationprocess" onClick={() => setShowDropdown(false)} className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors">
                          Donation Process
                        </Link>
                        <Link to="/healthbenefits" onClick={() => setShowDropdown(false)} className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors">
                          Health Benefits
                        </Link>
                        <Link to="/myths" onClick={() => setShowDropdown(false)} className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors">
                          Myths & Facts
                        </Link>
                        <Link to="/faq" onClick={() => setShowDropdown(false)} className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors">
                          FAQ
                        </Link>
                        <Link to="/contact" onClick={() => setShowDropdown(false)} className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-xl hover:bg-orange-50 hover:text-orange-600 transition-colors">
                          Contact Support
                        </Link>
                        <div className="h-px bg-gray-100 my-1"></div>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-colors text-left"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className='flex items-center gap-2 bg-gray-100/80 p-1.5 rounded-full backdrop-blur-sm'>
                <Link className='px-6 py-2.5 text-sm text-gray-600 font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-orange-600 hover:shadow-md'
                  to="/" > Home </Link>
                <Link className='px-6 py-2.5 text-sm text-gray-600 font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-orange-600 hover:shadow-md'
                  to="/register" > Register </Link>
                <Link className='px-6 py-2.5 bg-linear-to-r from-yellow-400 to-orange-500 text-white font-bold text-sm rounded-full shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/50 hover:scale-105 active:scale-95'
                  to="/login" > Login </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default NavBar