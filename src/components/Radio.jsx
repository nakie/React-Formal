var React = require( 'react' );

var RadioBtn = React.createClass({

    render() {

        return (

            <div className="checkbox">
            <label >
                    <input 
                        type        = { 'radio' }
                        name        = { this.props.name }
                    />
                    { this.props.title }
                </label>
            </div>

        );

    }
});

module.exports = RadioBtn;
