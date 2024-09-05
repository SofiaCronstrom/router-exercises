import { useParams } from "react-router-dom"

export const UserProfile = () =>{

    const {userItem} = useParams();

    return (
        <>
        <h1>User profile</h1>
        <p>Hello {userItem}</p>
        </>
    )
}