// /imports/api/nodes/server/publications.js
import { Meteor } from 'meteor/meteor';
import { Links } from '/imports/api/nodes/nodes.js';

Meteor.publish('links', () => { return Links.find() });