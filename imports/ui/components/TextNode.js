// /imports/ui/components/TextNode.js
import { Meteor } from 'meteor/meteor';
import { Nodes } from '/imports/api/nodes/nodes.js';
import { Links } from '/imports/api/links/links.js';
import { upsertLink } from '/imports/api/methods.js';
import React from 'react';

const Name_ID = Links.find({ text: 'name' });

export const TextNode = React.createClass({
	getInitialState() {
		return {
			text: this.props.text,
		}
	},

	handleChange(event) {
		let text = event.target.value;
		this.setState({ text });
		upsertLink.call({ subject: this.props.id, object: Name_ID, text });
	},

	render() {
		let text = this.state.text, html, TextNode;

		try {
			if(text.substring(0, 2) == '$$') html = katex.renderToString(text.substring(2));
			else throw(1);
		} catch(err) {
			html = text
				.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/"/g, "&quot;")
				.replace(/'/g, "&#039;");
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