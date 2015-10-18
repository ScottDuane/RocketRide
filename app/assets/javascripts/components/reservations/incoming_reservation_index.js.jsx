var IncomingReservationIndex = React.createClass ({
  getInitialState: function() {
    this.reservations = ReservationStore.ownedReservations(CURRENT_USER_ID);
    return {};
  },

  render: function() {
    return(<div>
      <ul>
      {this.reservations.map(function(reservation) {
        return <li><ReservationIndexItem reservation={reservation} /></li>
      })}
      </ul>
    </div>)
  }
})
