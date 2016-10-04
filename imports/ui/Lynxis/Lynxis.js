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
			<div id="container">
				<div className="row center-align" style={{ paddingTop: '20px' }}>
					<TextNode id={focus._id} text={focus.name} />
				</div>
				<ul className="collection">
					{nodes.map(node => {
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
					style={{
						visibility: textareaVisible,
						zIndex: 1000,
						fontSize: '14.67px',
						lineHeight: '20px',
						height: '20px'
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