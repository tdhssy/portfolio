import { FiHome, FiFolder } from "react-icons/fi";
import './IconContentSidebar.css'
import { NavLink } from "react-router-dom";


export function IconContentSidebar() {



    return (
            <nav className="navIcon">
                <NavLink to="portfolio/home" className="navLinkIcon"><FiHome/></NavLink>
                <NavLink to="portfolio/projects" className="navLinkIcon"><FiFolder/></NavLink>
            </nav>
    );
}
export default IconContentSidebar;