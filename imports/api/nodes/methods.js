// /imports/api/nodes/methods.js
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Nodes, Links } from './nodes.js';

export const name_id = 'qSmGHPege83uyw2Ss';

export const insertNode = new ValidatedMethod({
	name: 'insertNode',
	validate: new SimpleSchema({}).validator(),

	run({}) { return Nodes.insert({ date: Date.parse(new Date()) }) }
});

export const upsertLink = new ValidatedMethod({
	name: 'upsertLink',
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

export const getNodes = new ValidatedMethod({
	name: 'getNodes',
	validate: new SimpleSchema({
		focus: { type: String },
		text: { type: String }
	}).validator(),

	run({ focus, text }) {
		let nodes = [];
		Nodes.find().forEach(val => {
			// focus exists and node is linked, or focus does not exist and node is unlinked
			let node = val;
			if((focus && Links.findOne({ focus, object: node._id, text })) || (!focus && !Links.findOne({ object: node._id, text }))) {
				node.name = getLink({ subject: node._id, object: name_id });
				nodes.push(node);
			}
		});
		return nodes;
	}
})

function getLink({ subject, object }) {
	let link = Links.findOne({ subject, object });
	return link ? link.text : '_';
}

// export const clean = function() {
// 	for(node in Links.find()) {
// 		if(!(Links.find({ subject: node._id }) || Links.find({ object: node._id }))) {
// 			Nodes.remove()
// 		}
// 	}
// }