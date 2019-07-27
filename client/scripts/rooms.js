var Rooms = {

  render: _.template(`
      <option value="roomname"><%-decodeURI(roomname) %></option>
    `)
};