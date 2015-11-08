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
    this.setState({reservations: ReservationStore.createdReservations(CURRENT_USER_ID)});
  },

  render: function() {
    var Link = ReactRouter.Link;
    var headerText = "";
    var indexLink = "";
    if(this.state.reservations.length === 0) {
      headerText = "You Haven't Made Any Reservations.";
      indexLink = <Link to="/"><button className="index-button">Find A Craft</button></Link>;
    } else {
      headerText = "You've Made Reservations.";
    }
    return (
    <div className="out-res-index">
      <div className="res-header">{headerText}</div>
      {indexLink}
      {this.state.reservations.map(function(reservation){
        return (<OutgoingIndexItem reservation={reservation} key={reservation.id}/>);
      })}
    </div>);
  }
});
