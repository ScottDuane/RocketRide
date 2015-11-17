window.RocketIndexItem = React.createClass ({
  getInitialState: function() {
    ApiUtil.fetchAllRockets();
    ApiUtil.fetchAllUsers();
    this.captain = {};
    return {users: UserStore.all()};
  },

  componentWillMount: function() {
    this.showURL = "rockets/"+this.props.rocket.id;
    this.imgURL = this.props.rocket.image_url || 'images/spaceship_default.png';

  },

  componentDidMount: function() {
    this.users = UserStore.all();
    this.findCaptain(this.props.rocket.captain_id);
  },

  findCaptain: function(id) {

    this.props.users.forEach(function(user) {
      if(user.id === id) {
        this.captain =  user;
      }
    });
  },

  render: function() {

    var Link = ReactRouter.Link;

    return (
      <div className="col-md-4" className="rocket-item">
        <Link to={this.showURL}>
          <div className="index-item-container">
            <img className="rocket-photo" src={this.imgURL} alt=''/>
            <p className="rocket-info">
            {this.props.rocket.rocket_name}: A {this.props.rocket.rocket_type}</p>
          </div>
        </Link>
      </div>)
  }
});
