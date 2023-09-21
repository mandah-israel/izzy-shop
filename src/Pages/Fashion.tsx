import Header from "../Component/Header"
import Footer from "../Component/Footer"
import chom from"../../src/Images/chom.jpg"
import coral from"../../src/Images/coral.jpg"
import hit from"../../src/Images/hit.jpg"
import north from"../../src/Images/north.jpg"

const Fashion=()=>{
    return(
    <div id="bin">
        <Header/>
        <div id="img">
            <img src={hit} alt="" />
        </div>
       <div className="spec">
            <div className="het drill polo you">
                <img src={north} alt="" id="fish"/>
                <div id="swell">
                    <h2>FASHION PLACE MALL</h2>
                    <p>Conveniently located in the heart of Northern Utah-the second store in our home state!</p>
                    <h3>ALBION @ FASHION PLACE</h3>
                    <p>6191 S State Street, Suite C262 Murray, UT 84107 (Across from Zars)</p>
                    <strong>Phone:</strong>(801)<span>560-7581</span>
                    <h3>Hours:</h3>
                    <p>Monday-Thursday:10AM-8PM Friday-Saturday: 10AM-9AM Sunday: 12AM-6AM</p>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het drill pet you">
                <img src={chom} alt=""id="fish" />
                <div id="swell">
                    <h2>FELLOW US</h2>
                    <p>Follow along on our Fashion Place Instagram for sneak peeks, giveaways, and more.</p>
                    <a href=""><button>@ALBIONFITFASHIONPLACE</button></a>
                </div>
            </div>
         </div>
         <div className="spec">
            <div className="het drill pet you">
                <img src={coral} alt=""id="fish" />
                <div id="swell">
                    <h2>STORE EVENTS</h2>
                    <p>Stay up to date on all local store events and join us for store event near you!.</p>
                    <a href=""><button>VIEW FASHION PLACE EVENTS</button></a>
                </div>
            </div>
         </div>
         <div className="footer">
            <Footer/>
         </div>
    </div>
    )
}
export default Fashion