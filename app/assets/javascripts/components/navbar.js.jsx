/* global React */

window.Navbar = React.createClass({
  getInitialState: function() {
    ApiUtil.fetchAllUsers();
    ApiUtil.fetchAllRockets();
    this.current_user = UserStore.findById(window.CURRENT_USER_ID);
    return {};
  },

  logOutClickHandler: function () {
    ApiUtil.logOut();
  },

  render: function () {
    var userURL = "#/users/"+window.CURRENT_USER_ID;

    return (
      <nav className="navbar navbar-default">
      <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#collapse-menu"
                  aria-expanded="false">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="collapse-menu">
          <ul className="nav navbar-nav pull-left">
            <a className="navbar-brand" href="#/">
              <button className="logo no-border"><img className="brand" src="assets/spaceship_default.jpeg" height="40px"/></button>
            </a>
          </ul>
          <ul className="nav navbar-nav pull-right">
            <li>
              <a className="add-rocket-link" href="#/rockets/new">
                <button className="navbar-links no-border">Make a Rocket</button>
              </a>
            </li>
            <li>
              <a className="rockets-link" href="#/">
                <button className="navbar-links no-border">All Rockets</button>
              </a>
            </li>

            <li>
              <a href="#">
                <button className="navbar-links no-border" onClick={this.logOutClickHandler}>Log Out</button>
              </a>
          </li>

            <li>
              <a className="profile-link" href={userURL}>
                <button className="navbar-links no-border">Your Profile</button>
              </a>
            </li>

          </ul>
        </div>

      </div>
      </nav>
    );
  }
})
