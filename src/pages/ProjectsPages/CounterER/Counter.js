import  Countdown  from '../../../components/CountDown/Countdown';
import './CounterPage.css'

export function Counter() {

    return (

            
        <>
            <div className="backgroundImg"/>
        
            <div className="counter center">
                <p className='TextureGold mainText' lastLetter="G">ELDEN RIN</p>

                <span className='TextureGold SilverFilter'>
                    <span>SHADOW </span>
                    <span class="TextureGold SilverFilter subText">
                        <span className='subTextLine'>of</span>
                        <span className='subTextLine'>the</span>
                    </span>
                    <span> ERDTREE</span>
                </span>
                
                <div className='TextureGold SilverFilter'>
                    <Countdown year={2024} month={5} day={21} hours={0} minutes={0} seconds={0}/>
                </div>
            </div>
            
           
        </>

    );

}