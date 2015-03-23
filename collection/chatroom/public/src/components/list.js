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
      store.store.forEach(function(message){
        list.push(
          React.createElement('div', null,
            React.createElement('span', null, message.sender),
            React.createElement('textarea', null, message.message)
          )
        );
      });
      // console.log(store);
      return list;
    }
    return  React.createElement('div', {className : 'list'},
              React.createElement(mui.Paper, null, createList())
            );
  },

  _onChange: function(message) {
    // console.log(message);
    this.forceUpdate();
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  }

});

module.exports = List;
