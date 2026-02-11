import React, { useState, useEffect } from 'react';
import { FaSearch, FaMapMarkerAlt, FaTint, FaPhone, FaUser } from 'react-icons/fa';

const FindersPage = () => {
  const [donors, setDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [bloodFilter, setBloodFilter] = useState('');

  useEffect(() => {
    // Load donors from localStorage
    const storedDonors = JSON.parse(localStorage.getItem('donors') || '[]');
    setDonors(storedDonors);
  }, []);

  const filteredDonors = donors.filter(donor => {
    const matchesSearch = donor.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBlood = bloodFilter ? donor.bloodGroup === bloodFilter : true;
    return matchesSearch && matchesBlood;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
        <span className="text-red-600 font-bold tracking-wider uppercase text-sm bg-red-50 px-4 py-2 rounded-full mb-4 inline-block">Find Help</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
          Find a <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-orange-600">Donor</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connect with heroic donors in your area. Every contact could mean a life saved.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-2/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <FaSearch />
            </div>
            <input
              type="text"
              className="pl-10 block w-full rounded-xl border-gray-300 bg-gray-50 border focus:bg-white focus:border-red-500 focus:ring-red-500 sm:text-sm py-4 transition-colors"
              placeholder="Search by City, District, or State..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <select
              className="block w-full rounded-xl border-gray-300 bg-gray-50 border focus:bg-white focus:border-red-500 focus:ring-red-500 sm:text-sm py-4 px-4 transition-colors appearance-none"
              value={bloodFilter}
              onChange={(e) => setBloodFilter(e.target.value)}
            >
              <option value="">All Blood Groups</option>
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
      </div>

      {/* Donors Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredDonors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDonors.map((donor) => (
              <div key={donor.id} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-8 -mt-8 z-0"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-linear-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md">
                        <FaUser />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">{donor.fullName}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <FaMapMarkerAlt className="text-red-400" /> {donor.city}, {donor.district}
                        </p>
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-black shadow-inner text-sm">
                      {donor.bloodGroup}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-xl text-center">
                      <span className="block text-xs font-bold text-gray-400 uppercase">Age</span>
                      <span className="block text-gray-900 font-bold">{donor.age}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl text-center">
                      <span className="block text-xs font-bold text-gray-400 uppercase">Gender</span>
                      <span className="block text-gray-900 font-bold capitalize">{donor.gender}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <a href={`tel:${donor.mobile}`} className="flex items-center justify-center gap-2 w-full py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-red-200 shadow-lg">
                      <FaPhone className="text-sm" /> Call Donor
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400 text-3xl">
              <FaUser />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Donors Found</h3>
            <p className="text-gray-500 max-w-sm mx-auto">
              We couldn't find any donors matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FindersPage