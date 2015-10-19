var IncomingReservationIndex = React.createClass ({
  getInitialState: function() {
    ApiUtil.fetchAllReservations();
    var reservations = ReservationStore.ownedReservations(CURRENT_USER_ID);
    return {reservations: reservations};
  },

  componentDidMount: function() {
    ReservationStore.addIndexChangeListener(this._onChange);

  },

  componentWillUnmount: function() {
    ReservationStore.removeIndexChangeListener(this._onChange);
  },
  
  _onChange: function() {
    this.setState({reservations: ReservationStore.ownedReservations(CURRENT_USER_ID)});
  },

  render: function() {
    return(<div>
      <ul>
      {this.state.reservations.map(function(reservation) {
        return <li><IncomingIndexItem reservation={reservation} /></li>
      })}
      </ul>
    </div>)
  }
})
