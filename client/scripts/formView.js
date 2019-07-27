var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {//event means actual action (ie click/mouseover)
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {};
    var formMessage = $('#message').val();
    var formUsername = App.username;
    message['username'] = decodeURI(formUsername);
    message['text'] = decodeURI(formMessage);
    message['roomname'] = 'Lobby';
    Parse.create(message);

    // return false;//??

    console.log('click!!!');
    //dynamically update the feed
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};