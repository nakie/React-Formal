
var React = require('react');

var FrmCheckbox = require( './Checkbox' );
var FrmRadio	= require( './Radio' );
var FrmOption   = require( './Option' );

var OptionGroup = React.createClass({

	getTitle: function(){
		
		if( typeof this.props.title === 'string' ){

			return(
				<label className="optionTitle">{ this.props.title }</label>
			);

		} else {
			return;
		}

	}, // END function getTitle()


    _helpText: function(){

        var helpText = null;

        if( typeof this.props.helpText !== 'undefined' ){
            helpText = <p className="help-block" >{ this.props.helpText }</p>;
        }

        return helpText;

    }, // END _helpText()

    _errorMessage: function(){

        // var errorText = '';

        //Initial Error provided to Component
        var initialError = this.props.error;

        // Errors generated from Input validation
        var validationErrors = this.state.errors;

        // Errors that will be returned from component
        var errorMessages = [];

        // Create initial Error Markup
        if( Boolean( initialError ) ) {
            var errorMessage =  <span className='validation-error' >{ initialError }</span>

            errorMessages.push( errorMessage );
        }

        // Create Error Markup for any validation errors
        if( validationErrors.length > 0 ) {

            for( var i = 0; i < validationErrors.length; i++ ) {
                /**
                 * validationErrors[i] = {
                 *      rule: Name of rule that triggered error
                 *      message: default error message for rule
                 * }
                 *
                 */
                var errorMessage =  <span className='validation-error' >{ validationErrors[i].message }</span>
                errorMessages.push( errorMessage );
            }

        }

        if( Boolean( this.props.error ) || this.state.errors.length > 0 ){
            return errorMessages;
        } else {
            return null;
        }

    }, // END _errorMessage()

	renderOptions: function( ){

	    //var  propOptions = this.generateOption();
        var propOptions = [];

        if( typeof( this.props.options ) != 'undefined' ){
            for( var key in this.props.options ){
                propOptions.push( this.generateOption( key, this.props.options[ key ] ) );
            }
        }

		if( this.props.type == "select" ){

            let{ className, helpText, options, ...props } = this.props;

			return(

				<select
                    name        = { this.props.name }
                    disabled    = { this.props.disabled }
                    { ...props }
                >
					
				    { this.props.children }

                    { propOptions }

			    </select>
            );

		} else {

		    var children = [];

            children.push( propOptions );
            children.push( this.props.children );

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

    generateOption: function( value, title ){

        switch( this.props.type ) {

            case "select":

                return(
                    <FrmOption
                        value   = { value }
                        title   = { title }
                        key     = { value }
                    />
                );
                break;

            case "radio":

               return (
                   <FrmRadio
                        name    = { this.props.name }
                        title   = { title }
                        value   = { value }
                        key     = { value }
                    />
               );
               break;

            default:

               return(
                   <FrmCheckbox
                        name    = { this.props.name }
                        title   = { title }
                        value   = { value }
                        key     = { value }
                    />
               );

        } // END switch ( this.props.type)

    }, // END generateOption() options

	render: function() {

        // Set a specific className for input group
        var className = 'optionGroup' +
            ( className ?  ' ' + this.props.className: '' ) +
            ( this.props.required ?  ' required': '' );

		return (

			<div className={ className } >

				{ this.getTitle() }

				{ this.renderOptions() }

                { this._errorMessage() }
                { this._helpText() }

			</div>

		);

	} // END function render()

});

module.exports = OptionGroup;
