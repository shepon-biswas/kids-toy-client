import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return (<progress className="progress w-56 h-56 flex items-center justify-center" >Loading</progress>);
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to={'/login'} replace></Navigate>;
};

export default PrivateRoute;