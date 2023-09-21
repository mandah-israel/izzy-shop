import Header from "../Component/Header";
import Footer from "../Component/Footer";
import snick from"../../src/Images/snick.jpg"
import{Star} from"@phosphor-icons/react"


const Snick=()=>{
    return(
        <div id="bin">
            <Header/>
            <div className="div">
          <img src={snick} alt="" />
          <div id="sow">
          <h2>BLACK WINDOW PANE BOW BELT CAPRI</h2>
          <p>Labor Day sale Some exclusives. <a href="">click here details</a></p>
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
          <Star size={30} />
          <span>38,000+ 5 Star Reviews</span>
          <div className="brace">
          <h3>$150.00</h3>
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
export default Snick