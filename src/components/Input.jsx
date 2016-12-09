"use strict";
var React = require( 'react' );

var Validate = require( '../validate' );
var MyLabel  = require( './Label' );

var suffix = {
	default:  "Txt",
	button:   "Btn",
	checkbox: "Opt",
	email:    "Eml",
	file:     "Fl",
	image:    "Img",
	number:   "Num",
	radio:    "Opt",
	text:     "Txt",
	submit:   "Btn",    
	reset:    "Btn"
};

var MyInput = React.createClass({

    getInitialState: function(){
        return {
            value: this._getValue()
        }
    },

    getDefaultProps: function() {

        return {
            type: 'text',

        };
    },

    _getID: function() {

        // if ID is explicitly stated use it
        if( typeof this.props.id !== 'undefined' ) {
            return this.props.id;
        }

        // Generate ID using element name if none provided
        var elementID = '';
        if( suffix.hasOwnProperty( this.props.type )){
            elementID = this.props.name + suffix[ this.props.type ];
        }else{
            elementID = this.props.name + suffix.default;
        }

        return elementID;
    }, // END _getID()

    _errorMessage: function(){

        var errorText = '';

        var errorMessage =  <span className='validation-error' >{ errorText }</span>

        if( Boolean(this.props.error) ){
            return this.props.error;
        } else {
            return null;
        }

    }, // END _errorMessage()

    _helpText: function(){

        var helpText = null;

        if( typeof this.props.helpText !== 'undefined' ){
            helpText = <p className="help-block" >{ this.props.helpText }</p>;
        }

        return helpText;

    }, // END _helpText()

    _getValue: function(){

        if( typeof(this.props.value) != "undefined" ){
            return this.props.value;
        } else {
            return '';
        }

    },

    _valueChange: function( e ){

        var curValue = e.target.value;

        this.setState({ 'value': curValue  });


        if( typeof( this.props.onChange ) == 'function' ){

            // console.log( "onChange" );
            this.props.onChange( e );

        }

        //if( typeof( this.props.validate ) == 'function' ){
        if( Boolean( this.props.validate ) ){

            var result = Validate.field( this.props.rules, curValue );

            console.log( "validate result = " + result );

            if( typeof( this.props.validate ) == 'function' ) {
                this.props.validate(e);
            }

        }

    },

	render: function(){

		let{ className, helpText, showLabel, onChange, validate, rules, error, ...props } = this.props;

		// Set a specific className for input group
		var groupClass = 'inputGroup' +
            ( Boolean( className ) ?  ' ' + this.props.className: '' ) +
            ( Boolean( this.props.required ) ?  ' required': '' ) +
            ( Boolean( error ) ? ' error' : '' );

        // Get provided or generated ID for input element
        var elementID = this._getID();

		// Init placeholder Test to Empty( Null ) String
		// Only place placeholder test when Labels are turned off
		var placeholderValue = '';

        // if no label is shown and no placeholder provided
        // use Title as placeholder
		if( showLabel === false ){
		    if( typeof( props.placeholderValue ) == 'undefined' ){
                props.placeholder = this.props.title;
            }
		}

		return (

			<div className = { groupClass } >
                <MyLabel
                    showLabel 	= { showLabel }
                    name 		= { elementID }
                    title 		= { props.title }
                />
			    <input
                    id          = { elementID }
                    onChange    = { this._valueChange }
                    value       = { this.state.value }
                    { ...props }
                />
			    { this._errorMessage() }
                { this._helpText() }

			</div>

		);
	}

});

module.exports = MyInput;
