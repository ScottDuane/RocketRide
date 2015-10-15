window.RocketShow = React.createClass ({
  componentDidMount: function() {
    this.rocket = this.findRocketById(this.props.params.id);
    this.captain = this.findCaptainById(this.rocket.captain_id);
  },

  findRocketById: function(id) {
    var myRocket = null;
    RocketStore.all().forEach(function(rocket) {
      if(rocket.id === id) {
        myRocket = rocket;
      }
    });

    return myRocket;
  },

  findCaptainById: function(id) {
    var myCaptain = null;
    UserStore.all().forEach(function(user) {
      if(user.id === id) {
        myCaptain = user;
      }
    });

    return myCaptain;
  },

  render: function() {
    return (<div>
      <ul>
        <li>
          Fly with {this.captain} on the {this.rocket.rocket_name}!
        </li>

        <li>
          Available from {this.rocket.avail_start} to {this.rocket.avail_end}.
        </li>

        <li>
          <img src={this.rocket.image_url} height='150px' width='150px' />
        </li>
      </ul>
    </div>)
  }
})
