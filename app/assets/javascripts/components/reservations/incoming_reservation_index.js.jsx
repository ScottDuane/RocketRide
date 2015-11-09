var IncomingReservationIndex = React.createClass ({
  getInitialState: function() {
    ApiUtil.fetchAllReservations();
    var reservations = ReservationStore.ownedReservations(CURRENT_USER_ID, this.props.rocket.id);
    return {reservations: reservations};
  },

  componentDidMount: function() {
    ReservationStore.addIndexChangeListener(this._onChange);

  },

  componentWillUnmount: function() {
    ReservationStore.removeIndexChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({reservations: ReservationStore.ownedReservations(CURRENT_USER_ID, this.props.rocket.id)});
  },

  render: function() {
    var message = <h4 className="no-res-message">Reservations on the {this.props.rocket.rocket_name}</h4>;
    if (this.state.reservations.length === 0) {
      message = <h4 className="no-res-message">No one has reserved this craft.</h4>;
    }
    return(
      <div className="inc-res-index">
        {message}
        <ul>
          {this.state.reservations.map(function(reservation) {
            return (<li className="inc-res-item"><IncomingIndexItem reservation={reservation} key={reservation.id}/></li>);
          })}
        </ul>
      </div>);
  }
});
