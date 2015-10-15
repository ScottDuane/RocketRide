window.RocketIndexItem = React.createClass ({
  render: function() {
    var Link = ReactRouter.Link;
    var showURL = "rockets/"+this.props.rocket.id;
    // debugger;
    return (
      <div className="rocket-item">
        {this.props.rocket.rocket_name} <br />
            {this.props.rocket.rocket_type} <br />
            <img src={this.props.rocket.image_url} alt='' height="75" width="75" />
            <Link to={showURL}>Show me this rocket!</Link>

      </div>)
  }
});
