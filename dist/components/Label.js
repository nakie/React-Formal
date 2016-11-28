'use strict';

var React = require('react');

var MyLabel = React.createClass({
  displayName: 'MyLabel',


  propTypes: {
    showLabel: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      showLabel: true
    };
  },

  render: function render() {

    if (this.props.showLabel === true) {

      return React.createElement(
        'label',
        { htmlFor: this.props.name },
        this.props.title
      );
    } else {
      return null;
    }
  }
});

module.exports = MyLabel;