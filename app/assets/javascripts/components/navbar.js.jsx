/* global React */

window.Navbar = React.createClass({
  getInitialState: function() {

    ApiUtil.fetchAllUsers();
    ApiUtil.fetchAllRockets();
    ApiUtil.fetchAllReservations();
    ApiUtil.fetchAllRatings();
//    this.current_user = UserStore.findById(window.CURRENT_USER_ID);
    return {};
  },

  logOutClickHandler: function () {
    ApiUtil.logOut();
  },

  render: function () {
    var userURL = "#/users/"+window.CURRENT_USER_ID;
    return (

      <div className="myNavbar">
        <ul className="navbar-links">
          <li>
            <a href="#/">
              <button id="rockets-link" className="nav-button">All Spacecraft</button>
            </a>
          </li>
          <li>
            <a  href="#/rockets/new">
              <button id="add-rocket-link" className="nav-button">List a Craft</button>
            </a>
          </li>
        </ul>

        <ul className="navbar-links">
          <li>
            <a  href={userURL}>
              <button id="profile-link" className="nav-button">Your Profile</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button id="logout-link" className="nav-button" onClick={this.logOutClickHandler}>Log Out</button>
            </a>
        </li>
        </ul>
      </div>

    );
  }
});
