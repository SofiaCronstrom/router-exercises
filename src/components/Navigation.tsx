import { Link, NavLink } from "react-router-dom";
import './Navigation.css';

export default function NavBar () {
return (
    <section>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/userprofile'>User profile</NavLink>
        </nav>
    </section>
)
}