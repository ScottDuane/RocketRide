var UserProfile = React.createClass({
  render: function() {
    var currentUser = UserStore.findById(window.CURRENT_USER_ID).username;
    return (<div>
      <Navbar />
      <p>Hey there, {currentUser}</p>

      <div className="row">
        <div className="col-md-6">
          <h2>Reservations on your rockets</h2>
          <IncomingReservationIndex />
        </div>

        <div className="col-md-6">
          <h2>Reservations you made</h2>
          <OutgoingReservationIndex />
        </div>
      </div>

    </div>);
  }
})
