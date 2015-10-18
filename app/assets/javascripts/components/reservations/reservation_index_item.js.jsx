var ReservationIndexItem = React.createClass ({
  getInitialState: function() {
    this.creator = UserStore.findById(this.props.reservation.creator_id);
    return {};
  },

  handleApproval: function() {
    ApiUtil.approveReservation(reservation);
  },

  handleDenial: function() {
    ApiUtil.denyReservation(reservation);
  },

  handleCancellation: function() {
    ApiUtil.cancelReservation(reservation);
  },

  render: function() {
    var endText = "";
    var verb = "";

    if(this.props.reservation.status === 'pending') {
      endText = "<div><p>This reservation is <strong>pending.</strong></p><button onClick={this.handleApproval}>Approve</button><button onClick={this.handleDenial}>Deny</button></div>";
      verb = "requested";
    } else {
      endText = "<div><button onClick={this.handleCancellation}>Cancel Reservation</button></div>";
      verb = "reserved";
    }

    return <div>
      <p>{this.creator} has {verb} a ride with you from {this.props.reservation.start_date} until {this.props.reservation.end_date}.</p>
      {endText}
    </div>
  }
})
