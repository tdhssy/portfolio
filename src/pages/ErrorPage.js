import { useNavigate  } from "react-router-dom";
import { useEffect } from "react";

export function ErrorPage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Rediriger immédiatement
        navigate('/portfolio/home'); // Rediriger vers la page d'accueil ou toute autre page souhaitée
    }, [navigate]);


    return (<></>);
}