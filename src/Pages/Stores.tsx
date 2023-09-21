import Header from "../Component/Header"
import Footer from "../Component/Footer"
import city from"../../src/Images/city.jpg"
import fasion from"../../src/Images/fashion.jpg"
import wet from"../../src/Images/wet.jpg"
import scott from"../../src/Images/scott.jpg"
import legacy from"../../src/Images/legacy.jpg"
import dove from"../../src/Images/dove.jpg"

const Stores=()=>{
    return(
      <div id="bin">
        <Header/>
        <div id="smart">
            <h1>ALBION FIT RETAIL STORE LOCATIONS</h1>
         </div>
         <div className="spec">
            <div className="het">
                <img src={city} alt="" />
                <div id="swell">
                    <h2>CITY CREEK CENTER</h2>
                    <p>Our flagship store in downtown Salt Lake City at the beautiful City Creek Center.</p>
                    <a href="/city"><button>MORE DETAILS</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het">
                <img src={fasion} alt="" />
                <div id="swell">
                    <h2>FASHION PLACE MALL</h2>
                    <p>Located in South Salt Lake area in Murray, UT</p>
                    <a href="/fashion"><button>MORE DETAILS</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het">
                <img src={wet} alt="" />
                <div id="swell">
                    <h2>WESTFILED UTC</h2>
                    <p>Come visit our new store in beautiful San Diego, CA.</p>
                    <a href="/wet"><button>MORE DETAILS</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het">
                <img src={scott} alt="" />
                <div id="swell">
                    <h2>SCOTTSDALE QUATER</h2>
                    <p>Located outside of Phoenix in download Scottsdale, AZ.</p>
                    <a href="/scott"><button>MORE DETAILS</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het">
                <img src={legacy} alt="" />
                <div id="swell">
                    <h2>LEGACY WEST</h2>
                    <p>Located outside of Dallas in the heart of Plano, TX.</p>
                    <a href="/legacy"><button>MORE DETAILS</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het">
                <img src={dove} alt="" />
                <div id="swell">
                    <h2>DOMAIN NORTHSIDE</h2>
                    <p>Come visit our newest store now open in Austin, TX.</p>
                    <a href="/dove"><button>MORE DETAILS</button></a>
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