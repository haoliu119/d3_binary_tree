var w = 960,
    h = 600;

var vis = d3.select('body').append('svg:svg')
    .attr('width', w)
    .attr('height', h);

var nodes = [],
    links = [],
    node = vis.selectAll

var force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .gravity(0)
    .size([w, h]);

