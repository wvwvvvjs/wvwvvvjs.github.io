angular.module('basicBarGraphMod', [])
.directive('basicBarGraph', function() {
  function link(scope, element, attribute) {
    var data = [1, 2, 3, 4, 5];

    var height = 200;
    var width = 200;

    var svg = d3.select(element[0]).append('svg')
        .attr('height', height)
        .attr('width', width);

    var barG = svg.append('g');

    barG.selectAll('rect')
      .data(data).enter()
      .append('rect');

    barG.selectAll('rect')
      .data(data)
      .attr('width', "30")
      .attr('height', function(d) {
        return d * 30;
      })
      .attr('transform', function(d, i) {
        return "translate(" + (i * 31) + "," + (height - (d * 30)) + ")"; 
      })
      .attr("fill", "#00407B");

    barG.selectAll('rect')
      .data(data).exit()
      .remove();

  }
  return {
    link: link,
    restrict: 'E'
  }
});