'use strict';

var React = require('react');

var RadioBtn = React.createClass({
        displayName: 'RadioBtn',


        changeValue: function changeValue(event) {

                var newState = {};

                /** [ event.target.name ] syntax below does not work in IE
                 * this.setState( { [event.target.name]: event.target.value } );
                 *
                 * alteraning to use square bracket notation of reference/setting
                 * an object key works across browsers..
                 *
                 */
                newState[event.target.name] = event.target.value;
                this.setState(newState);

                //console.log( event.target.name );
                // var key = event.target.name;
                // this.setState( { [event.target.name]: event.target.value} );

                if (typeof this.props.changeValue == 'undefined') {

                        this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
                } else {

                        this.props.changeValue(event.target.value, this.props.modelGroup, this.props.modelValue);
                }
        },

        render: function render() {

                return React.createElement(
                        'div',
                        { className: 'checkbox' },
                        React.createElement(
                                'label',
                                null,
                                React.createElement('input', {
                                        type: 'radio',
                                        name: this.props.name,
                                        onChange: this.changeValue,
                                        checked: this.props.type === 'radio' && this.getValue() ? 'checked' : null,
                                        value: this.props.value
                                }),
                                this.props.title
                        )
                );
        }
});

module.exports = RadioBtn;