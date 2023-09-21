import Header from "../Component/Header"
import Footer from "../Component/Footer"
import kym from"../../src/Images/kym.jpg"
import allot from"../../src/Images/allot.jpg"
import stora from"../../src/Images/stora.jpg"
import sara from"../../src/Images/sara.jpg"

const Scott=()=>{
    return(
    <div id="bin">
        <Header/>
        <div id="img">
            <img src={stora} alt="" />
        </div>
       <div className="spec">
            <div className="het drill polo you">
                <img src={sara} alt="" id="fish"/>
                <div id="swell">
                    <h2>SOTTSDALE QUATER</h2>
                    <p>Our Arizona store location is conveniently located in one of Scottsdale's top-shopping destinations.</p>
                    <h3>Hours:</h3>
                    <p>Monday-SATURDAY: 10AM-8PM Friday-Sunday: 12-6PM</p>
                    <h3>Albion @ Scootsdale Quarter</h3>
                    <p>7601 Windrose Ave. F120, Plano, TX 75024</p>
                    <strong>Phone:</strong>(480)<span>479-1522</span>
                    <a href=""><button>FOLLOW @ALBIONFITSCOTTSDALEQUARTER</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het drill pet you">
                <img src={allot} alt="" id="fish"/>
                <div id="swell">
                    <h2>NORTH HIRING</h2>
                    <p>Looking for self-motivated, friendly individuals to join our Stylist team in Scottsdale</p>
                    <a href=""><button>GET MORE DETAILS</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het drill per you">
                <img src={kym} alt=""id="fish" />
                <div id="swell">
                    <h2>STORE EVENTS</h2>
                    <p>Join us for store event happeing near you!</p>
                    <a href=""><button>VIEW SCOTTSDALE QUARTER EVENTS</button></a>
                </div>
            </div>
         </div>
         <div className="footer">
            <Footer/>
         </div>
    </div>
    )
}
export default Scott