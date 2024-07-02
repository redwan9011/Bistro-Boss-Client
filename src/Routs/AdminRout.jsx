/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRout = ({children}) => {
    const [isAdmin, isPendingLoading] = useAdmin()
    const {user, loading} = UseAuth()
    const location = useLocation()

    if(loading || isPendingLoading){
        return <div className="flex justify-center items-center h-screen w-full">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default AdminRout;