import { Meteor } from 'meteor/meteor';
import React from 'react';
import 'meteor/materialize:materialize';

export const MainLayout = React.createClass({
	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<a href="#" className="brand-logo">Lynxis</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li><a className="modal-trigger" href="#modal-instructions">Instructions</a></li>
						</ul>
					</div>
				</nav>
				<div id="modal-instructions" className="modal">
					<div className="modal-content">
						<h4>Instructions</h4>
						<h5>Keybinds</h5>
						<ul className="collection">
							<li className="collection-item row"><div className="col s1">Tab:</div>Switch between traversal and manipulation mode.</li>
							<li className="collection-item row"><div className="col s1">Q:</div>Render the root node.</li>
							<li className="collection-item row"><div className="col s1">W:</div>Render parent of focus.</li>
							<li className="collection-item row"><div className="col s1">E:</div></li>
							<li className="collection-item row"><div className="col s1">R:</div>Render selected node.</li>
							<li className="collection-item row"><div className="col s1">A:</div></li>
							<li className="collection-item row"><div className="col s1">S:</div></li>
							<li className="collection-item row"><div className="col s1">D + Ctrl:</div>Delete selected node.</li>
							<li className="collection-item row"><div className="col s1">F:</div>Insert new node with relation 'contains' to focus.</li>
						</ul>
						<h5>Parsing</h5>
						<p>
							Indicate TeX by starting line with two dollar signs ('$$').
						</p>
					</div>
				</div>
				{this.props.page}
			</div>
		);
	},

	componentDidMount() {
		$('.modal-trigger').leanModal();
	}
});