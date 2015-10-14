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
      console.log(this.state.rockets);
    return (<div>

      <Navbar />
      <ul>
        {this.state.rockets.map(function(rocket){
          return (<RocketIndexItem rocket={rocket} />);
        })}
      </ul>
    Rockets go here

      <br />
      <button onClick={this.logOut}>Log Out</button>

  </div>);
  }
});
