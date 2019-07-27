var MessageView = {

  // template function to render a message to HMTL
  // create each message block for new post

  //when calling MessageView.render(), pass in results object
  render: _.template(`
      <div class="chat">
        <div class="username"><%-decodeURI(username) %></div>
        <div class="text"><%-decodeURI(text) %></div>
      </div>
    `)
    //append message to #chatbox

};