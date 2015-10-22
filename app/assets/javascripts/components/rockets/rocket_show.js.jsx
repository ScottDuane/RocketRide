window.RocketShow = React.createClass ({
  getInitialState: function() {
    // ApiUtil.fetchAllUsers();
    // debugger;
    this.captain = "Captain Blankety Blank";
    this.rocket = this.findRocketById(parseInt(this.props.params.id));
    this.findCaptainById(this.rocket.captain_id);
    return {};
  },

  findRocketById: function(id) {
    var myRocket = null;
    RocketStore.all().forEach(function(rocket) {
      // debugger;
      if(rocket.id === parseInt(id)) {
        myRocket = rocket;
      }
    });

    return myRocket;
  },


  //
  findCaptainById: function(id) {

    var captain = null;
    UserStore.all().forEach(function(user) {
      if(user.id === this.rocket.captain_id) {
        this.captain = user.username;
      }
    }.bind(this));
  },


  render: function() {
    var imgURL = this.rocket.image_url || 'assets/spaceship_default.jpeg';

    var Link = ReactRouter.Link;
    return (
      <div>
        <Navbar />

        <div className="rocket-profile-container">
          <img src={imgURL} className="rocket-profile-pic" />
          <p className="rocket-title-prefix">Fly with {this.captain} on the</p>
          <p className="rocket-title">{this.rocket.rocket_name}</p>
            <Lightbox>
              <LightboxTrigger>
                  <button className="request-button">Request Reservation</button>
              </LightboxTrigger>
              <LightboxModal>
                  <ReservationForm rocket={this.rocket} />
              </LightboxModal>
            </Lightbox>

        </div>




    </div>);
  }
});
