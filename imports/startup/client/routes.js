import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/iron:router';
import React from 'react';
import { render } from 'react-dom';

import { MainLayout } from '/imports/ui/layouts/MainLayout.js';
import { IndexPage } from '/imports/ui/pages/IndexPage.js';


Router.route('/', {
	action() {
		render(<MainLayout content={<IndexPage root={5} />} />, document.getElementById('render-target'));
	}
});