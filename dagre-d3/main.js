var g = new dagreD3.Digraph();

g.addNode("0",    { label: "0" });
g.addNode("1",    { label: "Marcus" });
g.addNode("2",    { label: "rosam" });
g.addNode("3",    { label: "videt" });

g.addEdge(null, "0", "3", { label: "PRED" });
g.addEdge(null, "3", "1", { label: "SUBJ" });
g.addEdge(null, "3", "2", { label: "PRED" });

var renderer = new dagreD3.Renderer();

vis = d3.select("svg g");
renderer.run(g, vis);
nodes = vis.selectAll("g.node").on("click", function(d, i) {
  var item = d3.select(this);
  var classes = item.attr("class");
  if (classes.indexOf(" selected") > 0) {
    item.attr("class", classes.replace(" selected", ""));
  }
  else {
    item.attr("class", classes + " selected");
  }
});
