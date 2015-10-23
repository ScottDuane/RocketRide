var IncomingIndexItem = React.createClass ({
  getInitialState: function() {
    this.creator = UserStore.findById(this.props.reservation.creator_id);
    return {status: this.props.reservation.status};
  },

  handleApproval: function() {
    ApiUtil.approveReservation(this.props.reservation);
    this.setState({status: 'approved'});
  },

  handleDenial: function() {
    ApiUtil.denyReservation(this.props.reservation);
    this.setState({status: 'denied'});
  },

  handleCancellation: function() {
  //  var updated_res = this.props.reservation;
  //  updated_red.status = 'cancelled';
    ApiUtil.cancelReservation(this.props.reservation);
    this.setState({status: 'cancelled'});
  },

  render: function() {
    var endText = "";
    var verb = "";
    if(this.state.status === 'pending') {
      endText = <div><p>This reservation is <strong>pending.</strong></p><button onClick={this.handleApproval}>Approve</button><button onClick={this.handleDenial}>Deny</button></div>;
      verb = "requested";
    } else if(this.state.status === 'approved') {
      endText = <div><button onClick={this.handleCancellation}>Cancel Reservation</button></div>;
      verb = "reserved";
    } else {
      return;
    }

    return <div className="inc-res-text">
      {this.creator.username} has {verb} a ride with you from {this.props.reservation.start_date} until {this.props.reservation.end_date}.
      {endText}
    </div>;
  }
})
