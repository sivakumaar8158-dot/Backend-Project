import { Link } from 'react-router-dom';

const Card = ({ title, description, icon, link, colorClass, buttonColor }) => {
    return (
        <div className={`relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100`}>
            
            <div className={`absolute -right-10 -top-10 w-40 h-40 bg-linear-to-br ${colorClass} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500 ease-out`}></div>

            <div className="relative z-10">
                <div className={`h-16 w-16 mb-6 rounded-2xl bg-linear-to-br ${colorClass} flex items-center justify-center text-white shadow-md group-hover:rotate-6 transition-transform duration-300`}>
                    {icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">{title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {description}
                </p>

                <Link to={link}>
                    <button className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-linear-to-r ${buttonColor} shadow-md hover:shadow-lg hover:gap-3 transition-all duration-300 w-full justify-center group-hover:bg-linear-to-br`}>
                        Explore
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

const BloodDonationCards = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why <span className="bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Find Your Donor?</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Join our community to make a difference. Whether you're here to give or receive, we're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card
                        title="Donate Blood"
                        description="Be a hero in someone's life. Your donation can save up to three lives. Register today to become a donor."
                        link="/register"
                        colorClass="from-red-400 to-red-600"
                        buttonColor="from-red-500 to-pink-600"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        }
                    />

                    <Card
                        title="Find a Donor"
                        description="Urgent need for blood? Connect with nearby donors quickly and easily through our network."
                        link="/finderspage"
                        colorClass="from-orange-400 to-yellow-500"
                        buttonColor="from-orange-500 to-yellow-600"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        }
                    />

                    <Card
                        title="Check Eligibility"
                        description="Not sure if you can donate? Take a quick check to see if you are eligible to become a blood donor."
                        link="/eligibility"
                        colorClass="from-blue-400 to-teal-500"
                        buttonColor="from-blue-500 to-teal-600"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default BloodDonationCards;
