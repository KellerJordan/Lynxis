var require = meteorInstall({"imports":{"ui":{"Lynxis":{"Lynxis.html":["./template.Lynxis.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/Lynxis/Lynxis.html                                                                           //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.exports = require("./template.Lynxis.js");                                                          // 1
                                                                                                           // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.Lynxis.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/Lynxis/template.Lynxis.js                                                                    //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.body.addContent((function() {                                                                     // 2
  var view = this;                                                                                         // 3
  return HTML.Raw('<h4>Lynxis</h4>\n\t<div id="render-target">\n\t</div>');                                // 4
}));                                                                                                       // 5
Meteor.startup(Template.body.renderToDocument);                                                            // 6
                                                                                                           // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Lynxis.js":["meteor/meteor","/imports/api/nodes/nodes.js","/imports/api/nodes/methods.js","./Lynxis.html","react","react-dom",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/Lynxis/Lynxis.js                                                                             //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Nodes,Links;module.import('/imports/api/nodes/nodes.js',{"Nodes":function(v){Nodes=v},"Links":function(v){Links=v}});var insertNode,insertLink,updateNode;module.import('/imports/api/nodes/methods.js',{"insertNode":function(v){insertNode=v},"insertLink":function(v){insertLink=v},"updateNode":function(v){updateNode=v}});module.import('./Lynxis.html');var React;module.import('react',{"default":function(v){React=v}});var render;module.import('react-dom',{"render":function(v){render=v}});
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           // 4
                                                                                                           //
                                                                                                           // 6
                                                                                                           // 7
                                                                                                           //
Meteor.startup(function () {                                                                               // 10
	Meteor.autorun(function () {                                                                              // 11
                                                                                                           //
		Meteor.subscribe('nodes.all');                                                                           // 13
		render(React.createElement(App, { nodes: Nodes.find() }), document.getElementById('render-target'));     // 14
                                                                                                           //
		$('#addNode').unbind('click').bind('click', function () {                                                // 16
			insertNode.call({});                                                                                    // 17
		});                                                                                                      // 18
	});                                                                                                       // 20
});                                                                                                        // 21
                                                                                                           //
var App = React.createClass({                                                                              // 23
	displayName: 'App',                                                                                       // 23
	render: function () {                                                                                     // 24
		function render() {                                                                                      // 23
			return React.createElement(                                                                             // 25
				'div',                                                                                                 // 26
				{ id: 'container' },                                                                                   // 26
				React.createElement(                                                                                   // 27
					'ul',                                                                                                 // 27
					{ className: 'collection' },                                                                          // 27
					this.props.nodes.map(function (node) {                                                                // 28
						return React.createElement(                                                                          // 29
							'li',                                                                                               // 30
							{ key: node._id, className: 'collection-item' },                                                    // 30
							React.createElement(TextNode, { id: node._id, text: node.date })                                    // 31
						);                                                                                                   // 30
					}),                                                                                                   // 34
					React.createElement(                                                                                  // 35
						'li',                                                                                                // 35
						{ className: 'collection-item', id: 'addNode' },                                                     // 35
						'Add a Node'                                                                                         // 35
					)                                                                                                     // 35
				)                                                                                                      // 27
			);                                                                                                      // 26
		}                                                                                                        // 39
                                                                                                           //
		return render;                                                                                           // 23
	}()                                                                                                       // 23
});                                                                                                        // 23
                                                                                                           //
var TextNode = React.createClass({                                                                         // 42
	displayName: 'TextNode',                                                                                  // 42
	getInitialState: function () {                                                                            // 43
		function getInitialState() {                                                                             // 42
			return {                                                                                                // 44
				text: this.props.text,                                                                                 // 45
				hovered: false,                                                                                        // 46
				focused: false                                                                                         // 47
			};                                                                                                      // 44
		}                                                                                                        // 49
                                                                                                           //
		return getInitialState;                                                                                  // 42
	}(),                                                                                                      // 42
                                                                                                           //
                                                                                                           //
	componentWillReceiveProps: function () {                                                                  // 51
		function componentWillReceiveProps(nextProps) {                                                          // 51
			this.setState({ hovered: nextProps.hovered });                                                          // 51
		}                                                                                                        // 51
                                                                                                           //
		return componentWillReceiveProps;                                                                        // 51
	}(),                                                                                                      // 51
                                                                                                           //
	handleChange: function () {                                                                               // 53
		function handleChange(event) {                                                                           // 42
			var text = event.target.value;                                                                          // 54
			this.setState({ text: text });                                                                          // 55
			var node = {                                                                                            // 56
				_id: this.props.id,                                                                                    // 57
				date: text                                                                                             // 58
			};                                                                                                      // 56
			updateNode.call(node);                                                                                  // 60
		}                                                                                                        // 61
                                                                                                           //
		return handleChange;                                                                                     // 42
	}(),                                                                                                      // 42
	handleHover: function () {                                                                                // 63
		function handleHover(hover) {                                                                            // 42
			this.setState({ hovered: hover });                                                                      // 63
		}                                                                                                        // 63
                                                                                                           //
		return handleHover;                                                                                      // 42
	}(),                                                                                                      // 42
	handleFocus: function () {                                                                                // 65
		function handleFocus(focus) {                                                                            // 42
			this.setState({ focused: focus });                                                                      // 66
			// if(!focus) MathJax.Hub.Queue(["Typeset", MathJax.Hub]);                                              //
		}                                                                                                        // 68
                                                                                                           //
		return handleFocus;                                                                                      // 42
	}(),                                                                                                      // 42
	render: function () {                                                                                     // 70
		function render() {                                                                                      // 42
			var text = this.state.text,                                                                             // 71
			    divVisible = this.state.hovered || this.state.focused ? "hidden" : "visible",                       // 71
			    textareaVisible = divVisible == "visible" ? "hidden" : "visible";                                   // 71
			return React.createElement(                                                                             // 74
				'div',                                                                                                 // 75
				{ onMouseEnter: this.handleHover.bind(this, true), onMouseLeave: this.handleHover.bind(this, false) },
				React.createElement('textarea', {                                                                      // 76
					onFocus: this.handleFocus.bind(this, true),                                                           // 77
					onChange: this.handleChange,                                                                          // 78
					onBlur: this.handleFocus.bind(this, false),                                                           // 79
					value: text,                                                                                          // 80
					rows: 1,                                                                                              // 81
					style: {                                                                                              // 82
						visibility: textareaVisible,                                                                         // 83
						zIndex: 1000                                                                                         // 84
					}                                                                                                     // 82
				}),                                                                                                    // 76
				React.createElement(                                                                                   // 87
					'div',                                                                                                // 87
					{                                                                                                     // 87
						style: {                                                                                             // 88
							visibility: divVisible                                                                              // 89
						},                                                                                                   // 88
						className: 'TextNode'                                                                                // 91
					},                                                                                                    // 87
					text                                                                                                  // 93
				)                                                                                                      // 87
			);                                                                                                      // 75
		}                                                                                                        // 97
                                                                                                           //
		return render;                                                                                           // 42
	}()                                                                                                       // 42
});                                                                                                        // 42
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"api":{"nodes":{"methods.js":["babel-runtime/helpers/objectDestructuringEmpty","meteor/meteor","meteor/aldeed:simple-schema","meteor/mdg:validated-method","./nodes.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/api/nodes/methods.js                                                                            //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.export({insertNode:function(){return insertNode},insertLink:function(){return insertLink},updateNode:function(){return updateNode}});var _objectDestructuringEmpty;module.import('babel-runtime/helpers/objectDestructuringEmpty',{"default":function(v){_objectDestructuringEmpty=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var SimpleSchema;module.import('meteor/aldeed:simple-schema',{"SimpleSchema":function(v){SimpleSchema=v}});var ValidatedMethod;module.import('meteor/mdg:validated-method',{"ValidatedMethod":function(v){ValidatedMethod=v}});var Nodes,Links;module.import('./nodes.js',{"Nodes":function(v){Nodes=v},"Links":function(v){Links=v}});
// /imports/api/nodes/methods.js                                                                           //
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           // 4
                                                                                                           // 5
                                                                                                           //
var insertNode = new ValidatedMethod({                                                                     // 7
	name: 'Nodes.insert',                                                                                     // 8
	validate: Nodes.schema.validator(),                                                                       // 9
                                                                                                           //
	run: function () {                                                                                        // 11
		function run(_ref) {                                                                                     // 7
			_objectDestructuringEmpty(_ref);                                                                        // 11
                                                                                                           //
			Nodes.insert({ date: Date.parse(new Date()) });                                                         // 12
		}                                                                                                        // 13
                                                                                                           //
		return run;                                                                                              // 7
	}()                                                                                                       // 7
});                                                                                                        // 7
                                                                                                           //
var insertLink = new ValidatedMethod({                                                                     // 16
	name: 'Links.insert',                                                                                     // 17
	validate: Links.schema.validator(),                                                                       // 18
                                                                                                           //
	run: function () {                                                                                        // 20
		function run(_ref2) {                                                                                    // 16
			var subid = _ref2.subid;                                                                                // 20
			var objid = _ref2.objid;                                                                                // 20
			var text = _ref2.text;                                                                                  // 20
                                                                                                           //
			Links.insert({                                                                                          // 21
				subject: subject,                                                                                      // 22
				object: object,                                                                                        // 23
				text: text,                                                                                            // 24
				date: new Date()                                                                                       // 25
			});                                                                                                     // 21
		}                                                                                                        // 27
                                                                                                           //
		return run;                                                                                              // 16
	}()                                                                                                       // 16
});                                                                                                        // 16
                                                                                                           //
var updateNode = new ValidatedMethod({                                                                     // 30
	name: 'Nodes.update',                                                                                     // 31
	validate: new SimpleSchema({                                                                              // 32
		_id: { type: String },                                                                                   // 33
		date: { type: String }                                                                                   // 34
	}).validator(),                                                                                           // 32
                                                                                                           //
	run: function () {                                                                                        // 37
		function run(_ref3) {                                                                                    // 30
			var _id = _ref3._id;                                                                                    // 37
			var date = _ref3.date;                                                                                  // 37
                                                                                                           //
			Nodes.update({ _id: _id }, {                                                                            // 38
				$set: { date: date }                                                                                   // 41
			});                                                                                                     // 40
		}                                                                                                        // 44
                                                                                                           //
		return run;                                                                                              // 30
	}()                                                                                                       // 30
});                                                                                                        // 30
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"nodes.js":["meteor/mongo","meteor/aldeed:simple-schema",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/api/nodes/nodes.js                                                                              //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.export({Links:function(){return Links},Nodes:function(){return Nodes},counters:function(){return counters}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var SimpleSchema;module.import('meteor/aldeed:simple-schema',{"SimpleSchema":function(v){SimpleSchema=v}});// /imports/api/nodes/nodes.js
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           //
NodeDB = new Mongo.Collection('Nodes');                                                                    // 5
LinkDB = new Mongo.Collection('Links');                                                                    // 6
CountersDB = new Mongo.Collection('counters');                                                             // 7
                                                                                                           //
NodeDB.schema = new SimpleSchema({});                                                                      // 9
LinkDB.schema = new SimpleSchema({                                                                         // 10
	subject: { type: Number },                                                                                // 11
	object: { type: Number },                                                                                 // 12
	text: { type: String }                                                                                    // 13
});                                                                                                        // 10
                                                                                                           //
var Links = LinkDB;                                                                                        // 16
var Nodes = NodeDB;                                                                                        // 17
var counters = CountersDB;                                                                                 // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"startup":{"client":{"index.js":["/imports/ui/Lynxis/Lynxis.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/startup/client/index.js                                                                         //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.import('/imports/ui/Lynxis/Lynxis.js');// /imports/startup/client/index.js                          //
                                                                                                           // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},"client":{"main.js":["/imports/startup/client/index.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/main.js                                                                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.import('/imports/startup/client/index.js');                                                         // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/main.js");