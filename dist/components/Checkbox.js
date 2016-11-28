'use strict';

var React = require('react');

var Checkbox = React.createClass({
    displayName: 'Checkbox',


    // Show Visual Toggle/Sliders instead of Checkbox
    // This needs some CSS to reach full effect.
    toggle: function toggle() {

        if (typeof this.props.toggle != 'undefined') {

            if (this.props.toggle == 'round') {
                return React.createElement('div', { className: 'slider round' });
            }

            return React.createElement('div', { className: 'slider' });
        }

        return '';
    },

    render: function render() {

        return React.createElement(
            'div',
            { className: 'checkbox' },
            React.createElement(
                'label',
                null,
                React.createElement('input', {
                    type: 'checkbox',
                    name: this.props.name
                }),
                this.toggle(),
                this.props.title
            )
        );
    }
});

module.exports = Checkbox;