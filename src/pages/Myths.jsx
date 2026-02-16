
import { Link } from 'react-router-dom';

const Myths = () => {
  const myths = [
    {
      myth: "Donating blood hurts a lot",
      fact: "The pinch of the needle lasts only a second. You might feel a slight sting when the needle is inserted, but the actual donation process is painless and comfortable.",
      icon: "💉",
      color: "bg-red-50 text-red-600"
    },
    {
      myth: "I'll get weak or faint",
      fact: "Most people feel fine after donating. Your body replenishes the lost volume within 24-48 hours. A light snack and plenty of fluids help prevent any dizziness.",
      icon: "💪",
      color: "bg-orange-50 text-orange-600"
    },
    {
      myth: "I can contract HIV/AIDS",
      fact: "Impossible. Sterile, single-use needles and equipment are used for every donor and then discarded. There is absolutely zero risk of contracting ANY disease.",
      icon: "🛡️",
      color: "bg-green-50 text-green-600"
    },
    {
      myth: "I have high blood pressure",
      fact: "As long as your blood pressure is below 180/100 at the time of donation, you can likely give blood. Many people with managed hypertension are eligible.",
      icon: "🩺",
      color: "bg-blue-50 text-blue-600"
    },
    {
      myth: "I'm too old to donate",
      fact: "There's often no upper age limit as long as you are healthy. Many regular donors are seniors who continue to save lives well into their golden years.",
      icon: "👴",
      color: "bg-purple-50 text-purple-600"
    },
    {
      myth: "Vegetarians can't donate",
      fact: "Vegetarians can definitely donate! As long as you meet the iron requirements (hemoglobin levels), your diet doesn't disqualify you.",
      icon: "🥦",
      color: "bg-yellow-50 text-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Myths vs Facts
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Let's clear the air. Don't let misconceptions stop you from being a hero.
            Get the facts straight and start saving lives today.
          </p>
          <div className="w-24 h-1.5 bg-linear-to-r from-red-500 to-orange-400 mx-auto rounded-full mt-6"></div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myths.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${item.color.split(' ')[0]} rounded-bl-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform duration-500`}></div>

              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.color} mb-6 text-2xl shadow-sm group-hover:rotate-6 transition-transform`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                "{item.myth}"
              </h3>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 rounded-full">
                  Fact Check
                </span>
                <div className="h-px bg-gray-100 flex-1"></div>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.fact}
              </p>
            </div>
          ))}
        </div>

        
        <div className="mt-20 bg-linear-to-tr from-red-600 to-orange-500 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-500/30">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black">
              Ready to break the myths?
            </h2>
            <p className="text-red-100 text-lg max-w-xl mx-auto">
              Now that you know the truth, join thousands of donors making a difference every day.
            </p>
            <Link to="/donorpage" className="bg-white text-red-600 px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-red-50 hover:scale-105 active:scale-95 transition-all shadow-lg mx-auto block mt-8 w-fit text-center">
              Become a Donor
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Myths
