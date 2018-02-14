import { Injectable } from '@angular/core';
import { StateData } from '../models/StateData';

@Injectable()
export class DataService {

  constructor() { }
  DenialData : StateData[] =
  [ 
   {"state":"AK", year:2015, x:null, y:null, x0:null, y0:null, "Q1":0,"Q2":0,"Q3":3,"Q4":4},
   {"state":"AL", year:2015, x:null, y:null, x0:null, y0:null, "Q1":1045,"Q2":67,"Q3":51,"Q4":11},
   {"state":"AR", year:2015, x:null, y:null, x0:null, y0:null, "Q1":220,"Q2":15,"Q3":7,"Q4":1},
   {"state":"AZ", year:2015, x:null, y:null, x0:null, y0:null, "Q1":20,"Q2":34,"Q3":106,"Q4":116},
   {"state":"CA", year:2015, x:null, y:null, x0:null, y0:null, "Q1":602,"Q2":236,"Q3":116,"Q4":4},
   {"state":"CO", year:2015, x:null, y:null, x0:null, y0:null, "Q1":4,"Q2":1,"Q3":820,"Q4":57},
   {"state":"CT", year:2015, x:null, y:null, x0:null, y0:null, "Q1":6,"Q2":24,"Q3":14,"Q4":18},
   {"state":"DC", year:2015, x:null, y:null, x0:null, y0:null, "Q1":4,"Q2":4,"Q3":28,"Q4":7},
   {"state":"DE", year:2015, x:null, y:null, x0:null, y0:null, "Q1":1,"Q2":1,"Q3":1,"Q4":0},
   {"state":"FL", year:2015, x:null, y:null, x0:null, y0:null, "Q1":95,"Q2":159,"Q3":1410,"Q4":88},
   {"state":"GA", year:2015, x:null, y:null, x0:null, y0:null, "Q1":253,"Q2":278,"Q3":1093,"Q4":41},
   {"state":"HI", year:2015, x:null, y:null, x0:null, y0:null, "Q1":15,"Q2":1,"Q3":2,"Q4":0},
   {"state":"IA", year:2015, x:null, y:null, x0:null, y0:null, "Q1":58,"Q2":36,"Q3":32,"Q4":96},
   {"state":"ID", year:2015, x:null, y:null, x0:null, y0:null, "Q1":1,"Q2":14,"Q3":18,"Q4":39},
   {"state":"IL", year:2015, x:null, y:null, x0:null, y0:null, "Q1":444,"Q2":39,"Q3":41,"Q4":13},
   {"state":"IN", year:2015, x:null, y:null, x0:null, y0:null, "Q1":140,"Q2":196,"Q3":219,"Q4":12},
   {"state":"KS", year:2015, x:null, y:null, x0:null, y0:null, "Q1":19,"Q2":20,"Q3":46,"Q4":158},
   {"state":"KY", year:2015, x:null, y:null, x0:null, y0:null, "Q1":229,"Q2":17,"Q3":20,"Q4":36},
   {"state":"LA", year:2015, x:null, y:null, x0:null, y0:null, "Q1":212,"Q2":220,"Q3":513,"Q4":150},
   {"state":"MA", year:2015, x:null, y:null, x0:null, y0:null, "Q1":47,"Q2":24,"Q3":204,"Q4":152},
   {"state":"MD", year:2015, x:null, y:null, x0:null, y0:null, "Q1":29,"Q2":51,"Q3":141,"Q4":39},
   {"state":"ME", year:2015, x:null, y:null, x0:null, y0:null, "Q1":2,"Q2":6,"Q3":7,"Q4":13},
   {"state":"MI", year:2015, x:null, y:null, x0:null, y0:null, "Q1":6,"Q2":8,"Q3":82,"Q4":165},
   {"state":"MN", year:2015, x:null, y:null, x0:null, y0:null, "Q1":208,"Q2":24,"Q3":100,"Q4":5},
   {"state":"MO", year:2015, x:null, y:null, x0:null, y0:null, "Q1":114,"Q2":211,"Q3":142,"Q4":80},
   {"state":"MS", year:2015, x:null, y:null, x0:null, y0:null, "Q1":10,"Q2":14,"Q3":21,"Q4":10},
   {"state":"MT", year:2015, x:null, y:null, x0:null, y0:null, "Q1":7,"Q2":1,"Q3":5,"Q4":8},
   {"state":"NC", year:2015, x:null, y:null, x0:null, y0:null, "Q1":11,"Q2":24,"Q3":338,"Q4":132},
   {"state":"ND", year:2015, x:null, y:null, x0:null, y0:null, "Q1":45,"Q2":27,"Q3":5,"Q4":0},
   {"state":"NE", year:2015, x:null, y:null, x0:null, y0:null, "Q1":0,"Q2":11,"Q3":9,"Q4":12},
   {"state":"NH", year:2015, x:null, y:null, x0:null, y0:null, "Q1":1,"Q2":48,"Q3":30,"Q4":0},
   {"state":"NJ", year:2015, x:null, y:null, x0:null, y0:null, "Q1":16,"Q2":7,"Q3":66,"Q4":189},
   {"state":"NM", year:2015, x:null, y:null, x0:null, y0:null, "Q1":0,"Q2":1,"Q3":1,"Q4":75},
   {"state":"NV", year:2015, x:null, y:null, x0:null, y0:null, "Q1":5,"Q2":1,"Q3":3,"Q4":1},
   {"state":"NY", year:2015, x:null, y:null, x0:null, y0:null, "Q1":39,"Q2":453,"Q3":515,"Q4":44},
   {"state":"OH", year:2015, x:null, y:null, x0:null, y0:null, "Q1":500,"Q2":259,"Q3":235,"Q4":9},
   {"state":"OK", year:2015, x:null, y:null, x0:null, y0:null, "Q1":55,"Q2":38,"Q3":46,"Q4":45},
   {"state":"OR", year:2015, x:null, y:null, x0:null, y0:null, "Q1":336,"Q2":59,"Q3":25,"Q4":2},
   {"state":"PA", year:2015, x:null, y:null, x0:null, y0:null, "Q1":175,"Q2":62,"Q3":459,"Q4":16},
   {"state":"PR", year:2015, x:null, y:null, x0:null, y0:null, "Q1":1,"Q2":4,"Q3":0,"Q4":0},
   {"state":"RI", year:2015, x:null, y:null, x0:null, y0:null, "Q1":1,"Q2":2,"Q3":1,"Q4":0},
   {"state":"SC", year:2015, x:null, y:null, x0:null, y0:null, "Q1":707,"Q2":45,"Q3":7,"Q4":1},
   {"state":"SD", year:2015, x:null, y:null, x0:null, y0:null, "Q1":56,"Q2":1,"Q3":2,"Q4":1},
   {"state":"SE", year:2015, x:null, y:null, x0:null, y0:null, "Q1":0,"Q2":0,"Q3":0,"Q4":0},
   {"state":"TN", year:2015, x:null, y:null, x0:null, y0:null, "Q1":114,"Q2":190,"Q3":138,"Q4":6},
   {"state":"TX", year:2015, x:null, y:null, x0:null, y0:null, "Q1":1418,"Q2":482,"Q3":6,"Q4":88},
   {"state":"UT", year:2015, x:null, y:null, x0:null, y0:null, "Q1":61,"Q2":10,"Q3":3,"Q4":2},
   {"state":"VA", year:2015, x:null, y:null, x0:null, y0:null, "Q1":244,"Q2":76,"Q3":75,"Q4":40},
   {"state":"VT", year:2015, x:null, y:null, x0:null, y0:null, "Q1":0,"Q2":0,"Q3":0,"Q4":1},
   {"state":"WA", year:2015, x:null, y:null, x0:null, y0:null, "Q1":48,"Q2":658,"Q3":86,"Q4":34},
   {"state":"WI", year:2015, x:null, y:null, x0:null, y0:null, "Q1":27,"Q2":34,"Q3":44,"Q4":49},
   {"state":"WV", year:2015, x:null, y:null, x0:null, y0:null, "Q1":9,"Q2":17,"Q3":30,"Q4":3},
   {"state":"WY", year:2015, x:null, y:null, x0:null, y0:null, "Q1":0,"Q2":0,"Q3":1,"Q4":0}
 ]

private currentQuarter:string = "Q1";
get currentValues(): any[]{
  return this.DenialData.filter((i,n)=>{ return i[this.currentQuarter] > 0;}).map((d, i) => { return { 'value': d[this.currentQuarter], 'state': d.state}; });
}

get numbericValues() : number[]{
  return this.DenialData.map((i,n)=>{ return i[this.currentQuarter]});
}
get data() : StateData[]{
  return this.DenialData.filter((i,n)=>{ return i[this.currentQuarter] > 0;})
}

get states() : string[]{
  return this.DenialData.filter((i,n)=>{ return i[this.currentQuarter] > 0;}).map((d,i) => {return d.state;})
}
 getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return {r,g,b};
}

 


}
