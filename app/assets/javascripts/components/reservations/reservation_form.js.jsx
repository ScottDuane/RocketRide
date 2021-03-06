var ReservationForm = React.createClass ({
  getInitialState: function() {
    return {rocket_id: this.props.rocket.id, status: 'pending', start_date: null, end_date: null}
  },
  handleStartChange: function(e) {
    this.setState({start_date: e.target.value});
  },

  handleEndChange: function(e) {
    this.setState({end_date: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ApiUtil.createReservation(this.state);
    this.props.closeLightbox();
  },

  render: function() {
    return(
      <div className="reservation-form">
        <div class="row">
          <div class="col-md-6">
            <div class="panel panel-info">
              <div class="panel-heading">
                <h4 className="res-form-header">Reservation Info</h4>
              </div>

              <div class="panel-body">
                <form role="form" onSubmit={this.handleSubmit}>
                  <div className="start-input">
                    <label class="control-label" for="start-date">Starting Date</label> <br/>
                    <input type="date" name="reservation[start_date]" id="start-date" onChange={this.handleStartChange}/>
                  </div>
                  <div className="end-input">
                    <label class="control-label" for="end-date">Ending Date</label> <br/>
                    <input type="date" name="reservation[end_date]" id="end-date" onChange={this.handleEndChange}/>
                  </div>
                  <div class="form-group">
                    <input type="submit" id="res-submit" value="Request a Ride" />
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
