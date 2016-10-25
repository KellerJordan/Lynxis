// /imports/api/nodes/server/publications.js
import { Meteor } from 'meteor/meteor';
import { Nodes } from '/imports/api/nodes/nodes.js';

Meteor.publish('nodes', () => { return Nodes.find() });