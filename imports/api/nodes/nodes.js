// /imports/api/nodes/nodes.js
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Nodes = new Mongo.Collection('Nodes');