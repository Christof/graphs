var g = new dagreD3.Digraph();

g.addNode("0",    { label: "0" });
g.addNode("1",    { label: "Marcus" });
g.addNode("2",    { label: "rosam" });
g.addNode("3",    { label: "videt" });

// g.addEdge(null, "0",  "1", { label: "K-PAX" });
g.addEdge(null, "0", "3", { label: "PRED" });
g.addEdge(null, "3", "1", { label: "SUBJ" });
g.addEdge(null, "3", "2", { label: "PRED" });

var renderer = new dagreD3.Renderer();

vis = d3.select("svg g");
renderer.run(g, vis);
//d3.selectAll("g.node").on("click", function(node) { console.log(node); })
nodes = vis.selectAll("g").on("click", function(d, i) {
  console.log(d);
  nodes.attr("class", "selected"); 
});
