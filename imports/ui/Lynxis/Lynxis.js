import { Meteor } from 'meteor/meteor';
import { Nodes, Links } from '/imports/api/nodes/nodes.js';
import { insertNode, upsertLink } from '/imports/api/nodes/methods.js';
import './Lynxis.html';

import React from 'react';
import { render } from 'react-dom';

let name_id, focal_id;

// nodes which are never objects should be linked to base focus

Meteor.startup(() => {
	Meteor.autorun(() => {

		Meteor.subscribe('nodes.all');
		Meteor.subscribe('links.all');

		name_id = 'qSmGHPege83uyw2Ss';
		// focal_id = 'RTsTCFBnoHjDNn7Y4';

		render(<App nodes={getNodes({ subject: focal_id, text: 'contains' })} />, document.getElementById('render-target'));

		$('#addNode').off('click').on('click', () => { insertNode.call() });
	});
});

// move this function to the server
function getLink({ subject, object }) {
	let link = Links.findOne({ subject, object });
	return link ? link.text : '_';
}
	
function getNodes({ subject, text }) {
	let nodes = [];
	Nodes.find().forEach(node => {
		// focus exists and node is linked, or focus does not exist and node is unlinked
		if((subject && Links.findOne({ subject, object: node._id, text })) || (!subject && !Links.findOne({ object: node._id, text }))) {
			nodes.push(node);
		}
	});
	return nodes;
}


const App = React.createClass({
	render() {
		return (
			<div id="container">
				<ul className="collection">
					{this.props.nodes.map(node => {
						let id = node._id;
						return (
							<li key={id} className="collection-item">
								<TextNode id={id} text={getLink({ subject: id, object: 'qSmGHPege83uyw2Ss' })} />
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
		upsertLink.call({
			subject: this.props.id,
			object: name_id,
			text: text
		});
		Katex.render(document.selectElementById)
	},

	handleHover(hover) { this.setState({ hovered: hover }) },

	handleFocus(focus) {
		this.setState({ focused: focus });
	},

	render() {
		let text = this.state.text,
			divVisible = this.state.hovered || this.state.focused ? "hidden" : "visible",
			textareaVisible = (divVisible == "visible") ? "hidden" : "visible",
			html = katex.renderToString(text);
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