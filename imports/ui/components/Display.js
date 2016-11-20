import { Meteor } from 'meteor/meteor';
import { Nodes } from '/imports/api/nodes/nodes.js';
import { insertNode, getRelatedNodes, deleteNode } from '/imports/api/nodes/methods.js';
import React from 'react';

import '/imports/ui/components/TextNode.js';

const Display = React.createClass({
	getInitialState() {
		let id = this.props.root;
		return {
			id,
			focus: id,
			mode: 'view',
			loading: true
		};
	},

	getData(id) {
		this.setState({ loading: true });
		console.log('getting data');
		Meteor.call(
			'getRelatedNodes',
			{ target: id, text: 'contains' },
			(error, result) => {
				console.log('got data');
				console.log(result);
				this.setState({ id, root: result.root, nodes: result.nodes, loading: false })
			}
		);
	},

	componentWillMount() {
		this.getData(this.state.id);

		$(document).on('keydown', e => {
			if(this.state.mode == 'view') {
				switch(e.which) {
					case 81: // q
					this.getData('');
					break;
					case 87: // w
					// go back by one
					break;
					case 69: // e
					// ?
					break;
					case 82: // r
					this.getData(this.state.focus);
					break;
					case 65: // a
					// ?
					break;
					case 83: // s
					// ?
					break;
					case 68: // d
					e.preventDefault();
					if(e.ctrlKey) {
						Meteor.call(
							'deleteNode',
							{ id: this.state.focus },
							() => { this.getData(this.state.id) }
						);
					}
					break;
					case 70: // f
					Meteor.call(
						'insertNode',
						{},
						(error, id) => {
							if(this.state.id && !error) {
								Meteor.call(
									'upsertProp',
									{ _id: this.state.id, target: id, text: 'contains' },
									() => { this.getData(this.state.id) }
								);
							} else {
								this.getData(this.state.id);
							}
						}
					);
					break;
				}
			}
			if(e.which == 9) {
				e.preventDefault();
				this.setState({ mode: (this.state.mode == 'edit') ? 'view' : 'edit' });
			}
		});
	},

	componentWillUnmount() { $(document).off('keydown') },

	handleMouseDown(focus) { if(this.state.mode == 'view') this.setState({ focus }) },

	TextNode(node) {
		return (
			<TextNode
				id={node._id}
				text={node.name}
				mode={this.state.mode}
				className={`TextNode ${(this.state.focus == node._id && this.state.mode == 'view') ? 'focus' : ''}`}
			/>
		);
	},

	render() {
		if(this.state.loading) return <div>Loading...</div>;

		return (
			<div className="container">
				<div className="row" style={{ paddingTop: '20px' }}>
					<div className="col s12 root" onMouseDown={this.handleMouseDown.bind(this, this.state.id)}>
						{this.TextNode(this.state.root)}
					</div>
				</div>
				<div className="row">
					<ul className="collection">
						{this.state.nodes.map(node => {
							return (
								<li key={node._id} className="collection-item" onMouseDown={this.handleMouseDown.bind(this, node._id)}>
									{this.TextNode(node)}
								</li>
							);
						})}
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