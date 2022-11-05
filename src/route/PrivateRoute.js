import React from 'react'
import { Navigate } from 'react-router-dom';
import Loader from '../components/common/Loader';
import { useAuthContext } from '../context/authContext';

function PrivateRoute({children}) {
    const { auth } = useAuthContext();
    console.log(auth);

    if (auth === "loading") return <Loader />;

    if (auth === "authenticated") return children;
    else return <Navigate to="/login" replace={true} />;
}

export default PrivateRoute;