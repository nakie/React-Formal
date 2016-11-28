'use strict';

var _suffix;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = require('react');

var MyLabel = require('./Label');

var suffix = (_suffix = {

		default: "Txt",

		button: "Btn",
		checkbox: "Opt",
		email: "Eml",
		file: "Fl",
		image: "Img",
		number: "Num",
		radio: "Opt",
		text: "Txt"
}, _defineProperty(_suffix, 'radio', "Opt"), _defineProperty(_suffix, 'submit', "Btn"), _defineProperty(_suffix, 'reset', "Btn"), _suffix);

var MyInput = React.createClass({
		displayName: 'MyInput',


		render: function render() {

				// Set a specific className based on the validation
				// state of this component. showRequired() is true
				// when the value is empty and the required prop is
				// passed to the input. showError() is true when the
				// value typed is invalid
				var className = 'inputGroup' + (this.props.className ? ' ' + this.props.className : '');
				// ( this.showRequired() ? ' required' : '' ) +
				//( this.showError() ? ' error' : '' );

				// An error message is returned ONLY if the component is invalid
				// or the server has returned an error message
				//var errorMessage = this.getErrorMessage();

				// errorMesage THIS NEEDS TO BE REDEFINED
				var errorMessage = '';

				var helpText = null;

				if (typeof this.props.helpText !== 'undefined') {

						helpText = React.createElement(
								'p',
								{ className: 'help-block' },
								this.props.helpText
						);
				}

				var elementID = '';

				if (suffix.hasOwnProperty(this.props.type)) {

						elementID = this.props.name + suffix[this.props.type];
				} else {

						elementID = this.props.name + suffix.default;
				}

				var isRequired = false;

				if (this.props.required === true) {
						isRequired = "required";
				}

				// Init placeholder Test to Empty( Null ) String
				// Only place placeholder test when Labels are turned off
				var placeholderValue = '';

				if (this.props.showLabel === false) {
						placeholderValue = this.props.title;
				}

				return React.createElement(
						'div',
						{ className: className },
						React.createElement(MyLabel, {
								showLabel: this.props.showLabel,
								name: elementID,
								title: this.props.title
						}),
						React.createElement('input', {
								id: elementID,
								type: this.props.type || 'text',
								name: this.props.name,
								placeholder: placeholderValue
						}),
						React.createElement(
								'span',
								{ className: 'validation-error' },
								errorMessage
						)
				);
		}
});

module.exports = MyInput;