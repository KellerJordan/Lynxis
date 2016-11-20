// /imports/api/methods.js
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Nodes } from './nodes.js';

export const insertNode = new ValidatedMethod({
	name: 'insertNode',
	validate: new SimpleSchema({}).validator(),

	run({}) {
		return Nodes.insert({
			date: Date.parse(new Date())
		});
	}
});

export const upsertProp = new ValidatedMethod({
	name: 'upsertLink',
	validate: new SimpleSchema({
		_id: { type: String },
		target: { type: String },
		text: { type: String }
	}).validator(),

	run({ _id, target, text }) {
		Nodes.update(
			{ _id },
			{ $set: { target: text } }
		);
	}
});

export const getRelatedNodes = new ValidatedMethod({
	name: 'getRelatedNodes',
	validate: new SimpleSchema({
		target: { type: String },
		text: { type: String }
	}).validator(),

	run({ target, text }) {
		console.log('getting data from methods');
		return Nodes.find();
		// return {
		// 	root: Nodes.findOne({ _id: target }),
		// 	nodes: Nodes.find({
		// 		$where: function() {
		// 			!target || this[target] == text;
		// 		}
		// 	})
		// };
	}
});

export const deleteNode = new ValidatedMethod({
	name: 'deleteNode',
	validate: new SimpleSchema({
		id: { type: String }
	}).validator(),

	run({ id }) {
		Nodes.remove({ _id: id });
	}
});