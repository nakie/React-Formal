var React = require( 'react' );

var Checkbox = React.createClass({

    // Show Visual Toggle/Sliders instead of Checkbox
    // This needs some CSS to reach full effect.
    toggle: function() {

        if( typeof( this.props.toggle ) != 'undefined' ){

            if( this.props.toggle == 'round' ){
                return <div className="slider round"></div>
            }

            return <div className="slider"></div>
        }

        return '';

    },

    render() {

        let{ className, title, helpText, ...props } = this.props;

        return (

			<div className="checkbox">

				<label >

                    <input
                        type	        = { 'checkbox' }
                        name	        = { this.props.name }
                        { ...props }
                    />
                    { this.toggle() }
                    { this.props.title }

                </label>
            </div>

        );
    }
});

module.exports = Checkbox;
