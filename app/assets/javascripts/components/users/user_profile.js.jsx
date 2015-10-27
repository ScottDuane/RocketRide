var UserProfile = React.createClass({
  render: function() {
    var currentUser = UserStore.findById(window.CURRENT_USER_ID).username || "";
    return (
      <div>
      <Navbar />
      <img src="assets/back-5.jpg" className="background-image">
        <div className="greeting">Hey there, {currentUser}</div>
        <div className="res-index-container">
          <OutgoingReservationIndex />
        </div>
        <div className="rocket-index-container">
          You've Listed Spacecraft.
          <MyRocketList />
        </div>
      </img>

    </div>);
  }
})
