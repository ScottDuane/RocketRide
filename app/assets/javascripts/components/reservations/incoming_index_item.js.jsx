var IncomingIndexItem = React.createClass ({
  getInitialState: function() {
    this.creator = UserStore.findById(this.props.reservation.creator_id) || "";
    this.creator_name = this.creator.username || "";
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
      endText = <div key={this.props.reservation.id}><button onClick={this.handleApproval} className="approve-button">Approve</button><button className="deny-button" onClick={this.handleDenial}>Deny</button></div>;
      verb = "requested";
    } else if(this.state.status === 'approved') {
      endText = <div key={this.props.reservation.id}><button className="cancel-button" onClick={this.handleCancellation}>Cancel Reservation</button></div>;
      verb = "reserved";
    } else {
      return (<div key={this.props.reservation.id}></div>);
    }

    var returnThing = <div className="inc-res-text">
        <p>{this.creator_name} has {verb} a ride with you from {this.props.reservation.start_date} until {this.props.reservation.end_date}.</p>
        {endText}
      </div>;
    return returnThing;
  }
});
