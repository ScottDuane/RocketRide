var RatingsShow = React.createClass({

  render: function() {

    return(
      <div className="ratings-show">
        <ul>
          {this.props.ratings.map(function(rating) {
            var username = UserStore.findById(rating.rater_id).username;
            
            return <div><li>{rating.rating} {username} says: {rating.body}</li></div>;
          })}
        </ul>
      </div>
    );
  }
});
