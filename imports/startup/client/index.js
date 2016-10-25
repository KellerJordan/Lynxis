// /imports/startup/client/index.js
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import './index.html';

import { Display } from '/imports/ui/pages/Display.js';
// import { Calendar } from '/imports/ui/pages/Calendar.js';


$(document).ready(() => { $('.modal-trigger').leanModal() });

Meteor.startup(() => {
	let Component;
	Component = <Display root="" />;
	// Component = <Calendar />;
	render(Component, document.getElementById('render-target'));
});

Meteor.autorun(() => {
// 	Meteor.subscribe('nodes');
	Meteor.subscribe('links');
});