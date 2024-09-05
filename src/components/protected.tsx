import { ReactNode, useState } from "react"
import { Navigate } from "react-router-dom"

interface IProtectedRoute{
    children: ReactNode
}
export default function Protected ({children}: IProtectedRoute) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    if (isLoggedIn === false){

        return <Navigate to="/" />
        
    }

    return <>{children}</>
}