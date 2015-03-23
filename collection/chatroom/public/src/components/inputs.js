var React = require('react');
var mui = require('material-ui');
var action = require('./../actions/messages');


var Inputs = React.createClass({
  displayName: 'Inputs',
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {
      message: '',
      sender: ''
    };
  },
  render: function() {
    return React.createElement('div', {
        className: 'inputs'
      },
      React.createElement(mui.Paper, null,
        React.createElement(mui.TextField, {
          className: 'inputs-sender',
          floatingLabelText: 'Username',
          valueLink: this.linkState('sender')
        }),
        React.createElement(mui.TextField, {
          className: 'inputs-message',
          floatingLabelText: 'Message',
          valueLink: this.linkState('message')
          // multiLine: true,
        }),
        React.createElement(mui.RaisedButton, {
          label: 'Send',
          primary: true,
          onTouchTap: this._handleTouchTap
        }))
    );
  },

  _handleTouchTap: function() {
    action.create({ message : this.state.message, sender : this.state.sender});
    this.state.message = '';
    this.setState(this.state);
  }

});

module.exports = Inputs;
