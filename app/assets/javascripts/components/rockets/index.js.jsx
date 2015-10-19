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
    if(RocketStore.filteredRockets().length > 0) {
      this.setState({rockets: RocketStore.filteredRockets()});
    } else {
      this.setState({rockets: RocketStore.all()});
    }
  },

  render: function() {
    // debugger;
    var Link = ReactRouter.Link;
    var userURL = 'users/'+CURRENT_USER_ID;
    return (<div className="rocket-index">
      <Navbar />

      <div class="row">
        <FilterForm />
      </div>

      <div class="row">
        {this.state.rockets.map(function(rocket){
          return (<RocketIndexItem rocket={rocket} />);
        })}
      </div>
      
  </div>);
  }
});
