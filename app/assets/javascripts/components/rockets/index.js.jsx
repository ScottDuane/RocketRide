/* global React */

window.RocketIndex = React.createClass ({
  mixins: [React.addons.ReactCSSTransitionGroup],

  getInitialState: function() {
    ApiUtil.fetchAllRockets();
    ApiUtil.fetchAllUsers();
    return {rockets: RocketStore.all()}
  },

  logOut: function() {
    ApiUtil.logOut();
  },

  componentDidMount: function() {
    RocketStore.addIndexChangeListener(this._onChange);

  },

  componentWillUnmount: function() {
    RocketStore.removeIndexChangeListener(this._onChange);

  },
  _onChange: function() {
    this.setState({rockets: RocketStore.filteredRockets()});
  },

  render: function() {
    var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
    
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
