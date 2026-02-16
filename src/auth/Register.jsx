import { useState } from 'react';
import MainLogo from '../assets/MainLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
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


    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error('All fields are required');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }


    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (existingUsers.some(user => user.email === formData.email)) {
      toast.error('User with this email already exists');
      return;
    }


    const newUser = {
      id: Date.now(),
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      registeredAt: new Date().toLocaleDateString(),
    };

    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    toast.success('Registration successful! Redirecting to login...');
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    setTimeout(() => {

      if (onSuccess) onSuccess();
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 relative overflow-hidden">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />

      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="w-full max-w-lg bg-white/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-white relative z-10 mx-4 transition-all duration-300 hover:shadow-red-900/10">


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
          <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Create Account</h2>
          <p className="text-gray-500 font-medium">Join us and start saving lives today.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="space-y-4">


            <div className="relative group">
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all font-medium text-gray-900 placeholder-gray-400 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
            </div>


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
                  placeholder="name@example.com"
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


            <div className="relative group">
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all font-medium text-gray-900 placeholder-gray-400 outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>


          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-linear-to-r from-red-600 to-orange-600 text-white font-bold text-lg shadow-xl shadow-red-500/30 hover:shadow-red-500/50 hover:from-red-700 hover:to-orange-700 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            Sign Up
          </button>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-red-600 hover:text-red-500 transition-colors">
              Log in
            </Link>
          </p>

          <div className="text-center mt-4">
            <Link to="/" className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-red-600 transition-colors group">
              <svg className="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Home
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;