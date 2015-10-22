/* global React */

window.Navbar = React.createClass({
  getInitialState: function() {

    ApiUtil.fetchAllUsers();
    ApiUtil.fetchAllRockets();
    ApiUtil.fetchAllReservations();
    this.current_user = UserStore.findById(window.CURRENT_USER_ID);
    return {};
  },

  logOutClickHandler: function () {
    ApiUtil.logOut();
  },

  render: function () {
    var userURL = "#/users/"+window.CURRENT_USER_ID;
    return (
      <nav className="myNavbar" className="navbar navbar-default">
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
          <ul className="nav navbar-nav pull-right">
            <li>
              <a href="#/">
                <button id="rockets-link" className="navbar-links no-border">All Rockets</button>
              </a>
            </li>
            <li>
              <a  href="#/rockets/new">
                <button id="add-rocket-link" className="navbar-links no-border">List a Rocket</button>
              </a>
            </li>
            <li>
              <a  href={userURL}>
                <button id="profile-link" className="navbar-links no-border">Your Profile</button>
              </a>
            </li>

            <li>
              <a href="#">
                <button id="logout-link" className="navbar-links no-border" onClick={this.logOutClickHandler}>Log Out</button>
              </a>
          </li>



          </ul>
        </div>

      </div>
      </nav>
    );
  }
})
