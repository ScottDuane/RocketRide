
var OutgoingIndexItem = React.createClass ({
  getInitialState: function() {
    this.rocket = RocketStore.findById(this.props.reservation.rocket_id);
    this.captain = UserStore.findById(this.rocket.captain_id);
    return {status: this.props.reservation.status };
  },

  handleCancellation: function() {
    ApiUtil.cancelReservation(this.props.reservation);
    this.setState({status: 'cancelled'});
  },


  render: function() {
    var verb = "";
    if(this.props.reservation.status === 'pending') {
      verb = 'requested';
    } else {
      verb = 'reserved';
    }

    var button = "";
    if(this.state.status === 'approved' || this.state.status === 'pending') {
      button = <button className="res-button" onClick={this.handleCancellation}>Cancel Reservation</button>;
    }

    return (
      <div className="out-res-item">
        <ul>
          <li><strong>Rocket Name:</strong> {this.rocket.rocket_name} </li>
          <li><strong>Captain: </strong>{this.captain.username} </li>
          <li><strong>Start Date: </strong>{this.props.reservation.start_date} </li>
          <li><strong>End Date: </strong>{this.props.reservation.end_date}</li>
          <li><strong>Status: </strong>{this.state.status}</li>
        </ul>
        {button}
      </div>
    )
  }
})
