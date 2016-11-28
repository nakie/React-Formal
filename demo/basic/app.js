var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var ReactFormal = require( 'react-formal' );

var FormalInput = ReactFormal.Input;

var FormalInputDuo = require( 'react-formal' ).Input;

console.log( "Basic Examples" );

var BasicForm = React.createClass({

    handleSubmit: function( e ){
        e.preventDefault();
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
                    name    = "basicText"
                    title   = "Text Field"
                />

                <FormalInput
                    type    = "Color"
                    name    = "basicColor"
                    title   = "Color Field"
                />

                <FormalInput
                    type    = "date"
                    name    = "basicDate"
                    title   = "Date Field"
                />

                <FormalInput
                    type    = "email"
                    name    = "basicEmail"
                    title   = "Email Field"
                />

                <FormalInput
                    type    = "file"
                    name    = "basicFile"
                    title   = "File Field"
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