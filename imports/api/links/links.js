// /imports/api/nodes/nodes.js
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

LinkDB = new Mongo.Collection('Links');

LinkDB.schema = new SimpleSchema({
	subject: { type: String },
	object: { type: String },
	text: { type: String }
});

export const Links = LinkDB;