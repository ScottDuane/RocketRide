var ReservationForm = React.createClass ({
  
  handleStartChange: function(e) {
    this.setState(startDate: e.target.value);
  },

  handleEndChange: function(e) {
    this.setState(endDate: e.target.value);
  },

  handleSubmit: function() {
    ApiUtil.createReservation(this.state);
  },

  render: function() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="date" onChange={this.handleStartChange}>Starting: </input> <br />
          <input type="date" onChange={this.handleEndChange}>Ending: </input> <br />
          <input type="submit" value="Request Rocket!" />
        </form>
      </div>
    )
  }
})
