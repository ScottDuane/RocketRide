/* global React */

window.Navbar = React.createClass({
  render: function() {
    return (<nav class="navbar navbar-default">
      <ul class="nav nav-pills">
         <li><a href="#">About</a></li>
         <li><a href="#">Contact</a></li>
      </ul>
    </nav>);
  }
});
