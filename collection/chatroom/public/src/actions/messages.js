// message - { sender : sender, message : message}
function create(message) {
  dpd.messages.post(message, function(message, err) {
    if (err) {
      if (err.message) {
        alert(err.message);
      } else if (err.errors) {
        var errors = "";
        if (err.errors.sender) {
          errors += err.errors.sender + "\n";
        }
        if (err.errors.message) {
          errors += err.errors.message + "\n";
        }
        alert(errors);
      }
    }
  });
}

module.exports.create = create;
