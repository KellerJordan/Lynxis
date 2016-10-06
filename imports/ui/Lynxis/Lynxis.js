import { Meteor } from 'meteor/meteor';
import { Nodes, Links } from '/imports/api/nodes/nodes.js';
import { insertNode, upsertLink, getNodes, deleteNode, name_id } from '/imports/api/nodes/methods.js';
import './Lynxis.html';

import React from 'react';
import { render } from 'react-dom';

let root_id, focus, mode = 'view';
root_id = '';
// focus = 'RTsTCFBnoHjDNn7Y4';

Meteor.autorun(() => {

	Meteor.subscribe('nodes.all');
	Meteor.subscribe('links.all');

	renderApp();
});

$(document).ready(() => { $('.modal-trigger').leanModal() });


function renderApp() {
	Meteor.call('getNodes', { root: root_id, text: 'contains' }, (error, result) => {
		render(<App root={result.root} nodes={result.nodes} />, document.getElementById('render-target'));
	});
}

const App = React.createClass({
	componentWillMount() {
		$(document).on('keydown', (e) => {
			if(mode == 'view') {
				switch(e.which) {
					case 81: // q
					root_id = '';
					renderApp();
					break;
					case 87: // w
					// go back by one
					break;
					case 69: // e
					// ?
					break;
					case 82: // r
					root_id = focus;
					renderApp();
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
						deleteNode.call({ id: focus });
					}
					break;
					case 70: // f
					Meteor.call('insertNode', {}, (error, id) => {
						if(root_id && !error) Meteor.call('upsertLink', { subject: root_id, object: id, text: 'contains' })
					})
					break;
				}
			}
			if(e.which == 9) {
				e.preventDefault();
				mode = (mode == 'edit') ? 'view' : 'edit';
				renderApp();
			}
		});
	},

	componentWillUnmount() {
		$(document).off('keydown');
	},

	render() {
		let root = this.props.root, nodes = this.props.nodes;
		return (
			<div className="container">
				<div className="row" style={{ paddingTop: '20px' }}>
					<div className="col s12 root">
						<TextNode id={root._id} text={root.name} />
					</div>
				</div>
				<div className="row">
					<ul className="collection">
						{nodes.map(node => {
							return (
								<li key={node._id} className="collection-item">
									<TextNode id={node._id} text={node.name} />
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
						{`Mode: ${mode == 'view' ? 'traversal' : 'manipulation'}`}
					</div>
				</div>
			</div>
		);
	}
});

const TextNode = React.createClass({
	getInitialState() { return { text: this.props.text } },

	componentWillReceiveProps({ id, text }) {
		if(id != this.props.id) this.setState({ text });
	},

	handleChange(e) {
		let text = e.target.value;
		this.setState({ text });
		upsertLink.call({ subject: this.props.id, object: name_id, text });
	},

	handleClick() {
		if(mode == 'view') {
			focus = this.props.id;
			renderApp();
		}
	},

	render() {
		let text = this.state.text, html, TextNode;

		try {
			if(text.substring(0, 2) == '$$') html = katex.renderToString(text.substring(2));
			else html = text;
		} catch(err) {
			html = text;
		}

		if(mode == 'edit') TextNode = <textarea onChange={this.handleChange} value={text} />;
		else TextNode = <div dangerouslySetInnerHTML={{__html: html}} />;

		return (
			<div className={`TextNode ${(focus == this.props.id && mode == 'view') ? 'focus' : ''}`} onClick={this.handleClick} >
				{TextNode}
			</div>
		);
	}
});