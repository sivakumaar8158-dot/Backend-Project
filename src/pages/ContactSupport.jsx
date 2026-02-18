import { useState } from 'react';

const ContactSupport = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            title: "Email Support",
            details: "supportfindyourdonor@gmail.com",
            description: "24/7 Response Time",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    const faqItems = [
        {
            question: "How do I register as a donor?",
            answer: "You can register by clicking on the 'Donate Now' button on our homepage. You'll need to fill out a simple form with your basic details and medical history."
        },
        {
            question: "Is there an age limit for donating blood?",
            answer: "Yes, donors must be between 18 and 65 years old. In some cases, 17-year-olds may donate with parental consent."
        },
        {
            question: "How often can I donate blood?",
            answer: "Whole blood donation can be done every 56 days. Allow at least 8 weeks between donations to ensure your body replenishes its iron levels."
        },
        {
            question: "How can I find a donor near me?",
            answer: "Use our 'Find Donors' search tool. Enter your location and blood type requirements to see a list of available donors in your area."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800 overflow-x-hidden">

            {/* Premium Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                {/* Abstract Shapes Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-red-100/50 blur-3xl opacity-60"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-orange-50/50 blur-3xl opacity-60"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        Always Here For You
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
                        We'd love to <br className="hidden md:block" /> hear from <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">you</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.
                    </p>
                </div>
            </section>

            {/* Split Layout: Contact & Form */}
            <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side: Contact Info & FAQ */}
                    <div className="space-y-12">

                        {/* Contact Card */}
                        <div className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-10 text-white shadow-2xl transform transition-transform hover:scale-[1.01] duration-500">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

                            <h3 className="text-3xl font-bold mb-8 relative z-10">Get in Touch</h3>

                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white shrink-0 border border-white/20">
                                        {info.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-gray-300 mb-1">{info.title}</h4>
                                        <a href={`mailto:${info.details}`} className="text-xl md:text-2xl font-bold text-white hover:text-red-400 transition-colors break-all">
                                            {info.details}
                                        </a>
                                        <p className="text-sm text-gray-400 mt-2">{info.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Minimal FAQ */}
                        <div className="pl-4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Common Questions</h3>
                            <div className="divide-y divide-gray-100">
                                {faqItems.map((item, index) => (
                                    <details key={index} className="group py-5 cursor-pointer">
                                        <summary className="flex justify-between items-center font-semibold text-gray-800 hover:text-red-600 transition-colors list-none">
                                            {item.question}
                                            <span className="transform transition-transform group-open:rotate-180 text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </summary>
                                        <div className="pt-4 text-gray-500 leading-relaxed text-sm animate-fade-in-down">
                                            {item.answer}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Side: Clean Form */}
                    <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 relative">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Message</h2>
                                <p className="text-gray-500">Fill in the form and we'll get back to you shortly.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent hover:bg-white hover:border-gray-200 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all font-medium"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent hover:bg-white hover:border-gray-200 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all font-medium"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Topic</label>
                                    <div className="relative">
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent hover:bg-white hover:border-gray-200 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all font-medium appearance-none text-gray-600"
                                            required
                                        >
                                            <option value="" disabled>Select a topic</option>
                                            <option value="donation">Blood Donation Inquiry</option>
                                            <option value="technical">Technical Support</option>
                                            <option value="partnership">Partnership Opportunities</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="How can we help?"
                                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent hover:bg-white hover:border-gray-200 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all font-medium resize-none"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gray-900 text-white font-bold text-lg rounded-xl hover:bg-red-600 shadow-xl hover:shadow-red-600/30 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* Redesigned Map Section */}
            <section className="relative w-full h-[600px] mt-20 group overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/5 z-0"></div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.11675373673!2d80.06892409742468!3d13.047487786016394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703255152000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(20%) contrast(1.1) brightness(0.9)' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Map Location"
                    className="w-full h-full object-cover relative z-10"
                ></iframe>

                {/* Floating "Locate Us" Badge */}
                <div className="absolute bottom-10 left-10 z-20 hidden md:block">
                    <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/50 max-w-xs transform group-hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-xl">📍</span>
                            <div>
                                <h4 className="font-bold text-gray-900">Our HQ</h4>
                                <p className="text-xs text-gray-500">Chennai, Tamil Nadu</p>
                            </div>
                        </div>
                        <button className="w-full py-2 bg-gray-900 text-white text-xs font-bold rounded-lg hover:bg-red-600 transition-colors">
                            Get Directions
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactSupport;