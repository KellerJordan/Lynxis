import { Meteor } from 'meteor/meteor';
import React from 'react';

// Meteor.autorun(() => {
// 	Meteor.subscribe('nodes');
// 	Meteor.subscribe('links');
// });

// export default const indexPage = React.createClass({
// 	getInitialState() {
// 		return { myPage: <div>abc</div> }
// 	},

// 	render() {
// 		return (
// 			<div>
// 				<nav>
// 					<div class="nav-wrapper">
// 						<a href="#" class="brand-logo">Lynxis</a>
// 						<ul id="nav-mobile" class="right hide-on-med-and-down">
// 							<li><a class="modal-trigger" href="#modal-instructions">Instructions</a></li>
// 						</ul>
// 					</div>
// 				</nav>

// 				{this.state.myPage}

// 				<div id="modal-instructions" class="modal">
// 					<div class="modal-content">
// 						<h4>Instructions</h4>
// 						<h5>Keybinds</h5>
// 						<p>
// 							<ul class="collection">
// 								<li class="collection-item row"><div class="col s1">Tab:</div>Switch between traversal and manipulation mode.</li>
// 								<li class="collection-item row"><div class="col s1">Q:</div>Render the root node.</li>
// 								<li class="collection-item row"><div class="col s1">W:</div>Render parent of focus.</li>
// 								<li class="collection-item row"><div class="col s1">E:</div></li>
// 								<li class="collection-item row"><div class="col s1">R:</div>Render selected node.</li>
// 								<li class="collection-item row"><div class="col s1">A:</div></li>
// 								<li class="collection-item row"><div class="col s1">S:</div></li>
// 								<li class="collection-item row"><div class="col s1">D + Ctrl:</div>Delete selected node.</li>
// 								<li class="collection-item row"><div class="col s1">F:</div>Insert new node with relation 'contains' to focus.</li>
// 							</ul>
// 						</p>
// 						<h5>Parsing</h5>
// 						<p>
// 							Indicate TeX by starting line with two dollar signs ('$$').
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	},

// 	componentDidMount() {
// 		$('.modal-trigger').leanModal();
// 	}
// });

export const IndexPage = React.createClass({
	render() {
		return <div>abcdef</div>;
	}
});