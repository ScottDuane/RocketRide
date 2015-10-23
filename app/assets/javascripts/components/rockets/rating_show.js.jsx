var RatingShow = React.createClass({
  getInitialState() {
    this.username = UserStore.findById(this.props.rating.rater_id).username;
    return {};
  },

  render: function() {
    return(
      <div className="rating-show">
        <p>{this.props.rating.rating} {this.username} says:</p>
        <p>{this.props.rating.body}</p>
      </div>
    );
  }
});
