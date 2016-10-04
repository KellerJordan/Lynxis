import { Meteor } from 'meteor/meteor';
import { Nodes, Links } from '/imports/api/nodes/nodes.js';
import { insertNode, upsertLink, getNodes, name_id } from '/imports/api/nodes/methods.js';
import './Lynxis.html';

import React from 'react';
import { render } from 'react-dom';

let focus, nodes;

Meteor.autorun(() => {

	Meteor.subscribe('nodes.all');
	Meteor.subscribe('links.all');

	focus = 'RTsTCFBnoHjDNn7Y4';
	// focus = '';

	Meteor.call('getNodes', { focus, text: 'contains' }, (error, result) => {
		render(<App focus={result.focus} nodes={result.nodes} />, document.getElementById('render-target'));
	});

	$('#addNode').off('click').on('click', () => { Meteor.call('insertNode', {}, (error, id) => {
		if(focus && !error) Meteor.call('upsertLink', { subject: focus, object: id, text: 'contains' });
	})});
});

const App = React.createClass({
	render() {
		let focus = this.props.focus, nodes = this.props.nodes;
		return (
			<div className="container">
				<div className="row" style={{ paddingTop: '20px' }}>
					<div className="col s12 focus">
						<TextNode id={focus._id} text={focus.name} />
					</div>
				</div>
				<ul className="collection">
					{nodes.map(node => {
						return (
							<li key={node._id} className="collection-item">
								<TextNode id={node._id} text={node.name} />
							</li>
						);
					})}
				</ul>
				<a className="waves-effect waves-light btn" id="addNode">Add a Node</a>
				<div className="description">
					abc
				</div>
			</div>
		);
	}
});

const TextNode = React.createClass({
	getInitialState() {
		return {
			text: this.props.text,
			hovered: false,
			focused: false
		}
	},

	handleChange(event) {
		let text = event.target.value;
		this.setState({ text });
		upsertLink.call({ subject: this.props.id, object: name_id, text });
	},

	handleHover(hover) { this.setState({ hovered: hover }) },

	handleFocus(focus) { this.setState({ focused: focus }) },

	render() {
		let text = this.state.text,
			html,
			TextNode;
		try { html = katex.renderToString(text) } catch(err) { if(err) html = text }

		if(this.state.hovered || this.state.focused) {
			TextNode = (
				<textarea
					onFocus={this.handleFocus.bind(this, true)}
					onChange={this.handleChange}
					onBlur={this.handleFocus.bind(this, false)}
					value={text}
				/>
			)
		} else {
			TextNode = (
				<div
					dangerouslySetInnerHTML={{__html: html}}
				/>
			)
		}

		return (
			<div className="TextNode" onMouseEnter={this.handleHover.bind(this, true)} onMouseLeave={this.handleHover.bind(this, false)} >
				{TextNode}
			</div>
		);
	}
});