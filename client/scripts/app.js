var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() { //runs immediately when html loads
    App.username = window.location.search.substr(10); //stores username

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(function() {
      // $('#chats').html('');
      App.fetch(App.stopSpinner);

      let list = document.getElementById('chats'); // array of individual messages

      if (list.children.length > 100) {
        for (var j = 100; j < list.children.length; j++) {
          list.removeChild(list.children[j]);
        }
      }


      console.log('hello');
    }, 5000);
  },

  // grabs all messages object and metadata
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      for (var i = data.results.length - 1; i >= 0; i--) { //for each item, call render
        if (data.results[i].username !== undefined && data.results[i].text !== undefined) {
          if (!(data.results[i].text.includes('<script>'))) {
            MessagesView.renderMessage(data.results[i]);
            RoomsView.renderRoom(data.results[i]);
          }
        }
      }

      callback();

      // setInterval(function() {
      //   // $('#chats').html('');
      //   // $('.chats').load();
      //   console.log('hello');
      // }, 1000);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

};
