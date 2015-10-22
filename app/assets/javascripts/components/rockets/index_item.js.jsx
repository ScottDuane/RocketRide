window.RocketIndexItem = React.createClass ({
  render: function() {
    var Link = ReactRouter.Link;
    var showURL = "rockets/"+this.props.rocket.id;
    var imgURL = this.props.rocket.image_url || 'assets/spaceship_default.png';
    var captain = UserStore.findById(this.props.rocket.captain_id) || {};

    return (
      <div className="col-md-4" className="rocket-item">
        <Link to={showURL}>
          <div className="index-item-container">
            <img className="rocket-photo" src={imgURL} alt=''/>
            <p className="rocket-info">
            {this.props.rocket.rocket_name}: A {this.props.rocket.rocket_type} captained by {captain.username}</p>
          </div>
        </Link>
      </div>)
  }
});
