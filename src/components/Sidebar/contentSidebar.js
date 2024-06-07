
import './contentSidebar.css'
import { NavLink } from "react-router-dom";


export function ContentSidebar() {



    return (
            <nav className='navLetter'>
                <NavLink to="portfolio/home" className="navLink">Home</NavLink>
                <NavLink to="portfolio/Countdown" className="navLink">Countdown</NavLink>
            </nav>
    );
}
export default ContentSidebar;
