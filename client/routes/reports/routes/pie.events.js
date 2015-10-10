// =========== [  ] ===========
Template.reportsHome.rendered = function(){

  var dataset = [
    { label: 'Abulia', count: 10 },
    { label: 'Betelgeuse', count: 20 },
    { label: 'Cantaloupe', count: 30 },
    { label: 'Dijkstra', count: 40 }
  ];

  var width = 360;
  var height = 360;
  var radius = Math.min(width, height) / 2;     
  var color = d3.scale.category20b();

  var svg = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')');

  var arc = d3.svg.arc().outerRadius(radius);

  var pie = d3.layout.pie()
    .value(function(d) { return d.count; })
    .sort(null);

};
