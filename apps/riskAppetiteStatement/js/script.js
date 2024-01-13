var w = 400,
	h = 400;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Q1 | 2019','Q2 | 2019'];

//Data
var d = [
		  [
			{axis:"% Retention of High-Potential Key Managers",value:0.59},
			{axis:"% Employee Satisfaction and Engagement",value:0.56},
			{axis:"Regulatory Ratings (CAMEL)",value:0.42},
			{axis:"% Customer Satisfaction",value:0.34},
			{axis:"# of Significant Legal, Ethical, and Reputational Events",value:0.48},
			{axis:"Cumulative Five-Year Stock Return vs. Comparable Index",value:0.14},
			{axis:"Metric #7",value:0.63},
			{axis:"Metric #8",value:0.22},
			{axis:"Metric #9",value:0.33},
			{axis:"Metric #10",value:0.63},
			{axis:"Metric #11",value:0.77},
			{axis:"Metric #12",value:0.28},
			{axis:"Metric #13",value:0.47},
			{axis:"Metric #14",value:0.18}
		  ],[
			{axis:"% Retention of High-Potential Key Managers",value:0.48},
			{axis:"% Employee Satisfaction and Engagement",value:0.41},
			{axis:"Regulatory Ratings (CAMEL)",value:0.27},
			{axis:"% Customer Satisfaction",value:0.28},
			{axis:"# of Significant Legal, Ethical, and Reputational Events",value:0.46},
			{axis:"Cumulative Five-Year Stock Return vs. Comparable Index",value:0.29},
			{axis:"Metric #7",value:0.35},
			{axis:"Metric #8",value:0.12},
			{axis:"Metric #9",value:0.4},
			{axis:"Metric #10",value:0.55},
			{axis:"Metric #11",value:0.56},
			{axis:"Metric #12",value:0.26},
			{axis:"Metric #13",value:0.47},
			{axis:"Metric #14",value:0.27}
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Quarters");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	
