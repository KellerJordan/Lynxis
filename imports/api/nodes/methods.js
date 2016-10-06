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
		root: { type: String },
		text: { type: String }
	}).validator(),

	run({ root, text }) {
		let nodes = [];
		Nodes.find().forEach(val => {
			let node = val, id = node._id;
			// root exists and node is linked, or root does not exist and node is unlinked
			if((root && Links.findOne({ subject: root, object: id, text })) || (!root && !Links.findOne({ object: id, text }))) {
				node.name = getLink({ subject: id, object: name_id });
				nodes.push(node);
			}
		});
		return {
			root: { _id: root, name: getLink({ subject: root, object:name_id }) },
			nodes
		};
	}
})

function getLink({ subject, object }) {
	let link = Links.findOne({ subject, object });
	return link ? link.text : '';
}

export const deleteNode = new ValidatedMethod({
	name: 'deleteNode',
	validate: new SimpleSchema({
		id: { type: String }
	}).validator(),

	run({ id }) {
		Nodes.remove({ _id: id });
		Links.remove({ subject: id });
		Links.remove({ object: id });
	}
})

// export const clean = function() {
// 	for(node in Links.find()) {
// 		if(!(Links.find({ subject: node._id }) || Links.find({ object: node._id }))) {
// 			Nodes.remove()
// 		}
// 	}
// }