import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'meteor/iron:router';

// import IndexPage from '/imports/ui/pages/indexPage.jsx';
import { IndexPage } from '/imports/ui/pages/indexPage.js';

Meteor.startup(() => {
  render(<IndexPage />, document.getElementById('render-target'));
});

// Router.route('/', {
// 	name: 'indexPage',
// 	action() {
// 		render(<IndexPage root="" />, document.getElementById('render-target'));
// 	}
// });