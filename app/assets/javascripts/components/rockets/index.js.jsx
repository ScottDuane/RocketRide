/* global React */

window.RocketIndex = React.createClass ({
  getInitialState: function() {
    return {rockets: RocketStore.all()}
  },

  logOut: function() {
    ApiUtil.logOut();
  },

  componentDidMount: function() {
    RocketStore.addIndexChangeListener(this._onChange);
    ApiUtil.fetchAllRockets();
    ApiUtil.fetchAllUsers();
  },

  _onChange: function() {
    this.setState({rockets: RocketStore.all()});
  },
  render: function() {
    // debugger;
    var Link = ReactRouter.Link;
    var userURL = 'users/'+CURRENT_USER_ID;
    return (<div className="rocket-index">

      <Navbar />

        {this.state.rockets.map(function(rocket){
          return (<RocketIndexItem rocket={rocket} />);
        })}
      <br />
      <button onClick={this.logOut}>Log Out</button>
      <Link to={userURL}>View Your Profile</Link>
  </div>);
  }
});
