'use strict';

var validator = require( 'validator' );

var Messages =  {

    required:       "This field is required.",
    email:          "Please enter a valid email address.",
    url:            "Please enter a valid URL.",
    number:         "Please enter a valid number.",
    digits:         "Please enter only digits.",
    equalTo:        "Please enter the same value again.",
    maxlength:      "Please enter no more than {0} characters." ,
    minlength:      "Please enter at least {0} characters." ,
    rangelength:    "Please enter a value between {0} and {1} characters long." ,
    range:          "Please enter a value between {0} and {1}." ,
    max:            "Please enter a value less than or equal to {0}." ,
    min:            "Please enter a value greater than or equal to {0}." ,
    step:           "Please enter a multiple of {0}.",
    date:           "Please enter a valid date.",
    before:         "Please enter a valid date before {0}.",
    after:          "Please enter a valid date after {0}.",
};


var Rules = {
    required: function( value, callback ){

        // return value.length > 0;
        // This does not properly handle Select / Checkbox / Radio
        // and will need some expanding

        // using the validator library to check for empty strings

        console.log( "value: " + value );

        return !validator.isEmpty( value );
    },

    //check if the string is an email.
    email: function( value, callback ){
        return validator.isEmail( value );
    },

    // check if the string's length is larger than specified
    minlength: function( value, callback ){
        return validator.isLength( value );
    },

    //check if the string's length is less than specified
    maxlength: function( value, callback ){
        return validator.isLength( value );
    },
    //check if the string's length alls in a range
    rangelength: function( value, callback ){
        return validator.isLength( value );
    },
    min: function( value, callback ){},
    max: function( value, callback ){},
    range: function( value, callback ){},
    step: function( value, callback ){},

    //check if the string is an URL
    url: function( value, callback ){
        return validator.isURL( value );
    },

    //check if the string contains only numbers.
    number: function( value, callback ){
        return validator.isNumeric( value );
    },

    //check if the string contains only letters (a-zA-Z).
    alpha: function( value, callback ){
        return validator.isAlpha( value );
    },

    //check if the string contains only letters and numbers
    alphanumeric: function( value, callback ){
        return validator.isAlphanumeric( value );
    },

    //check if the string is a date.
    date: function( value, callback ){},

    //check if the string is a date that's before the specified date.
    before: function( value, callback ){},

    //check if the string is a date that's after the specified date (defaults to now).
    after: function( value, callback ){},

    equalTo: function( value, callback ){},

}

var Validate = {

    run: function( rules, value, callback ){
        // console.log( rules );

        var valid = true

        if( typeof rules === 'string' ) {
            rules = rules.split( ' ' );
        }

        // console.log( rules);
        for( var i = 0; i < rules.length; i++ ){
            console.log( "- " + rules[ i ] + ": " + Rules[ rules[ i ] ]( value, callback ) );

        }

    },

    // simply an alias for run().
    field: function( rules, value, callback ){
        return this.run( rules, value );
    }

};


module.exports = Validate;