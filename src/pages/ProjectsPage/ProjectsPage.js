import { NavLink } from 'react-router-dom';
import Vitrine from '../../components/Vitrine/Vitrine';
import './ProjectsPage.css'

export function ProjectsPages() {

    return ( 
        <>
            <div className="background"></div>
            <nav>
            
                <NavLink to="Countdown" className="navLink"><Vitrine/></NavLink>
            </nav>
            
        </>
    );
}