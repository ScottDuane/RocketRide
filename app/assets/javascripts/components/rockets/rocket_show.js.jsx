var RocketShow = React.createClass ({
  getInitialState: function() {
    // ApiUtil.fetchAllUsers();
    // debugger;

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
      // debugger;
      if(rocket.id === parseInt(id)) {
        myRocket = rocket;
      }
    });

    return myRocket;
  },


  //
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
    debugger;
    return (
      <div>
        <Navbar />
        <img src="images/back-5.jpg" className="background-image">
        <div className="rocket-profile-container">
          <img src={imgURL} className="rocket-profile-pic" />
          <p className="rocket-title-prefix">Fly with {this.captain} on the</p>
          <p className="rocket-title">{this.rocket.rocket_name}</p>

        </div>
        <RatingForm rocket={this.rocket} />
        <div id="test-ratings">{this.state.ratings}</div>
        <RatingsShow ratings={this.state.ratings} />

        </img>
    </div>);
  }
});
