// var d3 = require("d3"),
//     cloud = require("../");

 // var fill = d3.scale.category20();


leftData = {}

var layout = d3.layout.cloud()
    .size([500, 500])
    .words([
      "Hello", "world", "normally", "you", "want", "more", "words",
      "than", "this"].map(function(d) {
      return {text: d, size: 10 + Math.random() * 90};
    }))
    .padding(5)
    // .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("Futura")
    .fontSize(function(d) { return d.size; })
    .on("end", draw);

layout.start();

function draw(words) {
  d3.select("#word-cloud").append("svg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "Futura")
      .attr("text-anchor", "middle")
      .attr("fill", function(d) { 
        if (d.text == "Hello")
          return "red"
        else
          return "blue"})
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
}