RocketRideApp = function() {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;


  React.render(
  <Router>
    <IndexRoute component={RocketIndex} />
    <Route path='/' component={RocketIndex} />
    <Route path='rockets/new' component={RocketForm} />
    <Route path='rockets/:id' component={RocketShow}>
      <Route path='rating' componenet={RatingForm} />
    </Route>
    <Route path='users/:id' component={UserProfile} />
  </Router>, document.getElementById('content'));
};
