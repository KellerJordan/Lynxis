function myParse(data) {
	try {
		var data = JSON.parse(data);
	} catch(e) {
		console.log(data);
		throw(e);
	}
	return data;
}

function render(i){
	$("#container>div").attr("hidden", true);
	if(i == 0) $("#container_heading").attr("hidden", false);
	if(i == 1) $("#container_network").attr("hidden", false);
	if(i == 2) $("#container_bubble").attr("hidden", false);
}

var renderIndex = 0;

function validate(){
		MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		render(renderIndex);

		$(document).on("keydown", e => {
			if(e.which == 9){
				e.preventDefault();
				renderIndex == 2 ? renderIndex = 0 : renderIndex++;
			}
			render(renderIndex);
		});
}

$.post("reader.php", {type: "tree", id: 100}, (data, status) => {
	render_heading(myParse(data));

	$.post("reader.php", {type: "network"}, (data, status) => {
		render_network(myParse(data));

		$.post("reader.php", {type: "bubble", id: 100}, (data, status) => {
			render_bubble(myParse(data));

			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

			$(document).on("keydown", e => {
				if(e.which == 9){
					e.preventDefault();
					renderIndex == 2 ? renderIndex = 0 : renderIndex++;
				}
				render(renderIndex);
			});

			render(0);
		});
	});
});


// ************************************************************************ HEADING ************************************************************************

