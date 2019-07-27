var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) { //event means action (ie click/mouseover/mousemove)
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {};
    var formMessage = $('#message').val();
    var formUsername = App.username;
    message.username = decodeURI(formUsername);
    message.text = decodeURI(formMessage);
    Parse.create(message);
    // App.initialize();

    console.log('click!!!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};