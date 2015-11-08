var RatingForm = React.createClass({
  getInitialState: function () {
    return {rater_id: window.CURRENT_USER_ID, rocket_id: this.props.rocket.id, body: "", rating: 0}
  },

  componentDidMount: function() {
    RatingsStore.addIndexChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    RatingsStore.removeIndexChangeListener(this._onChange);
  },

  _onChange: function() {
    console.log(this.state);
  },

  handleRating: function(idx){
    this.setState({ rating: idx });
  },

  handleCancel: function(e) {
    this.setState({rating: 5, body: ""});
  },

  handleRatingChange: function(e) {
    e.preventDefault();
    this.setState({rating: parseInt(e.target.value)});
  },

  handleBodyChange: function(e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ApiUtil.createRating(this.state);
  },

  render: function() {
    return(
      <div className="rating-form">
        <form onSubmit={this.handleSubmit}>
          <label className="rating-label">Did you love or hate your ride?  Tell us.</label>
          <br/>
          <Stars clickable={true} rating={this.state.rating} size={'fa-o-2x'} clickHandler={this.handleRating} />
          <br />
          <br />
          <textarea
            cols='50'
            rows='10'
            className="rating-input-body"
            onChange={this.handleBodyChange}></textarea>
          <br/>
          <input id="rating-submit" type="submit"/>
        </form>

      </div>);
  }
})
