import { useEffect, useState } from "react";


const Countdown = ({year, month, day, hours, minutes, seconds})=> {
    const CurrentDate = new Date();
    const TargetDate = new Date(year, month, day, hours, minutes, seconds);
    const DiffDate = TargetDate.getTime() - CurrentDate.getTime();
    

    const [time, setTime]= useState(DiffDate);

    useEffect(() => {

        const calculateTimeLeft = () => {
            const CurrentDate = new Date();
            const TargetDate = new Date(year, month, day, hours, minutes, seconds);
            
            const DiffDate = TargetDate.getTime() - CurrentDate.getTime();
            if (DiffDate>0){
                return DiffDate;
            }else{
                return 0;
            }
        };
        
        //Enleve une seconde chaque seconde
        const timer = setInterval(() => {
            
            setTime(calculateTimeLeft()) 
        },1000)

        


        return () => clearInterval(timer);

    },[year, month, day, hours, minutes, seconds])

    //Fonction format
    const getFormattedTime = (TotalTime) =>{
        let total_seconds = parseInt(Math.floor(TotalTime / 1000) );
        let total_minutes = parseInt(Math.floor(total_seconds / 60))
        let total_hours = parseInt(Math.floor(total_minutes / 60) )
        let days = parseInt(Math.floor(total_hours / 24))

        let seconds = total_seconds % 60;
        let minutes = total_minutes % 60;
        let hours = total_hours % 60;

        return `${days} : ${hours} : ${minutes} : ${seconds}`
    };


    return (
            <h1>
                {getFormattedTime(time)}
            </h1>    
    );

};

export default Countdown;