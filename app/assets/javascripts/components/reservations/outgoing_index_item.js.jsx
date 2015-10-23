
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
    var Link = ReactRouter.Link;
    var verb = "";
    var rocket_url = "rockets/" + this.rocket.id;
    if(this.props.reservation.status === 'pending') {
      verb = 'requested';
    } else {
      verb = 'reserved';
    }
    var status_class="";
    var button = "";
    if(this.state.status === 'approved' || this.state.status === 'pending') {
      button = <button className="res-button" onClick={this.handleCancellation}>Cancel Reservation</button>;
    } else {
      button = <Link to={rocket_url}><button className="res-button">Reserve Again</button></Link>;
    }

    if(this.state.status === 'approved') {
      status_class = "approved-res";
    } else if (this.state.status === 'pending') {
      status_class = "pending-res";
    } else {
      status_class = "deny-cancel-res";
    }
    return (
      <div className="out-res-item">
        <div className="res-rocket"><Link to={rocket_url}>{this.rocket.rocket_name}</Link></div>
        <div className="res-desc">from {this.props.reservation.start_date} until {this.props.reservation.end_date}</div>
        <div className={status_class}>{this.state.status.toUpperCase()}</div>
        <img src={this.rocket.image_url} className="thumbnail-rocket" />

        {button}
      </div>
    )
  }
})
