var g = new dagreD3.Digraph();

g.addNode("0",    { label: "Cogito" });
g.addNode("1",    { label: "ergo" });
g.addNode("2",    { label: "sum" });

//g.addEdge(null, "0",  "1", { label: "K-PAX" });

var renderer = new dagreD3.Renderer();

vis = d3.select("svg g");
renderer.run(g, vis);
//d3.selectAll("g.node").on("click", function(node) { console.log(node); })
nodes = vis.selectAll("g").on("click", function(d, i) {
  console.log(d);
  nodes.attr("class", "selected"); 
});
