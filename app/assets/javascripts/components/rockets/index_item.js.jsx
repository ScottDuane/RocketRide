window.RocketIndexItem = React.createClass ({
  render: function() {
    var Link = ReactRouter.Link;
    var showURL = "rockets/"+this.props.rocket.id;
    var imgURL = this.props.rocket.image_url || 'assets/spaceship_default.jpeg';
    var captain = UserStore.findById(this.props.rocket.captain_id);
    return (
      <div className="col-md-4" className="rocket-item">
        <Link to={showURL}><img className="rocket-photo" src={imgURL} alt=''/></Link>
        <p className="rocket-info">
          <strong><Link to={showURL}>{this.props.rocket.rocket_name}: </Link></strong><i>A {this.props.rocket.rocket_type} captained by {captain.username}</i></p>
      </div>)
  }
});
