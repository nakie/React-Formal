'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
        var _props = this.props,
            className = _props.className,
            title = _props.title,
            helpText = _props.helpText,
            props = _objectWithoutProperties(_props, ['className', 'title', 'helpText']);

        return React.createElement(
            'div',
            { className: 'checkbox' },
            React.createElement(
                'label',
                null,
                React.createElement('input', _extends({
                    type: 'checkbox',
                    name: this.props.name
                }, props)),
                this.toggle(),
                this.props.title
            )
        );
    }
});

module.exports = Checkbox;