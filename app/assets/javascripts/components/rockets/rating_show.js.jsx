var RatingsShow = React.createClass({

  render: function() {
    var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
    return(

      <div className="ratings-show">
        <p className="ratings-header">Other Riders Say:</p>
        <ul className="ratings-list">
          <ReactCSSTransitionGroup transitionName="animation" transitionEnterTimeout={500} transitionLeaveTimeout={300} >
          {this.props.ratings.map(function(rating) {
            var username = UserStore.findById(rating.rater_id).username;
            var user_pic_url = UserStore.findById(rating.rater_id).image_url;
            return <div>
            <li className="rating-body">
              <img src={user_pic_url} height="30" width="30" className="user-mini-pic"/>
              {username} <strong className="rating-num">{rating.rating}<i className="fa fa-star"></i></strong>
              <br />
              <br />
              <div className="rating-text">{rating.body}</div></li></div>;
          })}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
});
