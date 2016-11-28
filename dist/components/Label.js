"use strict";

var React = require('react');

var MyLabel = React.createClass({
    displayName: "MyLabel",


    propTypes: {
        showLabel: React.PropTypes.bool
    },

    // Initialize showLabel to true;
    getDefaultProps: function getDefaultProps() {
        return {
            showLabel: true
        };
    }, // END getDefaultProps()

    render: function render() {

        // Display HTML Label
        if (this.props.showLabel === true) {
            return React.createElement(
                "label",
                { htmlFor: this.props.name },
                this.props.title
            );
        } else {
            return null;
        }
    } // END render()

}); // END MyLabel

module.exports = MyLabel;