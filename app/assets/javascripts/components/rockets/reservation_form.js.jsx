var ReservationForm = React.createClass ({
  getInitialState: function() {
    return {creator_id: CURRENT_USER_ID, rocket_id: this.props.rocket.id}
  },
  handleStartChange: function(e) {
    this.setState({startDate: e.target.value});
  },

  handleEndChange: function(e) {
    this.setState({endDate: e.target.value});
  },

  handleSubmit: function() {
    ApiUtil.createReservation(this.state);
  },

  render: function() {
    return(
      <div>
        <div class="row">
          <div class="col-md-6">
            <div class="panel panel-info">
              <div class="panel-heading">
                <h4>Reservation Info</h4>
              </div>

              <div class="panel-body">
                <form role="form" onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <label class="control-label" for="start-date">Starting Date</label> <br/>
                    <input type="date" name="reservation[start_date]" id="start-date" onChange={this.handleStartChange}/>
                  </div>
                  <div class="form-group">
                    <label class="control-label" for="end-date">Ending Date</label> <br/>
                    <input type="date" name="reservation[end_date]" id="end-date" onChange={this.handleEndChange}/>
                  </div>
                  <div class="form-group">
                    <input type="submit" value="Reserve Rocket!" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
