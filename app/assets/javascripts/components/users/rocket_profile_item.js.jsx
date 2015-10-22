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
    var rocket = this.props.rocket;
    if(this.state.reservations.length === 0) {
      message = <p>No reservations to show</p>
    }

    //  debugger;
    return(
      <div className="profile-item">
        <img src={this.props.rocket.image_url} className="rocket-index-pic" />

        <div className="profile-text">
          {message}
        </div>
        <div className="profile-text">
          <ul>
            {this.state.reservations.map(function(reservation){
              return (<li><IncomingReservationIndex rocket={rocket} /></li>)
            })}
          </ul>
        </div>

      </div>
    )
  }
})
