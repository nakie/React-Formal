"use strict";

var React = require('react');

var Checkbox = React.createClass({
    displayName: "Checkbox",


    getInitialState: function getInitialState() {
        return { itemChecked: false };
    },

    changeValue: function changeValue(event) {

        this.setState({ "itemChecked": event.target.checked });

        if (typeof this.props.toggleOption != "undefined") {

            if (typeof this.props.toggleElement != "undefined") {
                this.props.toggleOption(this.props.toggleElement);
            } else {
                this.props.toggleOption(event);
            }
        }
    },

    toggle: function toggle() {

        if (typeof this.props.toggle != 'undefined') {

            if (this.props.toggle == 'round') {
                return React.createElement("div", { className: "slider round" });
            }

            return React.createElement("div", { className: "slider" });
        }

        return '';
    },

    hasError: function hasError() {

        if (this.error === true) {

            return React.createElement(
                "span",
                { className: "validation-error" },
                errorMessage
            );
        }

        return '';
    },

    render: function render() {

        // An error message is returned ONLY if the component is invalid
        // or the server has returned an error message
        // var errorMessage = this.getErrorMessage();
        var errorMessage = this.hasError();

        // console.log( "Called: Checkbox render() for: " + this.props.name );

        var helpText = null;

        if (typeof this.props.helpText !== 'undefined') {

            helpText = React.createElement(
                "p",
                { className: "help-block" },
                this.props.helpText
            );
        }

        // console.log( "Rendering - " + this.props.value + " Rendered as: " + this.state.itemChecked );

        return React.createElement(
            "div",
            { className: "checkbox" },
            React.createElement(
                "label",
                null,
                React.createElement("input", {
                    type: 'checkbox',
                    name: this.props.name,
                    onChange: this.changeValue,
                    disabled: this.props.disabled,
                    value: this.props.value
                }),
                this.toggle(),
                this.props.title
            ),
            errorMessage,
            helpText
        );
    }
});

module.exports = Checkbox;