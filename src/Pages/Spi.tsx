import Header from "../Component/Header";
import Footer from "../Component/Footer";
import spi from"../../src/Images/spi.jpg"
import{Star} from"@phosphor-icons/react"


const Spi=()=>{
    return(
        <div id="bin">
            <Header/>
            <div className="div">
          <img src={spi} alt="" />
          <div id="sow">
          <h2>THE COCO LONG SLEEVE BLACK-WHITE</h2>
          <p>Labor Day sale Some exclusives. <a href="">click here details</a></p>
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
          <span>38,000+ 5 Star Reviews</span>
          <div className="brace">
          <h3>$110.00</h3>
          <button>Add TO Cart</button>
          </div>
        </div>
     </div>
     <div className="footer">
        <Footer/>
      </div>
    </div>
    )
}
export default Spi