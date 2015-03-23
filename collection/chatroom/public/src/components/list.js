var React = require('react');
var mui = require('material-ui');
var store = require('./../stores/messages');
var dispatcher = require('./../dispatchers/messages');



var List = React.createClass({
  displayName : 'List',
  getInitialState : function() {
    store.load();
    return null;
  },
  componentWillMount : function() {
    dispatcher.register('load', this._onChange);
  },
  render: function() {
    function createList() {
      var list = [];
      store.store.reverse().forEach(function(message){
        list.push(
          React.createElement('section', {className : 'list-item'},
            React.createElement('h5', {className : 'list-item-sender'} , message.sender + ', sent:'),
            React.createElement('p', {className : 'list-item-message'}, message.message),
            React.createElement('hr', null)
          )
        );
      })
      store.store.reverse();
      return list;
    }
    return  React.createElement('div', {className : 'list mui-card'},
              React.createElement(mui.Paper, null, createList())
            );
  },

  _onChange: function(message) {
    this.forceUpdate();
  },

});

module.exports = List;
