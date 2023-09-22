import albion from "../../src/Images/albion.png";
import { X } from "@phosphor-icons/react";
import { List } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [closed, setClosed] = useState(true);
  return (
    <div className="header">
      <img src={albion} alt="" />
      <ul id="nav" className={`nav-open ${closed? "nav-hidden" : "nav-show"}`}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/new">New</Link>
        </li>
        <li>
          <Link to="/accessories">Accessories</Link>
        </li>
        <li>
          <Link to="/stores">Stores</Link>
        </li>
        <div id="times"></div>
      </ul>
      <div id="bar">
        {closed ? (
          <div onClick={() => setClosed(false)}>
            <List size={42} />
          </div>
        ) : (
          <div onClick={()=>setClosed(true)}>
            <X size={35} />
          </div>
        )}
      </div>
    </div>
  );
}
