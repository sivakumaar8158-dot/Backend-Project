import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            navigate('/login');
        }
    }, [navigate]);

    if (!user) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 relative overflow-hidden font-sans">
            
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-200/40 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-6xl mx-auto relative z-10">

                
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Dashboard</h1>
                        <p className="text-gray-500 text-sm font-medium">Manage your donor profile</p>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm font-bold text-gray-700">Online</span>
                    </div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 md:gap-6">

                   
                    <div className="col-span-1 md:col-span-2 row-span-2 bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                            <svg className="w-64 h-64 text-gray-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                        </div>

                        <div className="relative z-10">
                            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300">
                                <span className="text-5xl font-black text-white">{user.fullName ? user.fullName.charAt(0).toUpperCase() : 'U'}</span>
                            </div>
                            <h2 className="text-4xl font-black text-gray-900 mb-1 tracking-tight">{user.fullName}</h2>
                            <p className="text-gray-500 font-medium text-lg">{user.email}</p>
                        </div>

                        <div className="relative z-10 mt-8 flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-gray-50 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-600 border border-gray-100">
                                Donor ID: #{Date.now().toString().slice(-6)}
                            </span>
                            <span className="px-4 py-2 bg-blue-50 rounded-xl text-xs font-bold uppercase tracking-wider text-blue-600 border border-blue-100 flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg> Verified
                            </span>
                            <span className="px-4 py-2 bg-purple-50 rounded-xl text-xs font-bold uppercase tracking-wider text-purple-600 border border-purple-100">
                                Member Since {user.registeredAt?.split('/')[2] || '2024'}
                            </span>
                        </div>
                    </div>

                   
                    <div className="col-span-1 md:col-span-2 bg-white rounded-[2rem] p-6 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-between group hover:border-green-400 transition-colors duration-300">
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-500">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded-md">Status</span>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Eligibility</p>
                            <p className="text-2xl font-black text-gray-900">Available</p>
                            <p className="text-xs text-green-500 font-bold mt-1">You can donate today!</p>
                        </div>
                    </div>

                    
                    <div className="col-span-1 md:col-span-2 row-span-2 bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-black text-gray-900">Your Impact</h3>
                            <button className="text-sm font-bold text-gray-400 hover:text-red-500 transition-colors">Full History</button>
                        </div>

                        <div className="flex-1 flex items-center justify-center p-8 bg-gray-50/50 rounded-3xl border border-dashed border-gray-200">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-gray-300 mb-4">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">No Donations Yet</h4>
                                <p className="text-gray-500 text-sm max-w-xs mx-auto">Your donation history will appear here once you make your first contribution.</p>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                                <p className="text-orange-600/70 text-xs font-bold uppercase mb-1">Lives Saved</p>
                                <p className="text-3xl font-black text-orange-600">0</p>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                                <p className="text-blue-600/70 text-xs font-bold uppercase mb-1">Points Earned</p>
                                <p className="text-3xl font-black text-blue-600">0</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
