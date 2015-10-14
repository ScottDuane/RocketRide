window.RocketIndexItem = React.createClass ({
  render: function() {

    return (<div>
      <li>{this.props.rocket.rocket_name} <br />
                {this.props.rocket.rocket_type} <br />
              <img src={this.props.rocket.image_url} alt='' height="75" width="75" />
              </li></div>)
  }
});
