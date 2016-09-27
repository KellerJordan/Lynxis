import { Meteor } from 'meteor/meteor';
import { Nodes, Links } from '/imports/api/nodes/nodes.js';
import { insertNode, insertLink, updateNode } from '/imports/api/nodes/methods.js';
import './Lynxis.html';

import React from 'react';
import { render } from 'react-dom';


Meteor.startup(() => {
	Meteor.autorun(() => {

		Meteor.subscribe('nodes.all');
		render(<App nodes={Nodes.find()} />, document.getElementById('render-target'));

		$('#addNode').unbind('click').bind('click', () => {
			insertNode.call({});
		});
		
	});
});

var App = React.createClass({
	render() {
		return (
			<div id="container">
				<ul className="collection">
					{this.props.nodes.map(node => {
						return (
							<li key={node._id} className="collection-item">
								<TextNode id={node._id} text={node.date} />
							</li>
						);
					})}
					<li className="collection-item" id="addNode">Add a Node</li>
				</ul>
			</div>
		);
	}
});

var TextNode = React.createClass({
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
		const node = {
			_id: this.props.id,
			date: text
		};
		updateNode.call(node);
	},

	handleHover(hover) { this.setState({ hovered: hover }) },

	handleFocus(focus) {
		this.setState({ focused: focus });
		// if(!focus) MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
	},

	render() {
		var text = this.state.text,
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