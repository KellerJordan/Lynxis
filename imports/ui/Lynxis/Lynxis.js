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

	// focus = 'RTsTCFBnoHjDNn7Y4';
	focus = '';

	Meteor.call('getNodes', { focus, text: 'contains' }, (error, nodes) => {
		render(<App nodes={nodes} />, document.getElementById('render-target'));
	});

	$('#addNode').off('click').on('click', () => { Meteor.call('insertNode', {}, (error, id) => {
		if(focus && !error) Meteor.call('upsertLink', { subject: focus, object: id, text: 'contains' });
	})});
});

const App = React.createClass({
	render() {
		return (
			<div id="container">
				<ul className="collection">
					{this.props.nodes.map(node => {
						let id = node._id;
						return (
							<li key={id} className="collection-item">
								<TextNode id={id} text={node.name} />
							</li>
						);
					})}
					<li className="collection-item" id="addNode">Add a Node</li>
				</ul>
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

	componentWillReceiveProps: function(nextProps) { this.setState({ hovered: nextProps.hovered })},

	handleChange(event) {
		let text = event.target.value;
		this.setState({ text });
		upsertLink.call({ subject: this.props.id, object: name_id, text });
	},

	handleHover(hover) { this.setState({ hovered: hover }) },

	handleFocus(focus) {
		this.setState({ focused: focus });
	},

	render() {
		let text = this.state.text,
			divVisible = this.state.hovered || this.state.focused ? "hidden" : "visible",
			textareaVisible = (divVisible == "visible") ? "hidden" : "visible",
			html;
		try {
			html = katex.renderToString(text);
		} catch(err) {
			if(err) html = text;
		}
		return (
			<div onMouseEnter={this.handleHover.bind(this, true)} onMouseLeave={this.handleHover.bind(this, false)} >
				<textarea
					onFocus={this.handleFocus.bind(this, true)}
					onChange={this.handleChange}
					onBlur={this.handleFocus.bind(this, false)}
					value={text}
					rows={1}
					style={{
						visibility: textareaVisible,
						zIndex: 1000
					}}
				/>
				<div
				style={{visibility: divVisible}}
				className="TextNode"
				dangerouslySetInnerHTML={{__html: html}}
				/>
			</div>
		);
	}
});