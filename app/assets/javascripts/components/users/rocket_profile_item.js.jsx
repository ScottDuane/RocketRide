var RocketProfileItem = React.createClass({
  getInitialState: function() {
    // debugger;
    return {reservations: ReservationStore.findByRocketId(this.props.rocket.id)}
  },

  componentDidMount: function() {
    ReservationStore.addIndexChangeListener(this._onChange);

  },

  componentWillUnmount: function() {
    ReservationStore.removeIndexChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState({reservations: ReservationStore.findByRocketId(this.props.rocket.id)});
  },

  render: function() {
    var message = "";
    if(this.state.reservations.length === 0) {
      message = <p>No reservations to show</p>
    }
    return(
      <div>
        <img src={this.props.rocket.image_url} className="rocket-index-pic" />
        {message}
          <ul>
            {this.state.reservations.map(function(reservation){
              return (<li><IncomingReservationIndex rocket={rocket} /></li>)
            })}
          </ul>
      </div>
    )
  }
})
