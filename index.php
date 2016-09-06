<?php
	session_start();
	if(!isset($_SESSION['username'])){ header('Refresh: 0; URL = /login.php'); }
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Lynxis</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		<script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>

		<script type="text/javascript" async src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML"></script>
		<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});</script>

		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

		<style>

			html, body {
				margin: 0;
				padding-top: 25px;
				width: 100%;
				height: 100%;
				/*overflow: hidden;*/
			}

			svg {
				width: 100%;
				height: 100%;
			}

			textarea { resize: none; }

			#container_outer {
				/*padding-top: 50px;*/
				margin: 5px;
				height: calc(100% - 10px);
			}

			#container_outer > div { position: absolute; }

			#container_d3 {
				width: 250px;
				pointer-events: none;
			}

			#container_react {
				padding: 15px 12px 0px 0px;
				width: 100%;
			}

			.link {
				fill: none;
				stroke: #666;
				stroke-width: 1.5px;
			}

			circle {
				fill: #ccc;
				stroke: #333;
				stroke-width: 1.5px;
				z-index: 10;
			}

			.node {
				position: absolute;
				top: -10px;
				left: 10px;
			}

		</style>

	</head>
	<body>
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="/">Lynxis.org</a>
			</div>
				<ul class="nav navbar-nav">
					<li><a href="/">Home</a></li>
					<li><a href="/features">Features</a></li>
					<li><a href="/howto">Instructions</a></li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Other Projects<span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li><a href="/projects/Vector-Playground">Vector Sandbox</a></li>
						<li><a href="/projects/Dota2-Drafter">Dota 2 Drafter</a></li>
					</ul>
					</li>
					<li><a href="/about">About</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</div>
		</nav>

		<div id="container_outer" class="panel panel-default">
			<div id="container_d3">
			</div>
			<div id="container_react"></div>
		</div>
	</body>

	<script src="https://npmcdn.com/react@15.3.1/dist/react.js"></script>
  <script src="https://npmcdn.com/react-dom@15.3.1/dist/react-dom.js"></script>
  <script src="https://npmcdn.com/babel-core@5.8.38/browser.min.js"></script>

	<script type="text/javascript">

	</script>
	<script type="text/babel">

		// react

		var TextNode = React.createClass({
			getInitialState: function() {
				return {
					nodeObject: this.props.nodeObject,
					hovered: false,
					focused: false
				}
			},

			componentWillReceiveProps: function(nextProps) { this.setState({ hovered: nextProps.hovered })},

			handleChange: function(event) {
				this.setState({name: event.target.value});
				// updates to server
			},

			handleHover: function(hover) { this.setState({hovered: hover}) },

			handleFocus: function(focus) {
				this.setState({focused: focus});
				if(!focus) { MathJax.Hub.Queue(["Typeset", MathJax.Hub]) }
			},

			render: function() {
				var name = this.state.nodeObject.name,
					hidden = !(this.state.hovered || this.state.focused);
				return (
					<div onMouseEnter={this.handleHover.bind(this, true)} onMouseLeave={this.handleHover.bind(this, false)} >
						<div
							hidden={!hidden}
							style={{margin: "2px"}}
						>
							{name}
						</div>
						<textarea
							hidden={hidden}
							rows={1}
							style={{border: "none", width: "100%", backgroundColor: "rgba(0, 0, 0, 0)"}}
							value={name}
							onFocus={this.handleFocus.bind(this, true)}
							onChange={this.handleChange}
							onBlur={this.handleFocus.bind(this, false)}
						/>
					</div>
				);
			}
		});

		var TestNode = React.createClass({
			getInitialState: function() {
				return {
					nodeObject: this.props.nodeObject
				};
			},

			render: function() {
				return (
					<div className="col-md-4">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title">
									<TextNode nodeObject={this.state.nodeObject} />
								</h3>
							</div>
							<ul className="list-group">
								<li className="list-group-item">{"Example Text"}</li>
							</ul>
						</div>
					</div>
				);
			}
		});

		var App = React.createClass({
			getInitialState: function() {
				return {
					data: this.props.nodeList
				};
			},

			render: function() {
				var lines = this.state.data.map(function(val, i) {
					return (
						<TestNode nodeObject={val} />
					);
				});
				return (
					<div>
					{lines}
					</div>
				);
			}
		});

		$.post("reader.php", {type: "tree", id: 100}, function(data, status){
			ReactDOM.render(
				<div>
					<App nodeList={JSON.parse(data)} />
				</div>,
				document.getElementById('container_react')
			);	

			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		});


		// d3

		// var links, nodes, width, height, force, svg, path, circle, text;

		// $.post("reader.php", {type: "network"}, function(data, status){

		// 	links = JSON.parse(data);

		// 	nodes = {};

		// 	links.forEach(function(link) {
		// 		link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
		// 		link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
		// 	});

		// 	width = 1900,
		// 	height = 900;

		// 	force = d3.layout.force()
		// 			.nodes(d3.values(nodes))
		// 			.links(links)
		// 			.size([width, height])
		// 			.linkDistance(50)
		// 			.charge(-500)
		// 			.on("tick", tick)
		// 			.start();

		// 	svg = d3.select("#container_outer").append("svg")
		// 			.attr("width", width)
		// 			.attr("height", height);

		// 	svg.append("defs").selectAll("marker")
		// 			.data(["contains"])
		// 		.enter().append("marker")
		// 			.attr("id", d => d)
		// 			.attr("viewBox", "0 -5 10 10")
		// 			.attr("refX", 15)
		// 			.attr("refY", -1.5)
		// 			.attr("markerWidth", 6)
		// 			.attr("markerHeight", 6)
		// 			.attr("orient", "auto")
		// 		.append("path")
		// 			.attr("d", "M0,-5L10,0L0,5");

		// 	path = svg.append("g").selectAll("path")
		// 			.data(force.links())
		// 		.enter().append("path")
		// 			.attr("class", d => "link " + d.type)
		// 			.attr("marker-end", d => "url(#" + d.type + ")");

		// 	circle = svg.append("g").selectAll("circle")
		// 			.data(force.nodes())
		// 		.enter().append("circle")
		// 			.attr("r", 6)
		// 			.call(force.drag);

		// 	text = d3.select("#container_d3")
		// 			.selectAll("div")
		// 			.data(force.nodes())
		// 		.enter().append("div")
		// 			.attr("class", "node")
		// 			.text(d => d.name);

		// 	MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

		// });

		// function tick() {
		//   path.attr("d", d => "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y);
		//   circle.attr("transform", d => "translate(" + d.x + "," + d.y + ")");
		//   text.attr("style", d => "transform: translate(" + d.x + "px, " + d.y + "px)");
		// }

	</script>
</html>