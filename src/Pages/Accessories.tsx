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
const Accessories=()=>{
    return(
     <div id="bin">
       <Header/>
       <div id="smart">
          <h1>ACCESSORIES</h1>
        </div>
        <div className="pro-con">
          <div className="pro">
            <a href="/gie"><img src={gie} alt="" /></a>
            <h3>GEOMETRY TOWEL</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$50.40</h5>
          </div>
          <div className="pro">
            <a href="/grey"><img src={grey} alt="" /></a>
            <h3>ALBION BEANIE</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$50.40</h5>
          </div>
          <div className="pro">
            <a href="/sil"><img src={sil} alt="" /></a>
            <h3>LITTLE FIELD LANE SATELLITE NECKLACE</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$60.10</h5>
          </div>
          <div className="pro">
            <a href="/cole"><img src={cole} alt="" /></a>
            <h3>ALBION X NOMADIX TOWEL</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$90.40</h5>
          </div>
          <div className="pro">
            <a href="/coll"><img src={coll} alt="" /></a>
            <h3>GO TO CREW,WHITE TENNIS GRAPHIC</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$90.40</h5>
          </div>
          <div className="pro">
            <a href="/dele"><img src={dele} alt="" /></a>
            <h3>CITY JUMP SUIT,HOUNDSMOOTH</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$30.30</h5>
          </div>
          <div className="pro">
            <a href="/cut"><img src={cut} alt="" /></a>
            <h3>BASIC CREW NECK TEE,WHITE BAMBOO GRAPHICS</h3>
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <h5>$80.20</h5>
          </div>
          <div className="pro">
            <a href="/till"><img src={till} alt="" /></a>
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