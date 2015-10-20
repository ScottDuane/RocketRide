var OutgoingReservationIndex = React.createClass ({
  getInitialState: function() {
    ApiUtil.fetchAllReservations();
    var reservations = ReservationStore.createdReservations(CURRENT_USER_ID);
    return {reservations: reservations};
  },

  componentDidMount: function() {
    ReservationStore.addIndexChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ReservationStore.removeIndexChangeListener(this._onChange);
  },

  _onChange: function() {
    debugger;
    this.setState({reservations: ReservationStore.createdReservations(CURRENT_USER_ID)});
  },

  render: function() {
    return (
    <div>
      {this.state.reservations.map(function(reservation){
        return (<OutgoingIndexItem reservation={reservation} key={reservation.id}/>);
      })}
    </div>)
  }
})
