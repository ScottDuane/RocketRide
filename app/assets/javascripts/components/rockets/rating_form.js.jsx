var RatingForm = React.createClass({
  getInitialState: function () {
    return {body: "", rating: 5}
  },

  componentDidMount: function() {
    RocketStore.addRatingsChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    RocketStore.removeRatingsChangeListener(this._onChange);
  },

  handleRatingChange: function(e) {
    this.setState({rating: e.target.value});
  },

  handleBodyChange: function(e) {
    this.setState({body: e.target.value});
  },

  handleSubmit: function() {
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

          <label>Comment</label>
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
