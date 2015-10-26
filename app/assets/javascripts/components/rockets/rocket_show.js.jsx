var RocketShow = React.createClass ({
  getInitialState: function() {
    this.captain = "";
    this.rocket = this.findRocketById(parseInt(this.props.params.id)) || "";
    this.findCaptainById(this.rocket.captain_id);
    var ratings = RatingsStore.findByRocketId(parseInt(this.rocket.id)) || [];
    return {ratings: ratings};
  },

  componentDidMount: function() {
    RatingsStore.addIndexChangeListener(this._onRatingsChange);
  },

  componentWillUnmount: function() {
    RatingsStore.removeIndexChangeListener(this._onRatingsChange);
  },

  _onRatingsChange: function(){
    this.setState({ratings: RatingsStore.findByRocketId(this.rocket.id)});
  },

  findRocketById: function(id) {
    var myRocket = null;
    RocketStore.all().forEach(function(rocket) {

      if(rocket.id === parseInt(id)) {
        myRocket = rocket;
      }
    });

    return myRocket;
  },

  findCaptainById: function(id) {
    this.captain = "";
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
        <img src="images/back-5.jpg" className="background-image">
        <img src={imgURL} className="rocket-profile-pic" />
        <div className="rocket-title">{this.rocket.rocket_name}</div>
        <div className="rocket-type">a {this.rocket.rocket_type}</div>
        <br />
        <div className="captain-name">Captain: {this.captain}</div>
        <div className="rocket-detail">{this.rocket.description}</div>
        <div className="avail-detail">Available from {this.rocket.avail_start} until {this.rocket.avail_end}.</div>

             <Lightbox>
              <LightboxTrigger>
                  <button className="request-button">Request Reservation</button>
              </LightboxTrigger>
              <LightboxModal>
                  <ReservationForm rocket={this.rocket} />
              </LightboxModal>
            </Lightbox>
        <RatingForm rocket={this.rocket} />
        <RatingsShow ratings={this.state.ratings} />
        </img>
    </div>);
  }
});
