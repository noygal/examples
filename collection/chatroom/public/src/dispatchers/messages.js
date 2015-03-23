
function Dispatcher() {
  var callbacks = {};

  function addHandler(eventName) {
    dpd.messages.on(eventName, function(data) {
      emit(eventName, data);
    });
  }

  function emit(eventName, eventData) {
    if(!callbacks[eventName]) return;
    callbacks[eventName].forEach(function(callback){
      callback(eventData);
    });
  }

  addHandler('create');
  addHandler('load');
  return {
    register: function(eventName, callback) {
      if (!callbacks[eventName]) callbacks[eventName] = [];
      callbacks[eventName].push(callback);
    },
    emit: emit
  }
}

module.exports = Dispatcher();
