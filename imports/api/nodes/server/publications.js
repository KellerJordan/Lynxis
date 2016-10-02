import { Meteor } from 'meteor/meteor';
import { Nodes, Links } from '/imports/api/nodes/nodes.js';

Meteor.publish('nodes.all', () => { return Nodes.find() });
Meteor.publish('links.all', () => { return Links.find() })