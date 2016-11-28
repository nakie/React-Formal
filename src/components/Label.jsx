"use strict";
var React = require( 'react' );

var MyLabel = React.createClass({
    
    propTypes: {
        showLabel: React.PropTypes.bool,
    },

    // Initialize showLabel to true;
    getDefaultProps: function(){
        return{
            showLabel:true
        };
    }, // END getDefaultProps()

    render: function() {

        // Display HTML Label
        if( this.props.showLabel === true ){
            return (
                <label htmlFor={ this.props.name }>{ this.props.title }</label>
            );
        }else{
            return null;
        }
    } // END render()

}); // END MyLabel

module.exports = MyLabel;