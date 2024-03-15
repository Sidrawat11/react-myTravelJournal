import locIco from '../Images/location-icon.png'
export default function Card(props) {
    const title = props.title.toUpperCase();
    console.log(title);
    return (      
        <div className="tile">
            <section className="image--section">
                <img src={props.imageUrl} alt='' />
            </section>
            <section  className="info--section">
                <section className="info--location">
                    <img src={locIco} alt='' height='13px'/>
                    <span>{props.location.toUpperCase()}</span>
                    <a href="googleMapsUrl">View on Google Maps</a>
                </section>                
                <h1>{props.title}</h1>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </section>        
        </div>
        
    );
};
