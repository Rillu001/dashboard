import React, {Component} from "react";
import CanvasJSReact from './canvasjs.react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Linechart.css';

//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Linechart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			
		
			
			data: [{
				type: "line",
				xValueFormatString: "MMM YYYY",
				markerSize: 5,
				dataPoints: [
					{ x: new Date("2017- 01- 01"), y: 2 },
					{ x: new Date("2017- 02- 20"), y: 3 },
					{ x: new Date("2017- 03- 11"), y: 5 },
					{ x: new Date("2017- 04- 05"), y: 4 },
					{ x: new Date("2017- 05- 04"), y: 7 },
					{ x: new Date("2017- 06- 21"), y: 6 }
				]
			}]
		}


  return (
    

   

<div className="col-md-12">
 <div className="card minifour-yellow">
 <div className="card-body">
<h5 className="card-big">Activities 
<span className="spandetail">
<div class="form-group mini-form-group"> 
      <select id="inputState" class="form-control mini-form-control">
        <option selected>year</option>
        <option>1999</option>
      </select>
    </div>
    </span>
</h5>
</div>
<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>

</div>
</div>



  

 
  );
}
}

export default Linechart;