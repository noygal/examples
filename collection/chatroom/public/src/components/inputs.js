var React = require('react');
var mui = require('material-ui');


var Inputs = React.createClass({
  displayName : 'Inputs',
  render: function() {
    return  React.createElement('div', {className : 'inputs'},
              React.createElement(mui.Paper, null,
                React.createElement(mui.TextField, {className : 'inputs-sender', floatingLabelText : 'Username'}),
                React.createElement(mui.TextField, {className : 'inputs-message', floatingLabelText : 'Message'}),
                React.createElement(mui.RaisedButton, {label : 'Send', primary : true, onTouchTap :this._handleTouchTap}))
            );
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  }

});

module.exports = Inputs;
