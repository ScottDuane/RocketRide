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
    return(<div className="inc-res-index">
      {this.state.reservations.map(function(reservation) {
        return <div className="inc-res-item"><IncomingIndexItem reservation={reservation} /></div>;
      })}

    </div>)
  }
})