function render_heading(data){

	var App = React.createClass({
		render: function() {
			var node = this.props.node;
			var colWidth = Math.floor(12 / node.children.length);
			if(colWidth < 3) colWidth = 3;
			return (
				<div id="container_heading">
				{node.children.map(val => {
					return <PanelNode nodeObject={val} colWidth={colWidth} />;
				})}
				</div>
			);
		}
	});


	var PanelNode = React.createClass({
		render: function() {
			return (
				<div className={"col-md-" + this.props.colWidth}>
					<div className="panel panel-default">
						<div className="panel-heading">
							<div className="panel-title">
								<TextNode nodeObject={this.props.nodeObject} />
							</div>
						</div>
						<ul className="list-group">
							{this.props.nodeObject.children.map(val => {
								return (
									<li className="list-group-item">
										<TextNode nodeObject={val} />
										{val.children.map(val => {
											return <TextNode nodeObject={val} />;
										})}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			);
		}
	});


	var TextNode = React.createClass({
		getInitialState: function() {
			return {
				nodeObject: this.props.nodeObject,
				hovered: false,
				focused: false,
				rows: 1
			}
		},

		componentWillReceiveProps: function(nextProps) { this.setState({ hovered: nextProps.hovered })},

		handleChange: function(event) {
			var text = event.target.value;
			var NodeObject = this.state.nodeObject;
			NodeObject.name = text;
			this.setState({nodeObject: NodeObject});

			$.post("writer.php", {
				type: "rel",
				subid: NodeObject.id,
				objid: 0,
				relation: text
			}, data => {
				
			});
		},

		handleHover: function(hover) { this.setState({hovered: hover}) },

		handleFocus: function(focus) {
			this.setState({focused: focus});
			if(!focus) MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		},

		render: function() {
			var name = this.state.nodeObject.name,
				id = this.state.nodeObject.id,
				rows = this.state.rows,
				divVisible = this.state.hovered || this.state.focused ? "hidden" : "visible",
				textareaVisible = (divVisible == "visible") ? "hidden" : "visible";
			return (
				<div onMouseEnter={this.handleHover.bind(this, true)} onMouseLeave={this.handleHover.bind(this, false)} >
					<textarea
						onFocus={this.handleFocus.bind(this, true)}
						onChange={this.handleChange}
						onBlur={this.handleFocus.bind(this, false)}
						value={name}
						rows={rows}
						style={{
							visibility: textareaVisible,
							zIndex: 1000
						}}
					/>
					<div
						style={{
							visibility: divVisible,
						}}
						className="TextNode"
					>
						{name}
					</div>
				</div>
			);
		}
	});

	ReactDOM.render(<App node={data} />, document.getElementById("container"));

	console.log("Heading display rendered");

}


// ************************************************************************ NETWORK ************************************************************************
// modified from http://bl.ocks.org/mbostock/1153292

function render_network(links){

	var nodes = {};

	links.forEach(link => {
		link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
		link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
	});

	var width = 960,
			height = 960;

	var force = d3.layout.force()
			.nodes(d3.values(nodes))
			.links(links)
			.size([width, height])
			.linkDistance(50)
			.charge(-500)
			.on("tick", tick)
			.start();

	var container = d3.select("#container").append("div")
			.attr("id", "container_network")
			.style("width", width)
			.style("height", height);

	var svg = container.append("svg")
			.attr("width", width)
			.attr("height", height)
			.style("background", "rgb(246, 246, 246)");

	svg.append("defs").selectAll("marker")
			.data(["contains"])
		.enter().append("marker")
			.attr("id", d => d)
			.attr("viewBox", "0 -5 10 10")
			.attr("refX", 15)
			.attr("refY", -1.5)
			.attr("markerWidth", 6)
			.attr("markerHeight", 6)
			.attr("orient", "auto")
		.append("path")
			.attr("d", "M0,-5L10,0L0,5");

	var path = svg.append("g").selectAll("path")
			.data(force.links())
		.enter().append("path")
			.attr("class", d => "link " + d.type)
			.attr("marker-end", d => "url(#" + d.type + ")");

	var circle = svg.append("g").selectAll("circle")
			.data(force.nodes())
		.enter().append("circle")
			.attr("r", 6)
			.call(force.drag);

	var text = container.selectAll("div")
			.data(force.nodes())
		.enter().append("div")
			.text(d => d.name);

	function tick() {
		path.attr("d", d => "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y);
		circle.attr("transform", d => "translate(" + d.x + "," + d.y + ")");
		text.style("transform", d => "translate(" + d.x + "px, " + d.y + "px)");
	}

	console.log("Network display rendered");

}


// ************************************************************************* BUBBLE *************************************************************************
// modified from http://bl.ocks.org/mbostock/7607535

function render_bubble(root){

	var margin = 20,
			diameter = 960;

	var color = d3.scale.linear()
			.domain([-1, 5])
			.range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
			.interpolate(d3.interpolateHcl);

	var pack = d3.layout.pack()
			.padding(2)
			.size([diameter - margin, diameter - margin])
			.value(d => d.size);

	var container = d3.select("#container").append("div")
			.attr("id", "container_bubble")
			.style("width", diameter + "px")
			.style("height", diameter + "px")
			.style("background", color(-1))
			.on("click", function() { zoom(root); });;

	var svg = container.append("svg")
			.attr("width", diameter)
			.attr("height", diameter)
		.append("g")
			.attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
		
	var focus = root,
			nodes = pack.nodes(root),
			view;

	var circle = svg.selectAll("circle")
			.data(nodes)
		.enter().append("circle")
			.attr("class", d => d.parent ? d.children ? "node" : "node node--leaf" : "node node--root")
			.style("fill", d => d.children ? color(d.depth) : null)
			.on("click", d => { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

	var div = container.append("div")
			.style("transform", "translate(" + diameter / 2 + "px, " + diameter / 2 + "px)");

	var text = div.selectAll("div")
			.data(nodes)
		.enter().append("div")
			.append("p")
			.attr("class", "label")
			.style("opacity", d => d.parent === root ? 1 : 0)
			.style("display", d => d.parent === root ? "inline" : "none")
			.text(d => d.name);

	zoomTo([root.x, root.y, root.r * 2 + margin]);

	function zoom(d) {
		focus = d;

		text.filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
			.transition()
				.duration(d3.event.altKey ? 7500 : 750)
				.tween("zoom", d => {
					var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
					return t => { zoomTo(i(t)); };
				})
				.style("opacity", function(d) { return d.parent === focus ? 1 : 0; })
				.each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
				.each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
	}

	function zoomTo(v) {
		var k = diameter / v[2]; view = v;
		div.selectAll("div").style("transform", d => "translate(" + (d.x - v[0]) * k + "px, " + (d.y - v[1]) * k + "px)");
		circle.attr("transform", d => "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")")
			.attr("r", d => d.r * k);
	}

	console.log("Bubble display rendered");

}