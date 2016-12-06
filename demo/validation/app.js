"use strict";
var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var ReactFormal = require( 'react-formal' );

var FormalInput = ReactFormal.Input;

var FormalInputDuo = require( 'react-formal' ).Input;

var vDater = ReactFormal.validator;

console.log( "Validation Examples" );

var BasicForm = React.createClass({

    getInitialState: function(){
        return {
            'validatedText': ''
        }
    },

    handleSubmit: function( e ){
        e.preventDefault();
    },

    handleChange: function( e ){
        var elem = e.target;

        this.setState({ [elem.name]: elem.value });
        //console.log( this.state );
    },

    validate: function( obj ){

        console.log( "Validation Called" );
        console.log( obj );

        // Do Validation here or inside Input components??
        // Te following will be used to pass Validation back up to the
        // Parent Component

        var tabValidation = {
            //active: this.isActive(),
            touched: true,
            valid: false
        };

        if( typeof( this.props.validate ) != 'undefined' ){
            this.props.validate( { [ this.tabID ]: tabValidation } );
        }

    },

    render: function(){
        // console.log( ReactFormal );
        // console.log( ReactFormal.Input );
        // console.log( FormalInput );
        // console.log( FormalInputDuo );
        return(
            <form onSubmit={ this.handleSubmit }>

                <FormalInput
                    type     = "text"
                    name     = "validatedText"
                    title    = "Text Field"
                    helpText = "HI from HELP"
                    validate = { this.validate }
                    rules    = 'required'
                    onChange = { this.handleChange }
                />


                <button
                    type		= "submit"
                    className	= ""
                >
                    Submit
                </button>

            </form>
        );
    } // END function render()
});

var container = document.getElementById( 'demoContainer' );
if( demoContainer != null ){
    ReactDOM.render(
        <BasicForm />,
        demoContainer
    );
}