import { Meteor } from 'meteor/meteor';
import { Nodes, Links } from '/imports/api/nodes/nodes.js';
import { insertNode, updateLink, updateNode, getLink } from '/imports/api/nodes/methods.js';
import './Lynxis.html';

import React from 'react';
import { render } from 'react-dom';

var name_id = 'qSmGHPege83uyw2Ss';
var focal_id = 'RTsTCFBnoHjDNn7Y4';

Meteor.startup(() => {
	Meteor.autorun(() => {

		Meteor.subscribe('nodes.all');
		Meteor.subscribe('links.all');
		render(<App nodes={Nodes.find()} />, document.getElementById('render-target'));

		$('#addNode').off('click').on('click', () => { insertNode.call() });
		
	});
});

const App = React.createClass({
	render() {
		return (
			<div id="container">
				<ul className="collection">
					{this.props.nodes.map(node => {
						var id = node._id;
						return (
							<li key={id} className="collection-item">
								<TextNode id={id} text={getLink.call({ subject: id, object: 'qSmGHPege83uyw2Ss' })} />
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
		const text = event.target.value;
		this.setState({ text });
		updateLink.call({
			subject: this.props.id,
			object: name_id,
			text: text
		});
	},

	handleHover(hover) { this.setState({ hovered: hover }) },

	handleFocus(focus) {
		this.setState({ focused: focus });
		// if(!focus) MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
	},

	render() {
		const text = this.state.text,
			divVisible = this.state.hovered || this.state.focused ? "hidden" : "visible",
			textareaVisible = (divVisible == "visible") ? "hidden" : "visible";
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
					style={{
						visibility: divVisible,
					}}
					className="TextNode"
				>
					{text}
				</div>
			</div>
		);
	}
});