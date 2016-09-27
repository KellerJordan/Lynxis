// /imports/api/nodes/methods.js
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Nodes, Links } from './nodes.js';

export const insertNode = new ValidatedMethod({
	name: 'Nodes.insert',
	validate: Nodes.schema.validator(),

	run({}) {
		Nodes.insert({ date: Date.parse(new Date()) });
	}
});

export const insertLink = new ValidatedMethod({
	name: 'Links.insert',
	validate: Links.schema.validator(),

	run({ subid, objid, text }) {
		Links.insert({
			subject,
			object,
			text,
			date: new Date()
		});
	}
});

export const updateNode = new ValidatedMethod({
	name: 'Nodes.update',
	validate: new SimpleSchema({
		_id: { type: String },
		date: { type: String }
	}).validator(),

	run({ _id, date }) {
		Nodes.update(
			{ _id: _id },
			{
				$set: { date }
			}
		);
	}
});