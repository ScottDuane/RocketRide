/* global React */

window.Navbar = React.createClass({
  getInitialState: function() {
    ApiUtil.fetchAllUsers();
    this.current_user = UserStore.findById(window.CURRENT_USER_ID);
    return {};
  },

  logOutClickHandler: function () {
    ApiUtil.logOut();
  },

  render: function () {

    var button = (
      <li className="dropdown">
          <a href="#" className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false">Current Username<span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a>Your profile</a></li>
            <li><a onClick={this.logOutClickHandler}>Log out</a></li>
          </ul>
      </li>
    );

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
              {button}
            </li>
          </ul>
        </div>

      </div>
      </nav>
    );
  }
})
