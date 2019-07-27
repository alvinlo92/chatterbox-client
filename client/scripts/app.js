var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  // run after user submits or add or changes room
  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  // grabs all messages object and metadata
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      for (var i = 0; i < data.results.length; i++) { //for each item, call render
        if (data.results[i].username !== undefined && data.results[i].text !== undefined){
          if(!(data.results[i].text.includes("<script>"))) {
            MessagesView.renderMessage(data.results[i])
            let post = MessageView.render(data.results[i]);
            MessagesView.renderMessage(post);
          }
        }
      }
      callback()
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
