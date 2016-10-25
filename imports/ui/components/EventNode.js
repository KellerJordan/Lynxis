// /imports/ui/components/EventNode.js
import { Meteor } from 'meteor/meteor';
import { Nodes } from '/imports/api/nodes/nodes.js';
import { Links } from '/imports/api/links/links.js';
import { insertNode, upsertLink, getNodes, deleteNode, name_id } from '/imports/api/methods.js';
import React from 'react';


function getLink({ subject, object }) {
	let link = Links.findOne({ subject, object });
	return link ? link.text : '';
}

export const EventNode = React.createClass({
	getInitialState() {
		return {
			id: this.props.id,
			mode: this.props.mode
		}
	},

	TextNode(rel) {
		return (
			<TextNode
				id={rel._id}
				text={rel.text}
				mode={'view'}
				className="TextNode"
			/>
		);
	},

	render() {
		return (
			<div>
				<ul className="collection">
					<li>
						Name: {this.textNode()}
					</li>
					<li>
						Date:
					</li>
					<li>
						Location:
					</li>
				</ul>	
			</div>
		);
	}
});