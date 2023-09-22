import Header from "../Component/Header"
import Footer from "../Component/Footer"
import ayo from"../../src/Images/ayo.jpg"
import vex from"../../src/Images/vex.jpg"
import till from"../../src/Images/till.jpg"
import coll from"../../src/Images/coll.jpg"
import gill from"../../src/Images/gill.jpg"
import tip from"../../src/Images/tip.jpg"
import uper from"../../src/Images/uper.jpg"
import snick from"../../src/Images/snick.jpg"
import suit from"../../src/Images/suit.jpg"
import spi from"../../src/Images/spi.jpg"
import short from"../../src/Images/short.jpg"
import fix from"../../src/Images/fix.jpg"
import{Star} from"@phosphor-icons/react"
import { Link } from "react-router-dom";


const New=()=>{
    return(
    <div id="bin">
        <Header/>
        <div id="smart">
          <h1>NEW ARRIVALS</h1>
        </div>
        <div className="pro-con">
          <div className="pro">
            <Link to="/ayo"><img src={ayo} alt="" /></Link>
            <h3>BLUSH ROSE NEO CROP SWEAT SHIRT</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$170.40</h5>
          </div>
          <div className="pro">
            <Link to="/coll"><img src={coll} alt="" /></Link>
            <h3>GO TO CREW,WHITE TENNIS GRAPHIC</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$130.40</h5>
          </div>
          <div className="pro">
            <Link to="/gill"><img src={gill} alt="" /></Link>
            <h3>BASIC CREW, NECK TEE, NORTH SHORE</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$140.10</h5>
          </div>
          <div className="pro">
            <Link to="/fix"><img src={fix} alt="" /></Link>
            <h3>VENUS TANK, ROSE BLACK</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$310.80</h5>
          </div>
          <div className="pro">
            <Link to="/tip"><img src={tip} alt="" /></Link>
            <h3>AUDUREY WIDE LEG PANTS, ROSE BLACK</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$190.40</h5>
          </div>
          <div className="pro">
            <Link to="/till"><img src={till} alt="" /></Link>
            <h3>BOMBER JACKET, ANTRACITE</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$160.30</h5>
          </div>
          <div className="pro">
            <Link to="/uper"><img src={uper} alt="" /></Link>
            <h3>ANTRACITE JET SETTERS</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$180.20</h5>
          </div>
          <div className="pro">
            <Link to="/vex"><img src={vex} alt="" /></Link>
            <h3>SANTORINI HIGH WAISTED SWIM SKIRT</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$100.50</h5>
          </div>
          <div className="pro">
            <Link to="/snick"><img src={snick} alt="" /></Link>
            <h3>BLACK WINDOW PANE BOW BELT CAPRI</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$150.50</h5>
          </div>
          <div className="pro">
            <Link to="/suit"><img src={suit} alt="" /></Link>
            <h3>ROSE BLACK BOMBER JACKET</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$40.50</h5>
          </div>
          <div className="pro">
            <Link to="/spi"><img src={spi} alt="" /></Link>
            <h3>THE COCO LONG SLEEVE BLACK-WHITE</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$140.50</h5>
          </div>
          <div className="pro">
            <Link to="/short"><img src={short} alt="" /></Link>
            <h3>BLACK BERMUDA SHORTS</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$40.50</h5>
          </div>
        </div>
        <div className="footer">
        <Footer/>
      </div>
    </div>
    )
}
export default New