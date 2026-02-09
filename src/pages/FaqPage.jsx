import { useState } from 'react';

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = [
    {
      question: "Who can donate blood?",
      answer: "Most healthy people between the ages of 18 and 65 who weigh at least 50kg can donate blood. You should be in good general health and not have any active infections or conditions that disqualify you."
    },
    {
      question: "How often can I donate?",
      answer: "Men can donate whole blood every 12 weeks, and women every 16 weeks. Platelet donation can be done more frequently, up to 24 times a year."
    },
    {
      question: "Is giving blood safe?",
      answer: "Yes, absolutely. We use sterile, disposable needles and equipment for every donor. There is zero risk of contracting any disease from donating blood."
    },
    {
      question: "Does it hurt?",
      answer: "You may feel a slight pinch when the needle goes in, but the process is generally painless. Most donors find it quite comfortable and relaxing."
    },
    {
      question: "How long does it take?",
      answer: "The actual donation takes about 8-10 minutes. However, the entire process, including registration, screening, and recovery snacks, usually takes about 45-60 minutes."
    },
    {
      question: "What should I do before donating?",
      answer: "Drink plenty of water, eat a healthy meal (avoid fatty foods), and get a good night's sleep. Wear clothing with sleeves that can be easily rolled up."
    }
  ];

  const tips = [
    { title: "Hydrate Well", icon: "💧", desc: "Drink extra water in the days leading up to your donation." },
    { title: "Iron Rich Diet", icon: "🥦", desc: "Eat foods rich in iron like spinach, red meat, and beans." },
    { title: "Sleep Tight", icon: "😴", desc: "Aim for at least 8 hours of sleep the night before." },
    { title: "No Alcohol", icon: "🚫", desc: "Avoid alcohol for 24 hours before donating." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-black bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Explore answers to common questions about eligibility, safety, and the donation process to help you prepare for your donation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* FAQ Accordion */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-red-200 shadow-red-500/10 shadow-lg' : 'border-gray-100 hover:border-red-100'
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-red-600' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-red-50 rotate-180' : 'bg-gray-50 group-hover:bg-red-50'
                    }`}>
                    <svg className={`w-5 h-5 transition-colors ${openIndex === index ? 'text-red-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="p-5 pt-0 text-gray-500 leading-relaxed border-t border-dashed border-red-50 mx-5 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tips Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-linear-to-br from-red-500 to-orange-500 rounded-3xl p-6 text-white shadow-xl shadow-orange-500/20 sticky top-28">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-white/20 p-1.5 rounded-lg">💡</span>
                Pro Tips
              </h3>

              <div className="space-y-6">
                {tips.map((tip, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="text-2xl bg-white/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                      {tip.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{tip.title}</h4>
                      <p className="text-red-100 text-sm leading-snug mt-1 opacity-90">
                        {tip.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FaqPage;