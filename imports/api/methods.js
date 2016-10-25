// /imports/api/methods.js
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Nodes } from './nodes/nodes.js';
import { Links } from './links/links.js';

const Name_ID = Links.find({ text: 'name' }).subject;
const Type_ID = Links.find({ text: 'type' }).subject;
const Date_ID = Links.find({ text: 'date' }).subject;
const Location_ID = Links.find({ text: 'location' }).subject;

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

export const getRelatedNodes = new ValidatedMethod({
	name: 'getRelatedNodes',
	validate: new SimpleSchema({
		root: { type: String },
		text: { type: String }
	}).validator(),

	run({ root, text }) {
		let nodes = [];
		Nodes.find().forEach(node => {
			let id = node._id;
			// root exists and node is linked, or root does not exist and node is unlinked
			if((root && Links.findOne({ subject: root, object: id, text })) || (!root && !Links.findOne({ object: id, text }))) {
				node.name = getLink({ subject: id, object: Name_ID });
				nodes.push(node);
			}
		});
		return {
			root: { _id: root, name: getLink({ subject: root, object: Name_ID }) },
			nodes
		};
	}
});

// export const getNodesOfType = new ValidatedMethod({
// 	name: 'getNodesOfType',
// 	validate: new SimpleSchema({
// 		type: { type: String }
// 	}).validator(),

// 	run({ type }) {
// 		let nodes = [];
// 		Links.find({
// 			object: Type_ID,
// 			text: type
// 		}).forEach(node => {
// 			nodes.push(node);
// 		});
// 		return nodes;
// 	}
// });

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
});

// export const clean = function() {
// 	for(node in Links.find()) {
// 		if(!(Links.find({ subject: node._id }) || Links.find({ object: node._id }))) {
// 			Nodes.remove()
// 		}
// 	}
// }