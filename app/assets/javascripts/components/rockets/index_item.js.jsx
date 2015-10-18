window.RocketIndexItem = React.createClass ({
  render: function() {
    var Link = ReactRouter.Link;
    var showURL = "rockets/"+this.props.rocket.id;
    var imgURL = this.props.rocket.image_url || 'assets/spaceship_default.jpeg';
    return (

      <div className="col-md-4" className="rocket-item">

        <img className="rocket-photo" src={imgURL} alt=''/>
        <p className="rocket-name"><strong><Link to={showURL}>{this.props.rocket.rocket_name}</Link></strong></p>
        <p className="rocket-info"><i>A {this.props.rocket.rocket_type} captained by {this.props.rocket.captain}</i></p>

      </div>)
  }
});
