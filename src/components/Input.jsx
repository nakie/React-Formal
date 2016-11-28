var React = require( 'react' );

var MyLabel = require( './Label' );

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
	radio:    "Opt",    
	submit:   "Btn",    
	reset:    "Btn"

};

var MyInput = React.createClass({


	render: function(){
		
		// Set a specific className based on the validation
		// state of this component. showRequired() is true
		// when the value is empty and the required prop is
		// passed to the input. showError() is true when the
		// value typed is invalid
		var className = 'inputGroup' +
            ( this.props.className ?  ' ' + this.props.className: '' );
			// ( this.showRequired() ? ' required' : '' ) +
            //( this.showError() ? ' error' : '' );

		// An error message is returned ONLY if the component is invalid
		// or the server has returned an error message
		//var errorMessage = this.getErrorMessage();

        // errorMesage THIS NEEDS TO BE REDEFINED
        var errorMessage = '';

		var helpText = null;

		if( typeof this.props.helpText !== 'undefined' ){

			helpText = <p className="help-block" >{ this.props.helpText }</p>;

		}

		var elementID = '';

		if( suffix.hasOwnProperty( this.props.type )){

			elementID = this.props.name + suffix[ this.props.type ];

		}else{

			elementID = this.props.name + suffix.default;
		}

		var isRequired = false;

		if( this.props.required === true ){
			isRequired = "required";
		}

		// Init placeholder Test to Empty( Null ) String
		// Only place placeholder test when Labels are turned off
		var placeholderValue = '';

		if( this.props.showLabel === false ){
			placeholderValue = this.props.title;
		}

		return (

			<div className = { className }>
                <MyLabel
                    showLabel 	= { this.props.showLabel }
                    name 		= { elementID }
                    title 		= { this.props.title }
                />
			    <input
                    id          = { elementID }
                    type        = { this.props.type || 'text' }
                    name        = { this.props.name }
                      placeholder = { placeholderValue }
                />
			    <span className='validation-error'>{ errorMessage }</span>
			</div>

		);
	}
});

module.exports = MyInput;
