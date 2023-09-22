import Header from "../Component/Header"
import Footer from "../Component/Footer"
import city from"../../src/Images/city.jpg"
import fasion from"../../src/Images/fashion.jpg"
import wet from"../../src/Images/wet.jpg"
import scott from"../../src/Images/scott.jpg"
import legacy from"../../src/Images/legacy.jpg"
import dove from"../../src/Images/dove.jpg"
import { Link } from "react-router-dom";

const Stores=()=>{
    return(
      <div id="bin">
        <Header/>
        <div id="smart">
            <h1>ALBION FIT RETAIL STORE LOCATIONS</h1>
         </div>
         <div className="spec">
            <div className="het score">
                <img src={city} alt="" />
                <div id="swell">
                    <h2>CITY CREEK CENTER</h2>
                    <p>Our flagship store in downtown Salt Lake City at the beautiful City Creek Center.</p>
                    <Link to="/city"><button>MORE DETAILS</button></Link>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het score">
                <img src={fasion} alt="" />
                <div id="swell">
                    <h2>FASHION PLACE MALL</h2>
                    <p>Located in South Salt Lake area in Murray, UT</p>
                    <Link to="/fashion"><button>MORE DETAILS</button></Link>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het score">
                <img src={wet} alt="" />
                <div id="swell">
                    <h2>WESTFILED UTC</h2>
                    <p>Come visit our new store in beautiful San Diego, CA.</p>
                    <Link to="/wet"><button>MORE DETAILS</button></Link>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het score">
                <img src={scott} alt="" />
                <div id="swell">
                    <h2>SCOTTSDALE QUATER</h2>
                    <p>Located outside of Phoenix in download Scottsdale, AZ.</p>
                    <Link to="/scott"><button>MORE DETAILS</button></Link>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het score">
                <img src={legacy} alt="" />
                <div id="swell">
                    <h2>LEGACY WEST</h2>
                    <p>Located outside of Dallas in the heart of Plano, TX.</p>
                    <Link to="/legacy"><button>MORE DETAILS</button></Link>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het score">
                <img src={dove} alt="" />
                <div id="swell">
                    <h2>DOMAIN NORTHSIDE</h2>
                    <p>Come visit our newest store now open in Austin, TX.</p>
                    <Link to="/dove"><button>MORE DETAILS</button></Link>
                </div>
            </div>
         </div>
         <div className="footer">
            <Footer/>
         </div>
      </div>
    )
}
export default Stores