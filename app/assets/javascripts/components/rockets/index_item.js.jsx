window.RocketIndexItem = React.createClass ({
  render: function() {
    return (<li>{this.props.rocket.rocket_name, this.props.rocket.rocket_type}</li>)
  }
});
