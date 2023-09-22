import Header from "../Component/Header"
import Footer from "../Component/Footer"
import gie from "../../src/Images/gie.jpg"
import grey from "../../src/Images/grey.jpg"
import sil from "../../src/Images/sil.jpg"
import cole from "../../src/Images/cole.jpg"
import coll from "../../src/Images/coll.jpg"
import dele from "../../src/Images/dele.jpg"
import cut from "../../src/Images/cut.jpg"
import till from "../../src/Images/till.jpg"
import { Star } from "@phosphor-icons/react"
import { Link } from "react-router-dom";
const Accessories=()=>{
    return(
     <div id="bin">
       <Header/>
       <div id="smart">
          <h1>ACCESSORIES</h1>
        </div>
        <div className="pro-con">
          <div className="pro">
            <Link to="/gie"><img src={gie} alt="" /></Link>
            <h3>GEOMETRY TOWEL</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$50.40</h5>
          </div>
          <div className="pro">
            <Link to="/grey"><img src={grey} alt="" /></Link>
            <h3>ALBION BEANIE</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$50.40</h5>
          </div>
          <div className="pro">
            <Link to="/sil"><img src={sil} alt="" /></Link>
            <h3>LITTLE FIELD LANE SATELLITE NECKLACE</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$60.10</h5>
          </div>
          <div className="pro">
            <Link to="/cole"><img src={cole} alt="" /></Link>
            <h3>ALBION X NOMADIX TOWEL</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$90.40</h5>
          </div>
          <div className="pro">
            <Link to="/coll"><img src={coll} alt="" /></Link>
            <h3>GO TO CREW,WHITE TENNIS GRAPHIC</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$90.40</h5>
          </div>
          <div className="pro">
            <Link to="/dele"><img src={dele} alt="" /></Link>
            <h3>CITY JUMP SUIT,HOUNDSMOOTH</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$30.30</h5>
          </div>
          <div className="pro">
            <Link to="/cut"><img src={cut} alt="" /></Link>
            <h3>BASIC CREW NECK TEE,WHITE BAMBOO GRAPHICS</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$80.20</h5>
          </div>
          <div className="pro">
            <Link to="/till"><img src={till} alt="" /></Link>
            <h3>TRACK SUIT,ROSE BLACK</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$70.00</h5>
          </div>
        </div>
        <div className="footer">
        <Footer/>
      </div>
     </div>
    )
}
export default Accessories