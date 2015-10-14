/* global React */

window.RocketIndex = React.createClass ({
  getInitialState: function() {
    return {rockets: RocketStore.all()}
  },

  logOut: function() {
    ApiUtil.logOut();
  },

  render: function() {
    return (<div>
      <Navbar />

    Rockets go here

      <br />
      <button onClick={this.logOut}>Log Out</button>

  </div>);
  }
});
