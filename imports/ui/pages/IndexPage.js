import { Meteor } from 'meteor/meteor';
import React from 'react';

export const IndexPage = React.createClass({
	getInitialState() {
		return {
			loading: false
		};
	},

	render() {
		if(this.state.loading) return <div>loading...</div>;

		return (
			<div className="container">
				<div className="row" style={{ paddingTop: '20px' }}>
					abcd
				</div>
			</div>
		);
	}
});