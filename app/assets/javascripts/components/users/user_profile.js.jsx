var UserProfile = React.createClass({
  render: function() {
    var currentUser = UserStore.findById(window.CURRENT_USER_ID).username;
    return (<div>
      <Navbar />
      <p>Hey there, {currentUser}</p>

      <div className="row">

        <div className="col-md-2"></div>
        <div className="col-md-4">
          <h2>Reservations</h2>
          <OutgoingReservationIndex />
        </div>
        <div className="col-md-4">
          <h2>Rockets</h2>
          <MyRocketList />
        </div>

        <div className="col-md-2"></div>
      </div>

    </div>);
  }
})
