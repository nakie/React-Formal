'use strict';

var React = require('react');

var Option = React.createClass({
	displayName: 'Option',


	// changeValue: function( event ) {
	//
	// },

	render: function render() {

		return React.createElement(
			'option',
			{ value: this.props.value },
			this.props.title
		);
	}
});

module.exports = Option;