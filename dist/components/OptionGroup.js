'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');

var FrmCheckbox = require('./Checkbox');
var FrmRadio = require('./Radio');
var FrmOption = require('./Option');

var OptionGroup = React.createClass({
    displayName: 'OptionGroup',


    getTitle: function getTitle() {

        if (typeof this.props.title === 'string') {

            return React.createElement(
                'label',
                { className: 'optionTitle' },
                this.props.title
            );
        } else {
            return;
        }
    }, // END function getTitle()


    renderOptions: function renderOptions() {

        //var  propOptions = this.generateOption();
        var propOptions = [];

        if (typeof this.props.options != 'undefined') {
            for (var key in this.props.options) {
                propOptions.push(this.generateOption(key, this.props.options[key]));
            }
        }

        if (this.props.type == "select") {
            var _props = this.props,
                className = _props.className,
                helpText = _props.helpText,
                options = _props.options,
                props = _objectWithoutProperties(_props, ['className', 'helpText', 'options']);

            return React.createElement(
                'select',
                _extends({
                    name: this.props.name,
                    disabled: this.props.disabled
                }, props),
                this.props.children,
                propOptions
            );
        } else {

            var children = [];

            children.push(propOptions);
            children.push(this.props.children);

            // if( typeof( this.props.children) != 'undefined' ){
            //     propOptions.push( this.props.children );
            // }

            // add generated Options to this return statement.
            //c
            //console.log( propOptions );
            //console.log( this.props.children );
            return children;
        }
    }, // END function renderOptions()

    generateOption: function generateOption(value, title) {

        switch (this.props.type) {

            case "select":

                return React.createElement(FrmOption, {
                    value: value,
                    title: title,
                    key: value
                });
                break;

            case "radio":

                return React.createElement(FrmRadio, {
                    name: this.props.name,
                    title: title,
                    value: value,
                    key: value
                });
                break;

            default:

                return React.createElement(FrmCheckbox, {
                    name: this.props.name,
                    title: title,
                    value: value,
                    key: value
                });

        } // END switch ( this.props.type)
    }, // END generateOption() options

    render: function render() {

        // Set a specific className for input group
        var className = 'optionGroup' + (className ? ' ' + this.props.className : '') + (this.props.required ? ' required' : '');

        return React.createElement(
            'div',
            { className: className },
            this.getTitle(),
            this.renderOptions()
        );
    } // END function render()

});

module.exports = OptionGroup;