var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.click('#addRoom', RoomsView.render);
  },

  render: function(event) { //event means action (ie click/mouseover/mousemove)
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {};
    let formRoomname = $('#roomname').val();
    message.roomname = decodeURI(formRoomname);
    Parse.create(message);

    console.log('Room click!!!');
  },

  renderRoom: function(roomObj) {
    let room = Rooms.render(roomObj);
    RoomsView.$select.append(room);
  }

};
