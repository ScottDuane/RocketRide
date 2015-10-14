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
  },

  _onChange: function() {
    this.setState({rockets: RocketStore.all()});
  },
  render: function() {
    // debugger;
    var Link = ReactRouter.Link;
    return (<div>

      <Navbar />
      <ul>
        {this.state.rockets.map(function(rocket){
          return (<RocketIndexItem rocket={rocket} />);
        })}
      </ul>
      <Link to='rockets/new'>Create a New Rocket</Link>
      <br />
      <button onClick={this.logOut}>Log Out</button>

  </div>);
  }
});
