import Header from "../Component/Header"
import Footer from "../Component/Footer"
import spe from"../../src/Images/spe.jpg"
import collect from"../../src/Images/collect.jpg"
import belle from"../../src/Images/belle.jpg"
import spin from"../../src/Images/spin.jpg"

const Wet=()=>{
    return(
    <div id="bin">
        <Header/>
        <div id="img">
            <img src={belle} alt="" />
        </div>
       <div className="spec">
            <div className="het drill polo you">
                <img src={collect} alt=""id="fish" />
                <div id="swell">
                    <h2>NEW STORE IN SAN DIEGO</h2>
                    <p>Our new store, and West Coast in San Diego, California.</p>
                    <h3>Hours:</h3>
                    <p>Monday-Saturday: 10AM-8PM  Sunday:11AM-7PM</p>
                    <h3>Albion @ Westfiled UTC</h3>
                    <p>4305 La Jolla Village Drive Suite 2460 San Diego, CA 92122 (Next to Apple Store)</p>
                    <strong>Phone:</strong>(619)<span>895-0782</span>
                    <a href=""><button>FOLLOW @ALBIONFITWESTFILEDUTC</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het drill pet you">
                <img src={spe} alt="" id="fish"/>
                <div id="swell">
                    <h2>NORTH HIRING</h2>
                    <p>Our newest store and West Coast debut, is now open at Westfield UTC in San Diego, California.</p>
                    <a href=""><button>GET MORE DETAILS</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het drill pet you">
                <img src={spin} alt="" id="fish"/>
                <div id="swell">
                    <h2>STORE EVENTS</h2>
                    <p>Join us for sum fun and stay up to date on store events event near you!</p>
                    <a href=""><button>VIEW WESTFIELD EVENTS</button></a>
                </div>
            </div>
         </div>
         <div className="footer">
            <Footer/>
         </div>
    </div>
    )
}
export default Wet