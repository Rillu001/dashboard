import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mainpage.css';
import Linechart from './Linechart';
import Barchart from './Barchart';
import Todo from './Todo';
import Team from './Team';

function Mainpage() {
  return (
    <div className="container">
    <div className="row">

    <div className="row card-deck">

       <div className="col-md-3">
        <div className="card minifour-yellow">
        <div className="card-body">
      <p className="card-small">Total Sales</p>
      <h2 className="card-big">721K <span className="spandetail">+1.01% <i class="bi bi-graph-up-arrow"></i></span></h2>
    </div>
    </div>
    </div>

    <div className="col-md-3">
        <div className="card minifour-black">
        <div className="card-body">
      <p className="card-small-b">Visits</p>
      <h2 className="card-big-b">367K <span className="spandetail-b">+9.15% <i class="bi bi-graph-up-arrow"></i></span></h2>
    </div>
    </div>
    </div>

    <div className="col-md-3">
        <div className="card minifour-yellow">
        <div className="card-body">
      <p className="card-small">New Users</p>
      <h2 className="card-big">1156 <span className="spandetail">-0.56% <i class="bi bi-graph-down-arrow"></i></span></h2>
    </div>
    </div>
    </div>

    <div className="col-md-3">
        <div className="card minifour-black">
        <div className="card-body">
      <p className="card-small-b">Active Users</p>
      <h2 className="card-big-b">239K <span className="spandetail-b">-1.48% <i class="bi bi-graph-down-arrow"></i></span></h2>
    </div>
    </div>
    </div>


    <div className="col-md-6">
        <div className="row">
            <div className="col-md-12">
            <div className="card minifour-yellow">
        <div className="card-body">
     <Linechart/>
    </div>
    </div>
            </div>

            <div className="col-md-7">
            <div className="card minifour-yellow">
        <div className="card-body">
     <Todo/>
    </div>
    </div>
            </div>
        </div>
    </div>



    <div className="col-md-6">
        <div className="row">
            <div className="col-md-12">
            <div className="card minifour-yellow">
        <div className="card-body">
     <Barchart/>
     <h5 className="card-big order">Orders </h5>
     <p className="num">(+23) <span class="numtext"> in last one week</span></p>
    </div>
    </div>
            
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-9">
            <div className="card minifour-yellow">
        <div className="card-body">
     <Team/>
    </div>
    </div>
            </div>
        </div>
    </div>

    </div>


    
  </div>
  </div>

 
  );
}

export default Mainpage;