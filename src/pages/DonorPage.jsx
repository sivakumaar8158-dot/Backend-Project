import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTint, FaWeight, FaCalendarAlt, FaVenusMars } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonorPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    age: '',
    gender: '',
    state: '',
    district: '',
    city: '',
    bloodGroup: '',
    weight: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = parseInt(formData.age, 10);

    if (age < 18 || age > 65) {
      toast.error("Ineligible: Age must be between 18 and 65 years.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // Attempting to submit
    console.log("Form Data:", formData);

    // Simulating backend storage with localStorage
    const existingDonors = JSON.parse(localStorage.getItem('donors') || '[]');
    const newDonor = { ...formData, id: Date.now() }; // Add simple ID
    const updatedDonors = [...existingDonors, newDonor];
    localStorage.setItem('donors', JSON.stringify(updatedDonors));

    toast.success("Registration Successful! You are now a donor.", {
      position: "top-right",
      autoClose: 3000
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      age: '',
      gender: '',
      state: '',
      district: '',
      city: '',
      bloodGroup: '',
      weight: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
        <span className="text-red-600 font-bold tracking-wider uppercase text-sm bg-red-50 px-4 py-2 rounded-full mb-4 inline-block">Join our Community</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
          Become a <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-orange-600">Life Saver</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Register as a donor and give the gift of life. Your contribution can save up to three lives.
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="md:flex">
          {/* Side Content / Info Panel */}
          <div className="md:w-1/3 bg-linear-to-br from-red-600 to-orange-600 p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Register?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <FaTint className="text-white text-sm" />
                  </div>
                  <p className="text-red-50 text-sm leading-relaxed">Emergency availability of blood is critical for saving lives.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <FaUser className="text-white text-sm" />
                  </div>
                  <p className="text-red-50 text-sm leading-relaxed">Join a network of heroes making a real difference.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <FaEnvelope className="text-white text-sm" />
                  </div>
                  <p className="text-red-50 text-sm leading-relaxed">Get notified when your blood type is needed nearby.</p>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <p className="text-xs text-red-100 opacity-80">
                By registering, you agree to our terms and privacy policy regarding your health data.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:w-2/3 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Donor Registration</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Personal Details */}
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Personal Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaUser />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:border-red-500 focus:ring-red-500 sm:text-sm py-3 transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-gray-400 text-xs font-normal">(Optional)</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaEnvelope />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:border-red-500 focus:ring-red-500 sm:text-sm py-3 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaPhone />
                      </div>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:border-red-500 focus:ring-red-500 sm:text-sm py-3 transition-colors"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Age <span className="text-red-500">*</span></label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required // Using custom validation in onSubmit, but required ensures checking
                        className="block w-full rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:border-red-500 focus:ring-red-500 sm:text-sm py-3 px-4 transition-colors"
                        placeholder="Age"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <FaVenusMars />
                        </div>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                          className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:border-red-500 focus:ring-red-500 sm:text-sm py-3 transition-colors appearance-none"
                        >
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2 mt-6">Location</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:border-red-500 focus:ring-red-500 sm:text-sm py-3 px-4 transition-colors"
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">District <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:border-red-500 focus:ring-red-500 sm:text-sm py-3 px-4 transition-colors"
                      placeholder="District"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">City / Area <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaMapMarkerAlt />
                      </div>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:border-red-500 focus:ring-red-500 sm:text-sm py-3 transition-colors"
                        placeholder="City, Area or Pincode"
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* Medical Details */}
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2 mt-6">Health Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-red-500">
                        <FaTint />
                      </div>
                      <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        required
                        className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:border-red-500 focus:ring-red-500 sm:text-sm py-3 transition-colors appearance-none"
                      >
                        <option value="">Select Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg) <span className="text-gray-400 text-xs font-normal">(Optional)</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaWeight />
                      </div>
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:border-red-500 focus:ring-red-500 sm:text-sm py-3 transition-colors"
                        placeholder="e.g. 65"
                      />
                    </div>
                  </div>

                </div>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-linear-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  Register as Donor
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonorPage