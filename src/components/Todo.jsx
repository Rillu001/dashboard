import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.css';



function Todo() {
  return (
    

  

<div className="col-md-12">
 <div className="card minifour-yellow-todo">
 <div className="card-body">
<h5 className="card-big">To-Do </h5>

<div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked/>
    <label className="form-check-label" for="exampleCheck1">Call Rohan</label>
  </div>

  <div class="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked/>
    <label className="form-check-label" for="exampleCheck1">Meeting at 7pm</label>
  </div>

  <div class="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Fix navbar bug issues</label>
  </div>
  <button type="button" class="btn btn-dark">Add Task</button>
</div>
</div>
</div>



  

 
  );
}

export default Todo;