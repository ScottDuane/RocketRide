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
    var Link = ReactRouter.Link;
    if(this.state.rockets.length === 0) {
      return(
        <div className="rocket-list">
          <p className="rocket-list-title">You Haven't Listed Any Spacecraft.</p>
          <Link to="rockets/new"><button className="list-rocket-button">List a Craft</button></Link>
        </div>
      )
    } else {
      return (
        <div className="rocket-list">
          <p className="rocket-list-title">You've Listed Spacecraft.</p>
          {this.state.rockets.map(function(rocket){
            return (<RocketProfileItem rocket={rocket} key={rocket.id}/>);
          })}
        </div>);
    }


  }
});
