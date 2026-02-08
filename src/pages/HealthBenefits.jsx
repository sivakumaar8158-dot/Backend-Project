import { Link } from 'react-router-dom';

const HealthBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Heart Health",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: "Regular donation can lower blood viscosity, reducing the risk of heart attacks and strokes.",
      color: "bg-red-50 text-red-600"
    },
    {
      id: 2,
      title: "Free Check-up",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      description: "Mini-physical before every donation includes blood pressure, body temperature, and pulse check.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 3,
      title: "Calorie Burn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      description: "Donating one pint of blood can burn approximately 650 calories as your body replenishes it.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      id: 4,
      title: "Iron Balance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      description: "Maintains healthy iron levels, preventing hemochromatosis and improving overall liver health.",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <div className="font-sans antialiased text-gray-800 bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-20 border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-red-50 to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-linear-to-tr from-gray-50 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm bg-red-50 px-4 py-2 rounded-full mb-6 inline-block">
              Why Donate?
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              For You, It’s Healthy. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-orange-600">For Them, It’s Life.</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Donating blood doesn't just save lives—it comes with surprising health benefits for the donor too. Discover how giving back helps you stay healthy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Psychological Benefit Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-12">

            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-r from-red-200 to-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative aspect-square bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-9xl animate-bounce">😊</div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                The Joy of <span className="text-red-500">Saving Lives</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The most powerful health benefit is psychological. Knowing that your single donation can save up to **three lives** gives a sense of purpose and belonging.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-gray-700 font-medium">Reduces stress and negative feelings</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-gray-700 font-medium">Improves emotional well-being</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-gray-700 font-medium">Creates a sense of community connection</span>
                </li>
              </ul>
              <div className="pt-6">
                <Link to="/register" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-red-600 transition-colors duration-300 shadow-lg group">
                  Experience the Joy
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Good for You. Great for Them.</h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of donors who stay healthy by saving lives. Your journey to better health starts with a single donation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donorpage" className="px-10 py-4 bg-linear-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-red-200 hover:-translate-y-1 transition-all">
              Start Donating
            </Link>
            <Link to="/finderspage" className="px-10 py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:border-red-500 hover:text-red-500 transition-all">
              Find Donors
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HealthBenefits;