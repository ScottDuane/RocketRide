$(function() {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  React.render(<Router>
    <IndexRoute component={RocketIndex} />
    <Route path='/' component={RocketIndex} />
    <Route path='rockets/new' component={RocketForm} />
  </Router>, document.getElementById('content'));
});
