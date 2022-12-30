import React from 'react';
import { useStore } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loading from '../../../Pages/Shared/Loading/Loading';


const PrivateRoute = ({children}) => {
    const store = useStore();
    const user = store.getState().states.user;
    const loading = store.getState().states.loading;

    if (loading) {
        return <Loading></Loading>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>; 
};

export default PrivateRoute;