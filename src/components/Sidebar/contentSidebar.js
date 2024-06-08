
import './contentSidebar.css'
import { NavLink } from "react-router-dom";


export function ContentSidebar() {



    return (
            <nav className='navLetter'>
                <NavLink to="portfolio/home" className="navLinkText">Home</NavLink>
                <NavLink to="portfolio/projects" className="navLinkText">projects</NavLink>
            </nav>
    );
}
export default ContentSidebar;
