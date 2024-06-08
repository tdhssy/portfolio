import './Vitrine.css';
import CompteurProjectImage from '../../assets/pictures/CompteurProject.png';


const Vitrine = ()=> {
 

    return (
        <figure className="vitrine">
            <img src={CompteurProjectImage}/>
            <figcaption className="VitrineTitle">Compteur</figcaption>   
        </figure>
    );

};

export default Vitrine;