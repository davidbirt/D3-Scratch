import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  _dataServ : DataService;
  constructor(private dataSrv : DataService) {
    this._dataServ = dataSrv;
  }

  ngOnInit() {
    var margin = {top:20, right:30, bottom: 20, left:30}
    var width = (window.innerWidth * .80) + margin.right + margin.left,
      height = (window.innerHeight*.80) + margin.top + margin.bottom,
      barWidth = 20;

    var yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([0,d3.max(this._dataServ.numbericValues)]);
    
    var xScale = d3.scaleBand()
      .domain(this._dataServ.states)
      .rangeRound([0,width]);

    var yAxis = d3.axisLeft(yScale)
    var xAxis = d3.axisBottom(xScale);

    var chart = d3.select('.chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    var bars = chart.selectAll('g')
        .data(this._dataServ.currentValues)
      .enter().append('g')
        .attr("transform", (d,i) => { return  "translate("+ i * xScale.bandwidth() + ",0)"; })
        .style('fill', () => {
          var color = this._dataServ.getRandomRgb();
          return d3.rgb(color.r,color.g,color.b).toString(); 
        })

    bars.append("rect")
        .attr("height", (d,i) => {
          var value = yScale(d.value);
          // console.log(d.value, value);
          return height - value})
        .attr("width", (d,i) => {return xScale.bandwidth();})
        .attr('y', (d) => { return height; })
        .transition().duration(1800).ease(d3.easeBounce)
        .attr('y', (d) => { return yScale(d.value) - margin.bottom;});

    /**
     * Append some text in there for magnitude of the value being plotted.
     */
    // bars.append('text')
    //     .attr("y", (d,i) => { return height - 10; })
    //     .style('fill', 'white')
    //     .attr("dy", ".20em")
    //     .attr('x', (d, i) => { 
    //       var bandwidth = xScale.bandwidth();
    //       // console.log(bandwidth)
    //       return 6;
    //     })
    //     .text((d) => { return d.state; })
    //     .transition().duration(700).delay(2000).ease(d3.easeBounce)
    //     .style('fill', 'black');

    bars.append('text')
          .text((d)=>{ return d.Q1;})
          .call(xAxis);
    
   
  }

}
