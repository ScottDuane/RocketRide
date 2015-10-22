var UserProfile = React.createClass({
  render: function() {
    var currentUser = UserStore.findById(window.CURRENT_USER_ID).username;
    return (<div>
      <Navbar />


      <img src="assets/back-5.jpg" className="background-image">
        <div className="greeting">Hey there, {currentUser}</div>
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
      </img>

    </div>);
  }
})
