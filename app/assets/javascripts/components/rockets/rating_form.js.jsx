var RatingForm = React.createClass({
  getInitialState: function () {
    return {rater_id: window.CURRENT_USER_ID, rocket_id: this.props.rocket.id, body: "", rating: 5}
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
          <label>Rating</label>
          <br/>
          <input type="number" onChange={this.handleRatingChange}/>
          <br/>

          <label>Did you love or hate your ride?  Tell us.</label>
          <br/>
          <textarea
            cols='30'
            rows='10'
            onChange={this.handleBodyChange}></textarea>
          <br/>
          <input type="submit"/>
        </form>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>);
  }
})
