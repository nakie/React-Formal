var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var ReactFormal = require( 'react-formal' );

var FormalInput = ReactFormal.Input;
var FormalTextarea = ReactFormal.Textarea;

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
            <form onSubmit={ this.handleSubmit } >

                <FormalInput
                    type    = "text"
                    name    = "basic"
                    title   = "Text Field"
                />

                <FormalInput
                    type    = "text"
                    name    = "help"
                    title   = "With Help"
                    helpText= 'Field with some help text provided'
                />

                <FormalInput
                    type    = "text"
                    name    = "required"
                    title   = "Required"
                    helpText = "This field is flaged as required but no JS validation applied"
                    required = { true }
                />

                <FormalInput
                    type    = "text"
                    name    = "customClass"
                    title   = "Custom Class"
                    helpText = "inspect element to see additional class"
                    className = 'myCustomClass'
                />


                <FormalTextarea
                    name = "myTextarea"
                    title = "A Textarea"
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