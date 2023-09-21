import albion from "../../src/Images/albion.png";
import { X } from "@phosphor-icons/react";
import { List } from "@phosphor-icons/react";
import { useState } from "react";

export default function Header() {
  const [closed, setClosed] = useState(true);
  return (
    <div className="header">
      <img src={albion} alt="" />
      <ul id="nav" className={`nav-open ${closed? "nav-hidden" : "nav-show"}`}>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/new">New</a>
        </li>
        <li>
          <a href="/accessories">Accessories</a>
        </li>
        <li>
          <a href="/stores">Stores</a>
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
