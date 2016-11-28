'use strict';

var React = require('react');

var RadioBtn = React.createClass({
    displayName: 'RadioBtn',
    render: function render() {

        return React.createElement(
            'div',
            { className: 'checkbox' },
            React.createElement(
                'label',
                null,
                React.createElement('input', {
                    type: 'radio',
                    name: this.props.name
                }),
                this.props.title
            )
        );
    }
});

module.exports = RadioBtn;