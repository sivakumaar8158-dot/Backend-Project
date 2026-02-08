import { useState } from 'react';
import MainLogo from '../assets/MainLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.email || !formData.password) {
      toast.error('Email and password are required');
      return;
    }


    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === formData.email && u.password === formData.password);

    if (!user) {
      toast.error('Invalid email or password');
      return;
    }


    localStorage.setItem('currentUser', JSON.stringify(user));

    toast.success('Login successful!');


    setTimeout(() => {
      if (onSuccess) {
        onSuccess(user);
      }
      navigate('/mainhome');
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 relative overflow-hidden">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />


      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-white relative z-10 mx-4 transition-all duration-300 hover:shadow-red-900/10">


        <div className="flex justify-center mb-6">
          <div className="shadow-2xl rounded-full">
            <img
              src={MainLogo}
              alt="Logo"
              className="w-28 h-28 object-cover rounded-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>


        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Welcome Back!</h2>
          <p className="text-gray-500 font-medium">Please enter your details to sign in.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="space-y-5">
            <div className="relative group">
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all font-medium text-gray-900 placeholder-gray-400 outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all font-medium text-gray-900 placeholder-gray-400 outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded cursor-pointer" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 font-medium cursor-pointer">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-semibold text-red-600 hover:text-red-500 transition-colors">Forgot password?</a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-linear-to-r from-red-600 to-orange-600 text-white font-bold text-lg shadow-xl shadow-red-500/30 hover:shadow-red-500/50 hover:from-red-700 hover:to-orange-700 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            Sign In
          </button>


          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-red-600 hover:text-red-500 transition-colors">
              Sign up for free
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;