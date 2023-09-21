import{FacebookLogo} from "@phosphor-icons/react"
import{YoutubeLogo} from "@phosphor-icons/react"
import{TwitterLogo} from "@phosphor-icons/react"
import{PinterestLogo} from "@phosphor-icons/react"
import{InstagramLogo} from "@phosphor-icons/react"
import {Copyright} from "@phosphor-icons/react"


export default function Footer(){
    return(
    <div id="sell">
      <div className="footer">
        <div className="fele">
            <h3>SERVICE</h3>
            <a href="">FAQ</a>
            <a href="">Shopping & Returns</a>
            <a href="">Contact Us</a>
            <a href="">Fit Guide</a>
            <a href="">wish List</a>
        </div>
        <div className="fele">
            <h3>COMPANY</h3>
            <a href="">About Us</a>
            <a href="">Careers</a>
            <a href="">Callab With Us</a>
            <a href="">Instagram Feed</a>
            <a href="">Blog: Behind the Seams</a>
        </div>
        <div className="fele">
            <h3>Stores</h3>
            <a href="">City Creek Center-SLC, UT</a>
            <a href="">Fashion Place Mall-SLC, UT</a>
            <a href="">Legacy West-Dallas, TX</a>
            <a href="">Scottsdale Quarter- AZ</a>
            <a href="">Westfield UTC- San Deigo, CA</a>
        </div>
        <div className="fele span">
            <h3>Email SIGNUP</h3>
            <p>VIP access to sales, launches & more</p>
            <div className="sign">
                <input type="text" placeholder=" Enter email" />
                <button>SIGNUP</button>
            </div>
        </div>
      </div>
      <div className="icon">
      <a href="" className="speak"><FacebookLogo size={40}/></a>
      <a href="" className="speak"><InstagramLogo size={40} /></a>
      <a href="" className="speak"><PinterestLogo size={40} /></a>
      <a href="" className="speak"><TwitterLogo size={40} /></a>
      <a href="" className="speak"><YoutubeLogo size={40} /></a>
      </div>
      <div className="spy">
            <Copyright size={25}/>
            <p>Copyright 2023 Albion</p>
            </div>
    </div>
    )
}