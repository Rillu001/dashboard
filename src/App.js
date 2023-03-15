import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row AppMain">
        <div className="col-md-2"><Sidebar/></div>
        <div className="col-md-10">
          <div class="row">
            <div class="col-md-12">
              <Navbar/>
            </div>
            <div class="col-md-12">
              <Mainpage/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
