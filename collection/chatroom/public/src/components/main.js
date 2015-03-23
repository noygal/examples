var React = require('react');
var mui = require('material-ui');

var AppCanvas = mui.AppCanvas;
var AppBar = mui.AppBar;

var Inputs = require('./inputs.js');
var List = require('./list.js');

var Main = React.createClass({
  displayName : 'Main',
  render: function() {
    return React.createElement(AppCanvas, {predefinedLayout : 1},
        React.createElement(AppBar, {title : 'Chatroom'}),
        React.createElement('div', {className : 'mui-app-content-canvas'},
          React.createElement(Inputs, null),
          React.createElement(List, null))
      );
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  }

});

module.exports = Main;
