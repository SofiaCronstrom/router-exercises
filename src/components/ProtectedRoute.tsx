import { useState } from "react"
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({LoggedIn}) => {

    const [isAuth, setIsAuth] = useState<boolean>(false);

    return isAuth ? <LoggedIn/> : <Navigate to='/login' />


}