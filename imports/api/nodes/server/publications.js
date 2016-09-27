import { Meteor } from 'meteor/meteor';
import { Nodes } from '/imports/api/nodes/nodes.js';

Meteor.publish('nodes.all', function () {
	return Nodes.find({});
});