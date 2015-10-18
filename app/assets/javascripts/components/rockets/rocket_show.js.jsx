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
    return (<div>
      <Navbar />

      <img src={imgURL} className="rocket-profile-pic" />
      <ul>
        <li>
          Fly with {this.captain} on the {this.rocket.rocket_name}!
        </li>
        <br />
        <li>
          Available from {this.rocket.avail_start} to {this.rocket.avail_end}.
        </li>
        <br />

      </ul>

      <Lightbox>
        <LightboxTrigger>
            <button>Reserve Rocket</button>
        </LightboxTrigger>
        <LightboxModal>
            <ReservationForm rocket={this.rocket}/>
        </LightboxModal>
    </Lightbox>
    </div>);
  }
});
