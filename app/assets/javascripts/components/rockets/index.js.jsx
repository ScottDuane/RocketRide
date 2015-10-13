window.RocketIndex = React.createClass ({
  logOut: function() {
    ApiUtil.logOut();
  },
  render: function() {
    return (<div>
      Rockets go here
    <br />
      <button onClick={this.logOut}>Log Out</button>
  </div>);
  }
});
