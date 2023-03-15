import React, { useState } from 'react';
import men1 from "../images/men1.jpg";
import './Navbar.css';


export default function DropCard() {
  const [dropdown, setDropdown] = useState(false);
  const toggleOpen = () => setDropdown(!dropdown);

 return (
    <div className="dropdown">
        <img className="rounded-circle person-icon dropdown-toggle" src={men1} onClick={toggleOpen}/>
        
        <div id=""
          className={`dropdown-menu ${dropdown ? 'show' : ''}`}
          aria-labelledby="dropdownMenuButton"
          >
             <a className="dropdown-item dropdownwordbig">Jose Leos</a>
    <a class="dropdown-item dropdownwordsmall">name@emaple.com</a>
    <a class="dropdown-item dropdownwordsmall">My Prfile</a>
    <a class="dropdown-item dropdownwordsmall">Account Settings</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item dropdownwordsmall"> <i class="bi bi-heart-fill"></i> My Likes</a>
    <a class="dropdown-item dropdownwordsmall"><i class="bi bi-bag-fill"></i> My Collections</a>
    <a class="dropdown-item dropdownwordsmall"><i class="bi bi-fire"></i> Go Pro</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item dropdownwordsmall">Sign Out</a>
         </div>
     </div>
  );
}