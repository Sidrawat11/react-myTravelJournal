import globe from '../Images/Globe.png';

export default function Navbar(){
    return (
        <nav className="nav--bar"> 
            <img src={globe} alt='Globe'/>
            <span>myTravelJournal</span>            
        </nav>
    );
}