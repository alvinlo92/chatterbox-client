var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.renderMessage(post);
  },

  renderMessage: function(messageObj) {
    let post = MessageView.render(messageObj);
    MessagesView.$chats.prepend(post);
  }

};