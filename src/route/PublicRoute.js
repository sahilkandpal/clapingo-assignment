import React from 'react'
import { Navigate } from 'react-router-dom';
import Loader from '../components/common/Loader';
import { useAuthContext } from '../context/authContext';

function PublicRoute({children}) {
    const { auth } = useAuthContext();
    console.log(auth);

    if (auth === "loading") return <Loader />;

    if (auth === "authenticated") return <Navigate to="/dashboard" replace={true} />;
    else return children;
}

export default PublicRoute;