import { Meteor } from 'meteor/meteor';
import { Nodes, Links } from '/imports/api/nodes/nodes.js';
import { insertNode, upsertLink, getNodes, deleteNode, name_id } from '/imports/api/nodes/methods.js';
import './Lynxis.html';

import React from 'react';
import { render } from 'react-dom';


$(document).ready(() => { $('.modal-trigger').leanModal() });

Meteor.startup(() => { render(<App root="" />, document.getElementById('render-target')) });

Meteor.autorun(() => {
	Meteor.subscribe('nodes.all');
	Meteor.subscribe('links.all');
});

const App = React.createClass({
	getInitialState() {
		let id = this.props.root;
		return {
			id,
			root: {},
			nodes: [],
			focus: id,
			mode: 'view',
			loading: true
		}
	},

	getData(id) {
		this.setState({ loading: true })
		Meteor.call(
			'getNodes',
			{ root: id, text: 'contains' },
			(error, result) => {
				this.setState({ id, root: result.root, nodes: result.nodes, loading: false })
			}
		);
	},

	componentWillMount() {
		this.getData(this.state.id);

		$(document).on('keydown', (e) => {
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
									'upsertLink',
									{ subject: this.state.id, object: id, text: 'contains' },
									() => {
										this.getData(this.state.id);
									}
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

	render() {
		if(this.state.loading) return <div>Loading...</div>;

		return (
			<div className="container">
				<div className="row" style={{ paddingTop: '20px' }}>
					<div className="col s12 root" onMouseDown={this.handleMouseDown.bind(this, this.state.id)}>
						<TextNode
							id={this.state.root._id}
							text={this.state.root.name}
							mode={this.state.mode}
							className={`TextNode ${(this.state.focus == this.state.root._id && this.state.mode == 'view') ? 'focus' : ''}`}
						/>
					</div>
				</div>
				<div className="row">
					<ul className="collection">
						{this.state.nodes.map(node => {
							return (
								<li key={node._id} className="collection-item" onMouseDown={this.handleMouseDown.bind(this, node._id)}>
									<TextNode
										id={node._id}
										text={node.name}
										mode={this.state.mode}
										className={`TextNode ${(this.state.focus == node._id && this.state.mode == 'view') ? 'focus' : ''}`}
									/>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="row">
					<div className="description">
						abc
					</div>
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

const TextNode = React.createClass({
	getInitialState() { return { text: this.props.text } },

	handleChange(e) {
		let text = e.target.value;
		this.setState({ text });
		upsertLink.call({ subject: this.props.id, object: name_id, text });
	},

	render() {
		let text = this.state.text, html, TextNode;

		try {
			if(text.substring(0, 2) == '$$') html = katex.renderToString(text.substring(2));
			else html = text;
		} catch(err) {
			html = text;
		}

		if(this.props.mode == 'edit') TextNode = <textarea onChange={this.handleChange} value={text} />;
		else TextNode = <div dangerouslySetInnerHTML={{__html: html}} />;

		return (
			<div className={this.props.className} >
				{TextNode}
			</div>
		);
	}
});