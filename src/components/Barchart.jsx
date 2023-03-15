import React, {Component} from "react";
import CanvasJSReact from './canvasjs.react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Linechart.css';

//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Barchart extends Component {	
  render() {
    const options = {
     
      data: [{				
                type: "column",
                dataPoints: [
                    { label: "India",  y: 0  },
                    { label: "Iran", y: 100  },
                    { label: "USA", y: 200  },
                    { label: "UAE",  y: 300  },
                    { label: "Greece",  y: 400  }
                ]
       }]
   }


  return (
    

    

<div className="col-md-12">
 <div className="card minifour-black-small">
 <div className="card-body">
</div>
<CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
</div>
</div>

  

 
  );
}
}

export default Barchart;