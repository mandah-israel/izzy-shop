import Header from "../Component/Header"
import Footer from "../Component/Footer"
import sele from"../../src/Images/sele.jpg"
import emma from"../../src/Images/emma.jpg"
import dul from"../../src/Images/dul.jpg"
import fish from"../../src/Images/fish.jpg"

const Legacy=()=>{
    return(
    <div id="bin">
        <Header/>
        <div id="img">
            <img src={emma} alt="" />
        </div>
       <div className="spec">
            <div className="het drill cater you">
                <img src={fish} alt="" id="fish"/>
                <div id="swell">
                    <h2>DOMAIN NORTHSIDE</h2>
                    <p>Come visit us our new store located at the Domain Northside in Autin, Texas!</p>
                    <h3>Hours:</h3>
                    <p>Monday-Thursday: 10AM-7PM Friday-Saturday: 10AM-8PM Sunday:11PM</p>
                    <h3>Albion @ Domain Northside</h3>
                    <p>3200 Palm Way Suite 136 Austin, TX 78758</p>
                    <strong>Phone:</strong>(512)<span>923-6742</span>
                    <a href=""><button>FOLLOW @ALBIONFITDOMAIN NORTHSIDE</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het drill pet you">
                <img src={dul} alt="" id="fish"/>
                <div id="swell">
                    <h2>NORTH HIRING</h2>
                    <p>We are Looking for sfun and exciting people to join iur team in Austin, Texas</p>
                    <a href=""><button>GET MORE DETAILS</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het drill pet you">
                <img src={sele} alt=""id="fish" />
                <div id="swell">
                    <h2>STORE EVENTS</h2>
                    <p>Save the date and join us for some fun and stay up to date and events near you!</p>
                    <a href=""><button>VIEW DOMAIN NORTHSIDE EVENTS</button></a>
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