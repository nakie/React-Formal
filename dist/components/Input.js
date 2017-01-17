"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');

var Validate = require('../validate');
var MyLabel = require('./Label');

var suffix = {
    default: "Txt",
    button: "Btn",
    checkbox: "Opt",
    email: "Eml",
    file: "Fl",
    image: "Img",
    number: "Num",
    radio: "Opt",
    text: "Txt",
    submit: "Btn",
    reset: "Btn"
};

var MyInput = React.createClass({
    displayName: 'MyInput',


    getInitialState: function getInitialState() {
        return {
            value: this._getValue(),
            errors: []
        };
    },

    getDefaultProps: function getDefaultProps() {

        return {
            type: 'text'

        };
    },

    _getID: function _getID() {

        // if ID is explicitly stated use it
        if (typeof this.props.id !== 'undefined') {
            return this.props.id;
        }

        // Generate ID using element name if none provided
        var elementID = '';

        if (suffix.hasOwnProperty(this.props.type)) {
            elementID = this.props.name + suffix[this.props.type];
        } else {
            elementID = this.props.name + suffix.default;
        }

        return elementID;
    }, // END _getID()

    _errorMessage: function _errorMessage() {

        // var errorText = '';

        //Initial Error provided to Component
        var initialError = this.props.error;

        // Errors generated from Input validation
        var validationErrors = this.state.errors;

        // Errors that will be returned from component
        var errorMessages = [];

        // Create initial Error Markup
        if (Boolean(initialError)) {
            var errorMessage = React.createElement(
                'span',
                { className: 'validation-error' },
                initialError
            );

            errorMessages.push(errorMessage);
        }

        // Create Error Markup for any validation errors
        if (validationErrors.length > 0) {

            for (var i = 0; i < validationErrors.length; i++) {
                /**
                 * validationErrors[i] = {
                 *      rule: Name of rule that triggered error
                 *      message: default error message for rule
                 * }
                 *
                 */
                var errorMessage = React.createElement(
                    'span',
                    { className: 'validation-error' },
                    validationErrors[i].message
                );
                errorMessages.push(errorMessage);
            }
        }

        if (Boolean(this.props.error) || this.state.errors.length > 0) {
            return errorMessages;
        } else {
            return null;
        }
    }, // END _errorMessage()

    _helpText: function _helpText() {

        var helpText = null;

        if (typeof this.props.helpText !== 'undefined') {
            helpText = React.createElement(
                'p',
                { className: 'help-block' },
                this.props.helpText
            );
        }

        return helpText;
    }, // END _helpText()

    _getValue: function _getValue() {

        if (typeof this.props.value != "undefined") {
            return this.props.value;
        } else {
            return '';
        }
    },

    _valueChange: function _valueChange(e) {

        var curValue = e.target.value;

        var newState = { 'value': curValue };

        if (typeof this.props.onChange == 'function') {

            // console.log( "onChange" );
            this.props.onChange(e);
        }

        //if( typeof( this.props.validate ) == 'function' ){
        if (Boolean(this.props.validate)) {

            var result = Validate.field(this.props.rules, curValue);

            newState.errors = result;

            // console.log( "validate result = " + result );
            // console.log( result );

            /**
             * TODO update local state and create return object
             *  with error result AND element/input name and ID
             *  pass this on to this.props.validate callback along
             *  with the event.
             */

            if (typeof this.props.validate == 'function') {

                var errorObj = {
                    errors: result,
                    name: this.props.name,
                    id: this._getID()
                };

                this.props.validate(errorObj, e);
            }
        }

        this.setState(newState);
    }, //- END function _valueChange

    render: function render() {
        var _props = this.props,
            className = _props.className,
            helpText = _props.helpText,
            showLabel = _props.showLabel,
            onChange = _props.onChange,
            validate = _props.validate,
            rules = _props.rules,
            error = _props.error,
            props = _objectWithoutProperties(_props, ['className', 'helpText', 'showLabel', 'onChange', 'validate', 'rules', 'error']);

        // Set a specific className for input group


        var groupClass = 'inputGroup' + (Boolean(className) ? ' ' + this.props.className : '') + (Boolean(this.props.required) ? ' required' : '') + (Boolean(error) ? ' error' : '');

        // Get provided or generated ID for input element
        var elementID = this._getID();

        // Init placeholder Test to Empty( Null ) String
        // Only place placeholder test when Labels are turned off
        var placeholderValue = '';

        // if no label is shown and no placeholder provided
        // use Title as placeholder
        if (showLabel === false) {
            if (typeof props.placeholderValue == 'undefined') {
                props.placeholder = this.props.title;
            }
        }

        return React.createElement(
            'div',
            { className: groupClass },
            React.createElement(MyLabel, {
                showLabel: showLabel,
                name: elementID,
                title: props.title
            }),
            React.createElement('input', _extends({
                id: elementID,
                onChange: this._valueChange,
                value: this.state.value
            }, props)),
            this._errorMessage(),
            this._helpText()
        );
    }

});

module.exports = MyInput;