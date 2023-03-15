import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Sidebar.css';
import logo from "../images/girl.jpg";
import fb from "../images/fb.png";
import dribble from "../images/dribble.png";
import linkedin from "../images/linkedin.png";
import discord from "../images/discord.png";
import google from "../images/google.png";

function Sidebar() {
  return (
    <div className="container">
        <div className="row">
        <div className="card parent-card">
    <div className="card-body">
      <div className="row">
        <div className="col-md-12">
      <div className="card child-card">
    <div className="card-body">
    <img className="rounded-circle main-circle" src={logo} alt="girl Image" />
      <h5 className="card-title">EKKO</h5>
      <h6 className="card-subtitle mb-2 text-muted">www.ekko.network</h6>
      <img className="rounded" src={fb} alt="Facebook icon" />
      <img className="rounded" src={dribble} alt="Facebook icon" />
      <img className="rounded" src={linkedin} alt="Facebook icon" />
      <img className="rounded" src={discord} alt="Facebook icon" />
      <img className="rounded" src={google} alt="Facebook icon" />
    </div>
  </div>
  </div>

  <div className="col-md-12">
  <div className="list-group">
  <a className="list-item-active" aria-current="true">
  <i className="bi bi-cart icon"></i> Orders
  </a>
  <a className="list-item"><i className="bi bi-people icon"></i> Customers</a>
  <a className="list-item"><i className="bi bi-box-seam icon"></i> Products</a>
  <a className="list-item"><i className="bi bi-bag icon"></i> Marketing</a>
  <a className="list-item"><i className="bi bi-bookmark icon"></i> Discounts</a>
</div>
  </div>

  <div className="col-md-12 min-card">
  <div className="card mini-card">
    <div className="card-body">
      <div class="row">
        <div class="col-md-3"><i class="bi bi-person-circle"></i></div>
        <div class="col-md-9">
        <p className="card-titlemini"> Personal Account</p>
      <p className="card-subtitlemini text-muted">switch to pro plan</p>
        </div>
      </div>
    </div>
  </div>
  </div>

      </div>
    </div>
  </div>

  <div class="col-md-12 lastcol">
  <i class="bi bi-gear lasticon"></i>
  <i class="bi bi-brightness-high lasticon"></i>
  </div>
        </div>
    </div>
    
  );
}

export default Sidebar;