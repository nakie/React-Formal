var React = require( 'react' );

var Checkbox = React.createClass({

    getInitialState: function() {
        return { itemChecked: false }
    },

    changeValue: function( event ) {

        this.setState( { "itemChecked":  event.target.checked } );

        if( typeof( this.props.toggleOption ) != "undefined" ){

            if( typeof( this.props.toggleElement ) != "undefined" ) {
                this.props.toggleOption( this.props.toggleElement );
            } else {
                this.props.toggleOption( event );
            }
        }

    },

    toggle: function() {

        if( typeof( this.props.toggle ) != 'undefined' ){

            if( this.props.toggle == 'round' ){
                return <div className="slider round"></div>
            }

            return <div className="slider"></div>
        }

        return '';

    },

    hasError: function (){

        if( this.error === true ){

            return ( <span className='validation-error' >{ errorMessage }</span> );
        }

        return '';

    },

    render() {

        // An error message is returned ONLY if the component is invalid
        // or the server has returned an error message
        // var errorMessage = this.getErrorMessage();
         var errorMessage = this.hasError();

       // console.log( "Called: Checkbox render() for: " + this.props.name );

        var helpText = null;

        if( typeof this.props.helpText !== 'undefined' ){

            helpText = <p className="help-block" >{ this.props.helpText }</p>;

        }

        // console.log( "Rendering - " + this.props.value + " Rendered as: " + this.state.itemChecked );

        return (

			<div className="checkbox">

				<label >

                    <input
                        type	        = { 'checkbox' }
                        name	        = { this.props.name }
                    />
                    { this.toggle() }
                    { this.props.title }

                </label>
                { errorMessage }
                { helpText }
            </div>

        );
    }
});

module.exports = Checkbox;
