var UserProfile = React.createClass({
  render: function() {
    var currentUser = UserStore.findById(window.CURRENT_USER_ID).username || "";

    return (
      <div>
      <Navbar />
      <img src="images/back-5.jpg" className="background-image">
        <div className="greeting">Hey there, {currentUser}</div>
        <div className="res-index-container">
          <OutgoingReservationIndex />
        </div>
        <MyRocketList />
      </img>

    </div>);
  }
})
