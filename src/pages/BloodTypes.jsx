import React from 'react';

const BloodTypes = () => {
  const bloodTypes = [
    {
      type: "A+",
      description: "You have A and Rh antigens. You can give blood to A+ and AB+ types.",
      receiveFrom: "A+, A-, O+, O-",
      color: "from-red-500 to-red-600",
      textColor: "text-red-600"
    },
    {
      type: "O+",
      description: "The most common blood type. You can give to O+, A+, B+, and AB+.",
      receiveFrom: "O+, O-",
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-600"
    },
    {
      type: "B+",
      description: "You have B and Rh antigens. You can give to B+ and AB+.",
      receiveFrom: "B+, B-, O+, O-",
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-600"
    },
    {
      type: "AB+",
      description: "The universal recipient. You can receive blood from any Rh+ or Rh- type.",
      receiveFrom: "Everyone",
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-600"
    },
    {
      type: "A-",
      description: "You have A antigens only. You can give to A+, A-, AB+, and AB-.",
      receiveFrom: "A-, O-",
      color: "from-pink-500 to-pink-600",
      textColor: "text-pink-600"
    },
    {
      type: "O-",
      description: "The universal donor. Your blood can be used in emergencies for anyone.",
      receiveFrom: "O-",
      color: "from-green-500 to-green-600",
      textColor: "text-green-600"
    },
    {
      type: "B-",
      description: "You have B antigens only. You can give to B+, B-, AB+, and AB-.",
      receiveFrom: "B-, O-",
      color: "from-teal-500 to-teal-600",
      textColor: "text-teal-600"
    },
    {
      type: "AB-",
      description: "The rarest blood type. You can give plasma to anyone.",
      receiveFrom: "AB-, A-, B-, O-",
      color: "from-indigo-500 to-indigo-600",
      textColor: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">

      
      <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
        <span className="text-red-600 font-bold tracking-wider uppercase text-sm bg-red-50 px-4 py-2 rounded-full mb-4 inline-block">Education</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
          Understanding <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-orange-600">Blood Types</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Knowing your blood type is crucial for safe transfusions. Discover who you can help and who can help you.
        </p>
      </div>

      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {bloodTypes.map((blood, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${blood.color} opacity-10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500`}></div>

            <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${blood.color} flex items-center justify-center text-white text-2xl font-black shadow-lg mb-6 relative z-10`}>
              {blood.type}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{blood.type} Type</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed relative z-10 min-h-15">
              {blood.description}
            </p>

            <div className="pt-4 border-t border-gray-100 relative z-10">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Can Receive From</span>
              <span className={`font-bold ${blood.textColor}`}>{blood.receiveFrom}</span>
            </div>
          </div>
        ))}
      </div>

      
      <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden mb-20 border border-gray-100">
        <div className="bg-linear-to-r from-red-600 to-orange-600 p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Compatibility Guidelines</h2>
          <p className="text-red-100 max-w-2xl mx-auto">
            A quick reference guide to understand donor and recipient compatibility. Safety is our top priority.
          </p>
        </div>
        <div className="p-8 md:p-12">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center text-gray-600">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-bold text-left">Blood Type</th>
                  <th className="px-6 py-4 font-bold">Donate To</th>
                  <th className="px-6 py-4 font-bold">Receive From</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-red-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900 text-left flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">A+</div>
                    A Positive
                  </td>
                  <td className="px-6 py-4">A+, AB+</td>
                  <td className="px-6 py-4">A+, A-, O+, O-</td>
                </tr>
                <tr className="hover:bg-red-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900 text-left flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">O+</div>
                    O Positive
                  </td>
                  <td className="px-6 py-4">O+, A+, B+, AB+</td>
                  <td className="px-6 py-4">O+, O-</td>
                </tr>
                <tr className="hover:bg-red-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900 text-left flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center font-bold text-xs">B+</div>
                    B Positive
                  </td>
                  <td className="px-6 py-4">B+, AB+</td>
                  <td className="px-6 py-4">B+, B-, O+, O-</td>
                </tr>
                <tr className="hover:bg-red-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900 text-left flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">AB+</div>
                    AB Positive
                  </td>
                  <td className="px-6 py-4">AB+ Only</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Universal Recipient</span></td>
                </tr>
                <tr className="hover:bg-red-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900 text-left flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center font-bold text-xs">A-</div>
                    A Negative
                  </td>
                  <td className="px-6 py-4">A+, A-, AB+, AB-</td>
                  <td className="px-6 py-4">A-, O-</td>
                </tr>
                <tr className="hover:bg-red-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900 text-left flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shadow-md">O-</div>
                    O Negative
                  </td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">Universal Donor</span></td>
                  <td className="px-6 py-4">O- Only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">Donation Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-green-500">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">You Can Donate If...</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✔</span> Are between 18 and 65 years old</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✔</span> Weigh at least 50 kg (110 lbs)</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✔</span> Are in good general health</li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✔</span> Can wait 3 months between donations</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-yellow-500">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Wait Before Donating If...</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1">⚠</span> You have a cold, flu, or sore throat</li>
              <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1">⚠</span> Had a tattoo/piercing recently (6 months)</li>
              <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1">⚠</span> Are pregnant or breastfeeding</li>
              <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1">⚠</span> Traveled to malaria-risk areas recently</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-red-500">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">You Cannot Donate If...</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✖</span> Have tested positive for HIV/AIDS</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✖</span> Have had hepatitis B or C</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✖</span> Have serious heart conditions</li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✖</span> Have used intravenous drugs</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BloodTypes;