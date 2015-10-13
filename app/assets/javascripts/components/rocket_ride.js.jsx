$(function() {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  React.render(<Router>
    <IndexRoute component={RocketIndex} />
    <Route path='/' component={RocketIndex} />
  </Router>, document.getElementById('content'));
});
