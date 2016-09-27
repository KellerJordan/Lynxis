var require = meteorInstall({"imports":{"api":{"nodes":{"server":{"publications.js":["meteor/meteor","/imports/api/nodes/nodes.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/api/nodes/server/publications.js                          //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Nodes;module.import('/imports/api/nodes/nodes.js',{"Nodes":function(v){Nodes=v}});
                                                                     // 2
                                                                     //
Meteor.publish('nodes.all', function () {                            // 4
	return Nodes.find({});                                              // 5
});                                                                  // 6
///////////////////////////////////////////////////////////////////////

}]},"methods.js":["babel-runtime/helpers/objectDestructuringEmpty","meteor/meteor","meteor/aldeed:simple-schema","meteor/mdg:validated-method","./nodes.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/api/nodes/methods.js                                      //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({insertNode:function(){return insertNode},insertLink:function(){return insertLink},updateNode:function(){return updateNode}});var _objectDestructuringEmpty;module.import('babel-runtime/helpers/objectDestructuringEmpty',{"default":function(v){_objectDestructuringEmpty=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var SimpleSchema;module.import('meteor/aldeed:simple-schema',{"SimpleSchema":function(v){SimpleSchema=v}});var ValidatedMethod;module.import('meteor/mdg:validated-method',{"ValidatedMethod":function(v){ValidatedMethod=v}});var Nodes,Links;module.import('./nodes.js',{"Nodes":function(v){Nodes=v},"Links":function(v){Links=v}});
// /imports/api/nodes/methods.js                                     //
                                                                     // 2
                                                                     // 3
                                                                     // 4
                                                                     // 5
                                                                     //
var insertNode = new ValidatedMethod({                               // 7
	name: 'Nodes.insert',                                               // 8
	validate: Nodes.schema.validator(),                                 // 9
                                                                     //
	run: function run(_ref) {                                           // 11
		_objectDestructuringEmpty(_ref);                                   // 11
                                                                     //
		Nodes.insert({ date: Date.parse(new Date()) });                    // 12
	}                                                                   // 13
});                                                                  // 7
                                                                     //
var insertLink = new ValidatedMethod({                               // 16
	name: 'Links.insert',                                               // 17
	validate: Links.schema.validator(),                                 // 18
                                                                     //
	run: function run(_ref2) {                                          // 20
		var subid = _ref2.subid;                                           // 20
		var objid = _ref2.objid;                                           // 20
		var text = _ref2.text;                                             // 20
                                                                     //
		Links.insert({                                                     // 21
			subject: subject,                                                 // 22
			object: object,                                                   // 23
			text: text,                                                       // 24
			date: new Date()                                                  // 25
		});                                                                // 21
	}                                                                   // 27
});                                                                  // 16
                                                                     //
var updateNode = new ValidatedMethod({                               // 30
	name: 'Nodes.update',                                               // 31
	validate: new SimpleSchema({                                        // 32
		_id: { type: String },                                             // 33
		date: { type: String }                                             // 34
	}).validator(),                                                     // 32
                                                                     //
	run: function run(_ref3) {                                          // 37
		var _id = _ref3._id;                                               // 37
		var date = _ref3.date;                                             // 37
                                                                     //
		Nodes.update({ _id: _id }, {                                       // 38
			$set: { date: date }                                              // 41
		});                                                                // 40
	}                                                                   // 44
});                                                                  // 30
///////////////////////////////////////////////////////////////////////

}],"nodes.js":["meteor/mongo","meteor/aldeed:simple-schema",function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/api/nodes/nodes.js                                        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({Links:function(){return Links},Nodes:function(){return Nodes},counters:function(){return counters}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var SimpleSchema;module.import('meteor/aldeed:simple-schema',{"SimpleSchema":function(v){SimpleSchema=v}});// /imports/api/nodes/nodes.js
                                                                     // 2
                                                                     // 3
                                                                     //
NodeDB = new Mongo.Collection('Nodes');                              // 5
LinkDB = new Mongo.Collection('Links');                              // 6
CountersDB = new Mongo.Collection('counters');                       // 7
                                                                     //
NodeDB.schema = new SimpleSchema({});                                // 9
LinkDB.schema = new SimpleSchema({                                   // 10
	subject: { type: Number },                                          // 11
	object: { type: Number },                                           // 12
	text: { type: String }                                              // 13
});                                                                  // 10
                                                                     //
var Links = LinkDB;                                                  // 16
var Nodes = NodeDB;                                                  // 17
var counters = CountersDB;                                           // 18
///////////////////////////////////////////////////////////////////////

}]}},"startup":{"server":{"index.js":["/imports/api/nodes/nodes.js","/imports/api/nodes/methods.js","/imports/api/nodes/server/publications.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/startup/server/index.js                                   //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.import('/imports/api/nodes/nodes.js');module.import('/imports/api/nodes/methods.js');module.import('/imports/api/nodes/server/publications.js');// /imports/startup/server/index.js
                                                                     // 2
                                                                     // 3
                                                                     // 4
///////////////////////////////////////////////////////////////////////

}]}}},"server":{"main.js":["/imports/startup/server/index.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.import('/imports/startup/server/index.js');                   // 1
///////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
