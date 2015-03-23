var dispatcher = require('../dispatchers/messages');
var store = [];

function load() {
  dpd.messages.get(function(messages) {
    updateStore(messages);
    dispatcher.emit('load', messages);
  });
}

function updateStore(messages) {
  if (!messages) return;
  store.length = 0;
  messages.forEach(function(message){
    store.push(message);
  });
}

function addMessage(message) {
  if (!message) return;
  store.push(message);
  dispatcher.emit('load', message);
}


dispatcher.register('create', addMessage);
// dispatcher.register('load', updateStore);

module.exports.store = store;
module.exports.load = load;
