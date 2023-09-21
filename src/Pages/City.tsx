import Header from "../Component/Header"
import Footer from "../Component/Footer"
import chike from"../../src/Images/chike.jpg"
import south from"../../src/Images/south.jpg"
import dere from"../../src/Images/dere.jpg"
import land from"../../src/Images/land.jpg"

const City=()=>{
    return(
    <div id="bin">
        <Header/>
        <div id="img">
            <img src={land} alt="" />
        </div>
       <div className="spec">
            <div className="het drill goat you">
                <img src={chike} alt="" id="fish"/>
                <div id="swell">
                    <h2>CITY CREEK MALL</h2>
                    <p>Our Flaship store,located in the heart downtown Salt Lake City, Utah.</p>
                    <h3>Hours:</h3>
                    <p>Monda-Thursday: 10AM-8pm Friday-Saturday: 10AM-9AM Sunday:Closed</p>
                    <h3>Albion @ City Creek</h3>
                    <p>51 Man St,#116 Salt Lake City, UT 84101 (NEXT to Apple Stores)</p>
                    <strong>Phone:</strong>(801)<span>560-7581</span>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het drill pet you">
                <img src={south} alt="" id="fish"/>
                <div id="swell">
                    <h2>FELLOW US</h2>
                    <p>Join us on our City Creek Instagram for sneak peeks, early access, and more.</p>
                    <a href=""><button>FOLLOW @ALIBIONFITCITYCREEK</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het drill pet you">
                <img src={dere} alt=""id="fish" />
                <div id="swell">
                    <h2>STORE EVENTS</h2>
                    <p>Stay up to date on all local store events and join us for some fun!.</p>
                    <a href=""><button>VIEW CITY CREEK EVENTS</button></a>
                </div>
            </div>
         </div>
         <div className="footer">
            <Footer/>
         </div>
    </div>
    )
}
export default City