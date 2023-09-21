import Header from "../Component/Header";
import Footer from "../Component/Footer";
import uper from"../../src/Images/uper.jpg"
import{Star} from"@phosphor-icons/react"


const Uper=()=>{
    return(
        <div id="bin">
            <Header/>
            <div className="div">
          <img src={uper} alt="" />
          <div id="sow">
          <h2>ANTRACITE JET SETTERS</h2>
          <p>Labor Day sale Some exclusives. <a href="">click here details</a></p>
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
          <span>138,000+ 5 Star Reviews</span>
          <div className="brace">
          <h3>$140.00</h3>
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
export default Uper