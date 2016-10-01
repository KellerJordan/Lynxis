// /imports/api/nodes/nodes.js
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

NodeDB = new Mongo.Collection('Nodes');
LinkDB = new Mongo.Collection('Links');
CountersDB = new Mongo.Collection('counters');

NodeDB.schema = new SimpleSchema({});
LinkDB.schema = new SimpleSchema({
	subject: { type: String },
	object: { type: String },
	text: { type: String },
});

export const Links = LinkDB;
export const Nodes = NodeDB;
export const counters = CountersDB;