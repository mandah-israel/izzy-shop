import Header from "../Component/Header"
import Footer from "../Component/Footer"
import spor from"../../src/Images/spor.jpg"
import bull from"../../src/Images/bull.jpg"
import stora from"../../src/Images/stora.jpg"
import jik from"../../src/Images/jik.jpg"

const Legacy=()=>{
    return(
    <div id="bin">
        <Header/>
        <div id="img">
            <img src={stora} alt="" />
        </div>
       <div className="spec">
            <div className="het drill polu you">
                <img src={jik} alt=""id="fish" />
                <div id="swell">
                    <h2>LAGACY WEST</h2>
                    <p>Our first Texas store is located in the beautifull Legacy West shopping destination,just minutes from downtown Dallas.</p>
                    <h3>Hours:</h3>
                    <p>Monday-Thursday: 11AM-7PM Friday-Saturday: 11AM-8PM Sunday:12-6PM</p>
                    <h3>Albion @ Legacy West</h3>
                    <p>7601 Windrose Ave. F120, Plano, TX 75024</p>
                    <strong>Phone:</strong>(801)<span>560-7581</span>
                    <a href=""><button>FOLLOW @ALBIONFITLECACYWEST</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het drill pet you">
                <img src={spor} alt="" id="fish"/>
                <div id="swell">
                    <h2>NORTH HIRING</h2>
                    <p>We are Looking for self-motivated, friendly individuals to join our Stylist team in Piano</p>
                    <a href=""><button>GET MORE DETAILS</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het drill per you">
                <img src={bull} alt=""id="fish" />
                <div id="swell">
                    <h2>STORE EVENTS</h2>
                    <p>Save the date and join us for store event happeing near you!</p>
                    <a href=""><button>VIEW LEGACY WEST EVENTS</button></a>
                </div>
            </div>
         </div>
         <div className="footer">
            <Footer/>
         </div>
    </div>
    )
}
export default Legacy