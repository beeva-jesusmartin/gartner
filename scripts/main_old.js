
var linePoints = [
  [332, 405],
  [340, 400],
  [350, 390],
  [360, 365],

  [360, 365],
  [360, 365],
  [360, 365],
  [360, 365],
  [360, 365],
  [360, 365],
  [360, 365],
  [360, 365],
  [360, 365],
  [360, 365],
  [360, 365],
  [360, 365],
  [360, 365],
  [360, 365],
  [360, 365],
  [360, 365],

  [410, 200],
  [440, 100],
  [448, 90],
  [456, 85],
  [464, 83],
  [472, 85],
  [480, 90],
  [488, 100],
  [550, 300],
  [650, 300],
  [750, 260],
  [900, 240]
];
var points = [
  {'position':[340, 400],'id':'lol','color':'#000000','text':'tecnologia to molonas','form':true},
  [380, 200],
  [450, 100],
  [550, 300],
  [600, 250],
  [700, 230],
  [800, 220]
];
  
var svg = d3.select("#graph").append("svg")
    .attr("width", 960)
    .attr("height", 500);

var path = svg.append("path")
    .data([linePoints])
    .attr("d", d3.svg.line()
    .tension(0.9) // Catmull–Rom
    .interpolate("cardinal"))
    .style('fill', 'none')
    .style('stroke', '#f50');

var circle = svg.selectAll(".point")
    .data(points)
  .enter().append("circle")
    .attr('id', function(d){return d.id})
    .attr('class', 'Circle')
    .attr("r", 4)
    .attr("transform", function(d) { return "translate(" + d.position + ")"; })
    .style('fill', function(d){return d.color})
    .style('stroke', 'none')
    .style('stroke-width', '4px');

svg.selectAll(".Circle")
    .on("mouseover", function() {
        d3.select(this)
          .transition()
          .style('fill','#333333')
          .attr('r', 20);
     })
    .on("mouseout", function() {
        d3.select(this)
          .transition()
          .style("fill",'#000000')
          .attr('r', 10);
     })    

/*var circle = svg.append("circle")
    .data(points)
    .attr("r", 13)
    .attr("transform", function(d) { return "translate(" + d + ")"; });*/

//transition();

function transition() {
  circle.transition()
      .duration(10000)
      .attrTween("transform", translateAlong(path.node()))
      .each("end", transition);
}

function translateAlong(path) {
  var l = path.getTotalLength();
  return function(d, i, a) {
    return function(t) {
      var p = path.getPointAtLength(t * l);
      return "translate(" + p.x + "," + p.y + ")";
    };
  };
}
