import { NavLink } from "react-router-dom";

import "./NavBar.css"
import { Dropdown } from "../Dropdown/Dropdown";



export function NavBar() {


    return (
        <div className="Background">
            <nav>
                <NavLink to="portfolio/home" className="navLink">Home</NavLink>
                <NavLink to="portfolio/Countdown" className="navLink">Countdown</NavLink>
                
            </nav>
        </div>
    );
}
export default NavBar;