import { useState } from 'react';
import { Link } from 'react-router-dom';

const DonationProcess = () => {
  const [activeTab, setActiveTab] = useState('before');

  const steps = [
    {
      id: 1,
      title: "Registration",
      description: "Sign up and complete a simple donor history questionnaire.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Screening",
      description: "A quick health check-up: pulse, blood pressure, temperature, and hemoglobin.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Donation",
      description: "The actual donation takes about 8-10 minutes. You'll be comfortable and supervised.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Refreshment",
      description: "Relax for a few minutes with a drink and snack to restore your energy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  const eligibility = [
    { title: "Age", value: "18 - 65 years", icon: "🎂" },
    { title: "Weight", value: "Above 50 kg (110 lbs)", icon: "⚖️" },
    { title: "Health", value: "No cold, flu, or infection", icon: "❤️" },
    { title: "Interval", value: "Every 56 days (Whole Blood)", icon: "📅" }
  ];

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen">


      <section className="relative bg-white text-gray-900 overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 bg-red-50/50"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-red-50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="md:w-1/2 mb-10 md:mb-0 space-y-6">
            <span className="inline-block px-4 py-2 rounded-full bg-red-100 border border-red-200 text-red-700 font-medium text-sm">
              Save 3 Lives in 15 Minutes
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
              The Journey to <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-orange-600">Saving a Life</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              Understand the simple, safe, and rewarding process of blood donation. Your contribution matters more than you know.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/donorpage" className="px-8 py-4 bg-linear-to-r from-red-600 to-rose-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all transform flex items-center gap-2">
                Donate Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link to="/finderspage" className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-red-500 hover:text-red-500 transition-all">
                Find Donors
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative">

            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-red-100 rounded-full blur-3xl animate-pulse opacity-60"></div>
              <div className="relative w-full h-full bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-red-50 animate-float">
                <div className="w-64 h-64 bg-linear-to-br from-red-500 via-red-600 to-orange-500 rounded-full flex items-center justify-center shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white drop-shadow-md" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>


              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl border border-gray-100 animate-bounce">
                ❤️
              </div>
              <div className="absolute bottom-8 -left-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 border border-red-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold uppercase tracking-wide text-sm mb-2">How It Works</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">The Donation Process</h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Donating blood is simple and safe. Here’s what you can expect during your visit.</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 z-0 transform -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-red-100 flex items-center justify-center shadow-lg group-hover:border-red-500 group-hover:scale-110 transition-all duration-300 mb-6 relative">
                <div className="text-red-500 group-hover:text-red-600 transition-colors">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold shadow-md">
                  {step.id}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">{step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">

            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Am I Eligible to Donate?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Most healthy adults can donate blood. Review the basic requirements below. If you're unsure, our medical team will check your eligibility during screening.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {eligibility.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 hover:bg-red-50 p-6 rounded-2xl transition-colors duration-300 border border-gray-100">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h5 className="font-bold text-gray-800 text-lg">{item.title}</h5>
                    <p className="text-gray-600 text-sm">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <p className="text-sm text-yellow-800 font-medium flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Postpone donation if you have traveled to high-risk malaria zones recently or have had a tattoo in the last 6 months.</span>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-linear-to-r from-red-200 to-rose-200 rounded-3xl transform rotate-3 opacity-50 blur-lg"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <span className="w-2 h-8 bg-red-500 rounded-full"></span>
                  Quick Check
                </h3>
                <ul className="space-y-4">
                  {[
                    "Feeling well and healthy today?",
                    "Minimum weight of 50kg (110lbs)?",
                    "Aged between 18 and 65?",
                    "Hemoglobin level >= 12.5 g/dL?",
                  ].map((check, i) => (
                    <li key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-900">{check}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900">No recent surgery?</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Common Deferrals</h4>
                  <ul className="text-sm text-gray-500 space-y-2 text-left">
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span> You have a cold, flu, or fever.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span> You are taking antibiotics or specific medications.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span> You have had a tattoo or piercing in the last 6 months.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-500">•</span> Recent travel to malaria-risk zones.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Tips for a Great Experience</h2>
            <p className="text-gray-500 mt-2">Follow these simple tips to ensure a safe and comfortable donation.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => setActiveTab('before')}
                className={`flex-1 py-4 text-center font-bold text-lg transition-colors duration-300 ${activeTab === 'before' ? 'bg-red-600 text-white' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                Before Donation
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`flex-1 py-4 text-center font-bold text-lg transition-colors duration-300 ${activeTab === 'after' ? 'bg-red-600 text-white' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                After Donation
              </button>
            </div>

            <div className="p-8 md:p-12 min-h-75">
              {activeTab === 'before' ? (
                <div className="animate-fade-in-up">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Preparing for your appointment:</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-600"><strong>Eat Iron-Rich Foods:</strong> Red meat, fish, poultry, beans, spinach, or raisins.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-600"><strong>Hydrate:</strong> Drink an extra 16 oz. of water before your appointment.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-600"><strong>Rest:</strong> Get a good night's sleep before your donation.</span>
                      </li>
                    </ul>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl mb-2">🥗</div>
                        <p className="font-semibold text-red-800">Eat a healthy meal!</p>
                        <p className="text-xs text-red-600 mt-1">Avoid fatty foods before donating.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in-up">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Post-Donation Care:</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-600"><strong>Drink Fluids:</strong> Drink extra liquids for the next 24 hours.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-600"><strong>Avoid Strenuous Activity:</strong> No heavy lifting or vigorous exercise for the rest of the day.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-600"><strong>Keep Bandage On:</strong> Keep the strip bandage on for the next several hours.</span>
                      </li>
                    </ul>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl mb-2">🥤</div>
                        <p className="font-semibold text-green-800">Enjoy your snack!</p>
                        <p className="text-xs text-green-600 mt-1">You earned it.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">

            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500 opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                There is a critical need for blood. Be the lifesaver your community needs today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl shadow-lg hover:bg-red-700 transition-all transform hover:scale-105">
                  Register to Donate
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DonationProcess;