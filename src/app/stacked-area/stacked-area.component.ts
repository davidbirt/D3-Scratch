import { Component, OnInit, NgZone } from '@angular/core';
import * as d3 from 'd3';
import { StateData } from '../models/StateData';
import { Area } from 'd3';
import { DataService } from '../services/data-service.service';


@Component({
  selector: 'app-stacked-area',
  templateUrl: './stacked-area.component.html',
  styleUrls: ['./stacked-area.component.css']
})
export class StackedAreaComponent implements OnInit {

  _dataServ : DataService;
  newDataset : StateData[] = [];
  area: Area<StateData>;
  constructor(private zone : NgZone, private dataSrv : DataService) {
     this._dataServ = dataSrv;
  }

  ngOnInit() {

    var marginTop = 10;
    var marginBottom = 20;
    var marginRight = 15;
    var marginLeft = 30;
    var height = 680 - marginTop - marginBottom;
    var width = 880 - marginLeft - marginRight;

    var selection = d3.select('.chart')
    .append('svg')
    .attr("width", width + marginLeft + marginRight)
    .attr("height", height + marginTop + marginBottom);

    var baseGroup = selection
    .append("g")
    .attr("transform", "translate("+marginLeft+","+marginTop+")");


    var yScale = d3.scaleLinear()
    .range([height,0])
    .domain([0,100]);   


    var xScale = d3.scaleLinear()
    .range([0, width])
    .domain([0,3]);

    var colorScale = d3.scaleOrdinal()
    .range(["#4C82C3", "#F37B6D", "#6CC071", "#FFD900"]);

    var hoverLabel = d3.scaleLinear<string>()
    .domain([0,3])
    .range(["Q1", "Q2", "Q3", "Q4"]);

    var dataset = this._dataServ.DenialData;
    var states = this._dataServ.DenialData.map((n)=>{
      return n.state;
    });

    var newDataset = dataset.map(function (n,h) {
      return ["Q1", "Q2", "Q3", "Q4"].map(function (d, i) {
        return { x0:0, x: i, y: n[d], y0: 0, Q1: n.Q1, Q2: n.Q2, Q3: n.Q3, Q4: n.Q4, state: n.state, year:n.year };
      });
    });

    var area = d3.area<StateData>()
    .x(function(d) { 
      //console.log('dx',d.x);
      return xScale(d.x);
     })
    .y0(function(d) { return yScale(d.y0); })
    .y1(function(d) { 
      return yScale(d.y + d.y0); 
    });
 
    var ageGroup = baseGroup.selectAll(".valgroup")
    .data(newDataset)
    .enter()
    .append("g")
    .attr("class", "valgroup")
    .style("fill", () => {
      var color = this._dataServ.getRandomRgb();
       return d3.rgb(color.r,color.g,color.b).toString(); 
      })
    .attr("class", function(d, i) { 
        return d[i] != null ? d[i].state : ""; 
    });

    ageGroup.append("path")
    .attr("d", function(d) {
      var r =  area(d);
      return r;
    });
  }
}
