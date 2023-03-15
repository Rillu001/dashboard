import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from './Dropdown';
import './Navbar.css';




function Navbar() {
  return (
    <div className="container">
      <div className="row">
      <nav className="navbar navbar-expand-lg">
   
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form className="form-inline">
        <input className="form-control wordform" type="search" placeholder="Search" aria-label="Search"/>
        
      </form>

      <ul className="navbar-nav mx-auto">
        
        <li className="nav-item">
        <i class="bi bi-bell-fill"></i>
       
        </li>
        <li className="nav-item dropdown">
        <Dropdown/>
        </li>
        
      </ul>
      
    </div>
  </nav>
  
      </div>
    </div>
    
  );
}

export default Navbar;