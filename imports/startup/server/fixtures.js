// /imports/startup/server/fixtures.js
import { Meteor } from 'meteor/meteor';
import { Nodes } from '../../api/nodes/nodes.js';
import { Links } from '../../api/links/links.js';

Meteor.startup(() => {
	if(Nodes.find().count() == 0) {
		Links.remove();

		let Name_ID = Nodes.insert({ date: Date.parse(new Date()) });
		Links.insert({
			subject: Name_ID,
			object: Name_ID,
			text: 'name',
			date: new Date()
		});

		let Type_ID = Nodes.insert({ date: Date.parse(new Date()) });
		Links.insert({
			subject: Type_ID,
			object: Name_ID,
			text: 'type',
			date: new Date()
		});

		let Date_ID = Nodes.insert({ date: Date.parse(new Date()) });
		Links.insert({
			subject: Date_ID,
			object: Name_ID,
			text: 'date',
			date: new Date()
		});

		let Location_ID = Nodes.insert({ date: Date.parse(new Date()) });
		Links.insert({
			subject: Location_ID,
			object: Name_ID,
			text: 'location',
			date: new Date()
		});


		// test data
		if(true) {
			Links.insert({ subject: Nodes.insert({}), object: Type_ID, text: 'event' });
			Links.insert({ subject: Nodes.insert({}), object: Type_ID, text: 'event' });
			Links.insert({ subject: Nodes.insert({}), object: Type_ID, text: 'event' });
		}
	}
});