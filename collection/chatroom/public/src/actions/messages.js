dpd.messages.post({
  sender: sender,
  message: message
}, function(message, err) {
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
  } else {
    $('#message').val('');
  }
});
