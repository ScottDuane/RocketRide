window.RocketShow = React.createClass ({
  getInitialState: function() {
    this.rocket = this.findRocketById(this.props.params.id);
    this.captain = this.findCaptainById(this.rocket.captain_id);
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

  findCaptainById: function(id) {
    var captain = null;
    UserStore.all().forEach(function(user) {
      if(user.id === parseInt(id)) {
        captain = user;
      }
    });
    debugger;
    return captain;
  },

  render: function() {
    var Link = ReactRouter.Link;
    return (<div>
      <ul>
        <li>
          Fly with Captain Blankety Blank on the {this.rocket.rocket_name}!
        </li>
        <br />
        <li>
          Available from {this.rocket.avail_start} to {this.rocket.avail_end}.
        </li>
        <br />
        <li>
          <img src={this.rocket.image_url} height='150px' width='150px' />
        </li>
      </ul>
      <br />
      <Link to="/">Back to All Rockets</Link>
    </div>);
  }
});
