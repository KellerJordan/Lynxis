// /imports/api/nodes/methods.js
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Nodes, Links } from './nodes.js';

export const insertNode = new ValidatedMethod({
	name: 'Nodes.insert',
	validate: new SimpleSchema({}).validator(),

	run({}) { return Nodes.insert({ date: Date.parse(new Date()) }) }
});

export const upsertLink = new ValidatedMethod({
	name: 'Links.insert',
	validate: Links.schema.validator(),

	run({ subject, object, text }) {
		Links.upsert({
			subject,
			object
		},
		{
			subject,
			object,
			text,
			date: new Date()
		});
	}
});

// export const clean = function() {
// 	for(node in Links.find()) {
// 		if(!(Links.find({ subject: node._id }) || Links.find({ object: node._id }))) {
// 			Nodes.remove()
// 		}
// 	}
// }

// export const getLink = new ValidatedMethod({
// 	name: 'Links.get',
// 	validate: new SimpleSchema({
// 		subject: { type: String },
// 		object: { type: String }
// 	}).validator(),

// 	run({ subject, object }) {
// 		var link = Links.findOne({
// 			subject,
// 			object
// 		});
// 		return link ? link.text : '_';
// 	}
// });