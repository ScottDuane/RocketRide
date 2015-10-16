window.RocketIndexItem = React.createClass ({
  render: function() {
    var Link = ReactRouter.Link;
    var showURL = "rockets/"+this.props.rocket.id;
    var imgURL = this.props.rocket.image_url || 'assets/spaceship_default.jpeg';
    return (

      <div className="rocket-item">
        {this.props.rocket.rocket_name} <br />
            {this.props.rocket.rocket_type} <br />
          <img src={imgURL} alt='' height="75" width="75" />
          <br />
            <Link to={showURL}>Show me this rocket!</Link>

      </div>)
  }
});
