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
    var message = <div></div>;
    var rocket = this.props.rocket;
    if(this.state.reservations.length === 0) {
      message = <div className="rocket-msg">No reservations to show</div>
    }

    return(
      <div className="profile-item">

          <div className="inline-rocket-title">{this.props.rocket.rocket_name}</div>
          <br />
            <Lightbox>
              <LightboxTrigger>
                <button className="view-res-button">View Reservations</button>
              </LightboxTrigger>

              <LightboxModal>
                <IncomingReservationIndex rocket={rocket} key={rocket.id} />
              </LightboxModal>
            </Lightbox>

        <img src={this.props.rocket.image_url} className="rocket-index-pic" />
      </div>
    )
  }
})
