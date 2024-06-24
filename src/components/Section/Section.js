import './Section.css';


const Section = ({Title = "", SubText = ""})=> {
 
    //Format text
    const formatText = (text) => {
        const lines = text.split('/n').map((line) =>{
            const tabLine = line.split('/t').join('\u00A0\u00A0\u00A0\u00A0');
            return (
                <>
                    {tabLine}
                    <br/>
                </>
            );
        });

        return lines;
    };


    return (
        <div className="section">
            <h2 className="titleSection">
            {
                Title.length===0?
                "Lorem ipsum"
                :
                Title
            }
            </h2>   
            <p className="subtitleSection">
            {
                SubText.length===0?
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin ac. Vitae auctor eu augue ut lectus arcu bibendum. Id faucibus nisl tincidunt eget nullam non. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Augue eget arcu dictum varius duis at consectetur lorem donec. Sed augue lacus viverra vitae congue. Massa tincidunt dui ut ornare lectus sit amet. Nunc sed velit dignissim sodales ut. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Interdum velit laoreet id donec ultrices tincidunt arcu non. Non quam lacus suspendisse faucibus. Non diam phasellus vestibulum lorem sed risus ultricies."
                :
                formatText(SubText)
            }    
            </p> 
        </div>
    );

};

export default Section;