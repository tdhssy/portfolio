import './Vitrine.css';
import { NavLink } from 'react-router-dom';

const Vitrine = ({Img, Title, Link})=> {
 

    return (
        <NavLink to={Link} className="navLinkVitrine">
            <figure className="vitrine">
                <img src={Img}/>
                <figcaption className="VitrineTitle">{Title}</figcaption>   
            </figure>
        </NavLink>
    );  

};

export default Vitrine;