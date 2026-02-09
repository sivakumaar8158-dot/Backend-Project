import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
   
    const activeUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');

    if (!activeUser) {
        
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
