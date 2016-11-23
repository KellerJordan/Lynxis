import { Meteor } from 'meteor/meteor';
import { Nodes } from '/imports/api/nodes/nodes.js';

Meteor.publish('nodes.all', () => Nodes.find());
Meteor.publish('nodes.byId', id => Nodes.find({ _id: id }));