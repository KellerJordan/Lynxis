// /imports/ui/pages/Calendar.js
import { Meteor } from 'meteor/meteor';
// import { Nodes } from '/imports/api/nodes/nodes.js';
// import { Links } from '/imports/api/links/links.js';
// import { insertNode, upsertLink, getNodesOfType, deleteNode } from '/imports/api/methods.js';
import React from 'react';

// import { TextNode } from '/imports/ui/components/TextNode.js';


export const Calendar = React.createClass({
	getInitialState() {
		return {
			mode: 'view',
			loading: true
		};
	},

	// getData() {
	// 	this.setState({ loading: true });
	// 	Meteor.call(
	// 		'getNodesOfType',
	// 		{ type: 'event' },
	// 		(error, result) => {
	// 			this.setState({ nodes: result, loading: false })
	// 		}
	// 	);
	// },

	// EventNode(node) {
	// 	return (
	// 		<EventNode
	// 			id={node._id}
	// 			mode={this.state.mode}
	// 		/>
	// 	);
	// },

	render() {
		if(this.state.loading) return <div>Loading...</div>;

		return (
			<div className="container">
				<div className="row" style={{ paddingTop: '20px' }}>
					<div className="col s12 root">
						Calendar
					</div>
				</div>
				<div className="row">
					<ul className="collection">
						
					</ul>
				</div>
				<div className="row">
					<div>
						{`Mode: ${this.state.mode == 'view' ? 'traversal' : 'manipulation'}`}
					</div>
				</div>
			</div>
		);
	}
});

// {this.state.nodes.map(node => {
// 							return (
// 								<li key={node._id} className="collection-item">
									
// 								</li>
// 							);
// 						})}