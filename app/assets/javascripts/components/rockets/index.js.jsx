/* global React */

window.RocketIndex = React.createClass ({
  mixins: [React.addons.ReactCSSTransitionGroup],

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

  componentWillUnmount: function() {
    RocketStore.removeIndexChangeListener(this._onChange);

  },
  _onChange: function() {
    if(RocketStore.filteredRockets().length > 0) {
      this.setState({rockets: RocketStore.filteredRockets()});
    } else {
      this.setState({rockets: RocketStore.all()});
    }
  },

  render: function() {
    var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
    // debugger;
    var Link = ReactRouter.Link;
    var userURL = 'users/'+CURRENT_USER_ID;
    return (<div className="rocket-index-master">
      <Navbar />

      <div className="row" className="filter-form">
        <img src="images/back-5.jpg" className="background-image">
          <FilterForm />
        </img>
      </div>
      <div id="rocket-index" className="row" className="rocket-index">
      <ReactCSSTransitionGroup transitionName="animation" transitionEnterTimeout={500} transitionLeaveTimeout={300} >
        {this.state.rockets.map(function(rocket){
          return (<RocketIndexItem rocket={rocket} key={rocket.id}/>);
        })}
      </ReactCSSTransitionGroup>
      </div>
  </div>);
  }
});
