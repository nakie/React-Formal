'use strict';

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

    changeValue: function changeValue(e) {

        if (typeof this.props.changeValue != 'undefined') {
            this.props.changeValue(e.target.value);
        }
    },

    renderOptions: function renderOptions() {

        //var  propOptions = this.generateOptions();
        var propOptions = [];

        if (typeof this.props.options != 'undefined') {
            for (var key in this.props.options) {
                propOptions.push(this.generateOptions(key, this.props.options[key]));
            }
        }

        if (this.props.type == "select") {

            return React.createElement(
                'select',
                {
                    name: this.props.name,
                    disabled: this.props.disabled,
                    onChange: this.changeValue
                },
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

    generateOptions: function generateOptions(value, title) {

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
    }, // END generateOptions() options

    render: function render() {

        var className = 'optionGroup' + (this.props.className ? ' ' + this.props.className : '');

        return React.createElement(
            'div',
            { className: className },
            this.getTitle(),
            this.renderOptions()
        );
    } // END function render()

});

module.exports = OptionGroup;