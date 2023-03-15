import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Team.css';
import men1 from "../images/men1.jpg";
import men2 from "../images/men2.jpg";
import women1 from "../images/women1.jpg";
import women2 from "../images/women2.jpg";


function Team() {
  return (
    

    

<div className="col-md-12">
 <div className="card minifour-yellow-todo">
 <div className="card-body">
<h5 className="card-big">Team </h5>

<div className="form-group">
<p className="teamname"><img className="rounded-circle person-icon" src={men1} alt="Rohan Srivastava" />Rohan Srivastava <i className="bi bi-telephone cal-msg"></i> <i className="bi bi-chat-dots cal-msg"></i>  </p>
  </div>

  <div className="form-group">
<p className="teamname"><img className="rounded-circle person-icon" src={men2} alt="Piyush Joshi" />Piyush Joshi <i className="bi bi-telephone cal-msg"></i> <i className="bi bi-chat-dots cal-msg"></i>  </p>
  </div>

  <div className="form-group">
<p className="teamname"><img className="rounded-circle person-icon" src={women1} alt="Sreeja Maheshwari" />Sreeja Maheshwari <i className="bi bi-telephone cal-msg"></i> <i className="bi bi-chat-dots cal-msg"></i>  </p>
  </div>

  <div className="form-group">
<p className="teamname"><img className="rounded-circle person-icon" src={women2} alt="Neha Trivedi" />Neha Trivedi <i className="bi bi-telephone cal-msg"></i> <i className="bi bi-chat-dots cal-msg"></i>  </p>
  </div>

  <button type="button" class="btn btn-dark">Add Member</button>
</div>
</div>
</div>



  

 
  );
}

export default Team;