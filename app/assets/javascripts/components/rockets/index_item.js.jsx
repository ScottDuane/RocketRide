window.RocketIndexItem = React.createClass ({
  render: function() {
    var Link = ReactRouter.Link;
    var showURL = "rockets/"+this.props.rocket.id;
    var imgURL = this.props.rocket.image_url || 'assets/spaceship_default.jpeg';
    return (

      <div className="col-md-4" className="rocket-item">
        <img className="rocket-photo" src={imgURL} alt='' height="75" width="75" />
        <p className="rocket-attr">{this.props.rocket.rocket_name}</p>
        <p className="rocket-attr">{this.props.rocket.rocket_type}</p>
        <Link to={showURL}>Show me this rocket!</Link>
      </div>)
  }
});
