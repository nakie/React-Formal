'use strict';

var validator = require('validator');

var Messages = {

    required: "This field is required.",
    email: "Please enter a valid email address.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    equalTo: "Please enter the same value again.",
    maxlength: "Please enter no more than {0} characters.",
    minlength: "Please enter at least {0} characters.",
    rangelength: "Please enter a value between {0} and {1} characters long.",
    range: "Please enter a value between {0} and {1}.",
    max: "Please enter a value less than or equal to {0}.",
    min: "Please enter a value greater than or equal to {0}.",
    step: "Please enter a multiple of {0}."
};

var Rules = {
    required: function required(value, callback) {

        return value.length > 0;
        // This does not properly handle Select / Checkbox / Radio
        // and will need some expanding
    }
};

var Validate = {

    run: function run(rules) {
        // console.log( rules );

        if (typeof rules === 'string') {
            rules = rules.split(' ');
        }

        // console.log( rules);
        for (var i = 0; i < rules.length; i++) {
            console.log(rules[i]);
        }
    },

    field: function field(rules) {
        return this.run(rules);
    }

};

module.exports = Validate;