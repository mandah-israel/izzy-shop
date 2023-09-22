import Header from "../Component/Header";
import Footer from "../Component/Footer";
import sparo from "../../src/Images/sparo.jpg"
import suit from "../../src/Images/suit.jpg"
import colo from "../../src/Images/colo.jpg"
import snick from "../../src/Images/snick.jpg"
import coll from "../../src/Images/coll.jpg"
import golo from "../../src/Images/golo.jpg"
import cope from "../../src/Images/cope.jpg"
import{Star} from "@phosphor-icons/react"
import black from "../../src/Images/black.jpg"
import filla from "../../src/Images/filla.jpg"
import folo from "../../src/Images/folo.jpg"
import vere from "../../src/Images/vere.jpg"
import swim from "../../src/Images/tip.jpg"
import tip from "../../src/Images/swim.jpg"
import vot from "../../src/Images/vot.jpg"
import { Link } from "react-router-dom";


const Home=()=>{
    return(
      <div id="bin">
        <Header/>
        <div className="div">
          <img src={coll} alt="" />
          <div id="sow">
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
          <span>38,000+ 5 Star Reviews</span>
          <h2>LABOR DAY SALE</h2>
          <h3>20% OFF SITEWIDE</h3>
          <Link to="/new"><button>SHOP SALE</button></Link>
          <p>Labor Day sale Some exclusives. <a href="">click here details</a></p>
          </div>
        </div>
        <div id="smart">
            <h1>BEST SELLERS</h1>
         </div>
        <div className="pro-con">
          <div className="pro">
            <img src={black} alt="" />
            <h3>JET SETTERS</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$70.40</h5>
            <span>Sale</span>
          </div>
          <div className="pro">
            <img src={cope} alt=""/>
            <h3>BLACK BOMEBER</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$30.40</h5>
            <span>Sale</span>
          </div>
          <div className="pro">
            <img src={colo} alt="" />
            <h3>DESTINATION JOGGAS,BLACK</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$30.10</h5>
            <span>Sale</span>
          </div>
          <div className="pro">
            <img src={snick} alt="" />
            <h3>DESTINATION JOGGERS, SEA BREEZE</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$30.40</h5>
            <span>Sale</span>
          </div>
          <div className="pro">
            <img src={sparo} alt="" />
            <h3>BLACK BOMEBER</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$90.40</h5>
            <span>Sale</span>
          </div>
          <div className="pro">
            <img src={suit} alt="" />
            <h3>ROSE BLACK BOMBER JACKET</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$60.30</h5>
            <span>Sale</span>
          </div>
          <div className="pro">
            <img src={golo} alt="" />
            <h3>AUDREY WIDE LEG PANTS, BROWN CHECKERS</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$80.20</h5>
            <span>Sale</span>
          </div>
          <div className="pro">
            <img src={vot} alt="" />
            <h3>SANTORINI HIGH WAISTED SWIM SKIRT</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$40.50</h5>
            <span>Sale</span>
          </div>
        </div>
        <div className="pro-con bella">
          <div className="pro">
            <img src={filla} alt="" />
            <h3>SUPER SALES</h3>
          </div>
          <div className="pro">
            <img src={folo} alt="" />
            <h3>BEST SELLERS</h3>
          </div>
          <div className="pro">
            <img src={vere} alt="" />
            <h3>NEW ARRIVALS</h3>
          </div>
          <div className="pro">
            <img src={tip} alt="" />
            <h3>SWIM</h3>
          </div>
          <div className="pro">
            <img src={swim} alt="" />
            <h3>LIFESTYLE</h3>
          </div>
        </div>
        <div id="vere">
          <h2>SHOP @ALIBIONFIT</h2>
          <hr/>
          <p>Saw it on Instagram? Shop the look below.</p>
        </div>
        <div className="footer">
        <Footer/>
      </div>
    </div>
    )
}
export default Home