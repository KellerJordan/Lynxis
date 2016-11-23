import { Meteor } from 'meteor/meteor';
import { Nodes } from '../../api/nodes/nodes.js';

Meteor.startup(() => {
	if(!Nodes.findOne()) {

		Nodes.insert({
			date: new Date(),
			name: 'MATH 100',
			type: 'course',
			discipline: 'MATH',
			number: '100'
		});

	}
});