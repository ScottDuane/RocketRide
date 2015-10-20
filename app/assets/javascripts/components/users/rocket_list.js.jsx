var MyRocketList = React.createClass({
  getInitialState: function() {
    ApiUtil.fetchAllRockets();
    ApiUtil.fetchAllReservations();
    return {rockets: RocketStore.ownedRockets(CURRENT_USER_ID)};
  },

  componentDidMount: function() {
    RocketStore.addIndexChangeListener(this._onRocketChange);
  },

  componentWillUnmount: function() {
    RocketStore.removeIndexChangeListener(this._onRocketChange);
  },

  _onRocketChange: function() {
    this.setState({rockets: RocketStore.ownedRockets(CURRENT_USER_ID)});
  },

  render: function() {
    return (
      <div>
        {this.state.rockets.map(function(rocket){
          return (<RocketProfileItem rocket={rocket} key={rocket.id}/>);
        })}
      </div>);
  }
});
