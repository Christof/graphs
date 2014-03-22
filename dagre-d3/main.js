var g = new dagreD3.Digraph();

g.addNode("0",    { label: "Cogito" });
g.addNode("1",    { label: "ergo" });
g.addNode("2",    { label: "sum" });

//g.addEdge(null, "0",  "1", { label: "K-PAX" });

var renderer = new dagreD3.Renderer();
renderer.run(g, d3.select("svg g"));
