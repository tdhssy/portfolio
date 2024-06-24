import Section from "../../components/Section/Section";
import "./Home.css"


export function Home() {


    return ( 
        <>
            <div className="background"/>

            <div className="headImg"/>      

            <Section Title="Qui suis-je ?" SubText="
            Bonjour et bienvenue sur mon portfolio ! 
            /nJe m'appelle Théo. j'ai 22 ans et suis étudiant en informatique,
            /nJe passionné par la programmation et curieux sur la manières dont fonctionne les choses. 
            /nActuellement en M2 à l'Université Bretagne Sud, 
            /nje me spécialise dans le développement d'application.
            "
            />

            <Section Title="Qu'elle est ce site ?" SubText="
            Ce site fait partie d'un projet personnel que je me suis lancé afin d'approfondire mes connaissances en web et d'apprendre a utiliser le framework react. 
            /nIl me permet de regrouper mes projets github et de me permettre de tester d'appliquer certaines de mes connaissances en un dans un environnement plus proche des conditions réel afin d'entrevoir les difficultés que cela peu engendrer.
            "
            />



        </>
    );
}