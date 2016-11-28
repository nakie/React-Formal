"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');

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

var MyTextareat = React.createClass({
    displayName: 'MyTextareat',


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

        var errorText = '';

        var errorMessage = React.createElement(
            'span',
            { className: 'validation-error' },
            errorText
        );

        return null;
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

    render: function render() {
        var _props = this.props,
            className = _props.className,
            helpText = _props.helpText,
            value = _props.value,
            props = _objectWithoutProperties(_props, ['className', 'helpText', 'value']);

        // Set a specific className for input group


        var groupClass = 'inputGroup' + (className ? ' ' + this.props.className : '') + (this.props.required ? ' required' : '');

        // Get provided or generated ID for input element
        var elementID = this._getID();

        // Init placeholder Test to Empty( Null ) String
        // Only place placeholder test when Labels are turned off
        var placeholderValue = '';

        // if no label is shown and no placeholder provided
        // use Title as placeholder
        if (this.props.showLabel === false) {
            if (typeof props.placeholderValue == 'undefined') {
                props.placeholderValue = this.props.title;
            }
        }

        return React.createElement(
            'div',
            { className: groupClass },
            React.createElement(MyLabel, {
                showLabel: this.props.showLabel,
                name: elementID,
                title: this.props.title
            }),
            React.createElement('textarea', _extends({
                id: elementID,
                name: this.props.name
            }, props)),
            this._errorMessage(),
            this._helpText()
        );
    }
});

module.exports = MyTextareat;