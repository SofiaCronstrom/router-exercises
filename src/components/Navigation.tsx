import { Link } from "react-router-dom";
import './Navigation.css';

export default function NavBar () {
return (
    <section>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    </section>
)
}