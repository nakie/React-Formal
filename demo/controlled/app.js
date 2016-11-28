"use strict";
var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var ReactFormal = require( 'react-formal' );

var FormalInput = ReactFormal.Input;

var FormalInputDuo = require( 'react-formal' ).Input;

console.log( "Basic Examples" );

var BasicForm = React.createClass({

    getInitialState: function(){
        return {
            'controlledText': ''
        }
    },

    handleSubmit: function( e ){
        e.preventDefault();


    },

    handleChange: function( e ){
        var elem = e.target;

        this.setState({ [elem.name]: elem.value });
        console.log( this.state );
    },

    render: function(){
        // console.log( ReactFormal );
        // console.log( ReactFormal.Input );
        // console.log( FormalInput );
        // console.log( FormalInputDuo );
        return(
            <form onSubmit={ this.handleSubmit }>

                <FormalInput
                    type    = "text"
                    name    = "controlledText"
                    title   = "Text Field"
                    helpText = "HI from HELP"
                    value   = { this.state.controlledText }
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