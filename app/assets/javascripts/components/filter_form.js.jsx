var FilterForm = React.createClass ({
  getInitialState: function() {
    this.types = [];
    return {};
  },

  handleCheckChange: function(e) {
    if(e.target.checked){
      this.types.push(e.target.value);
    } else {
      var idx = this.types.indexOf(e.target.value);
      this.types.splice(idx, 1);
    }
    FilterActions.updateTypes(this.types);
  },

  handleStartChange: function(e) {
    e.preventDefault();
    FilterActions.updateStart(e.target.value);
  },

  handleEndChange: function(e) {

    e.preventDefault();
    
    FilterActions.updateEnd(e.target.value);
  },

  handleCapacityChange: function(e) {
    e.preventDefault();
    if(e.target.value === "") {
      FilterActions.updateCapacity(e.target.value);
    } else {
      FilterActions.updateCapacity(parseInt(e.target.value));
    }
  },

  render: function() {

    return (
      <div className="filter-form">
        <form>
            <div className="date-row">
              <label className="start-date-label" for="start-date">Start Date</label>
              <input id="start-date" className="date-input" type="date" placeholder="Start date" onChange={this.handleStartChange} />
              <label className="end-date-label" for="end-date">End Date</label>
              <input id="end-date" className="date-input" type="date" onChange={this.handleEndChange} />
              <label for="capacity" className="capacity-label">Capacity</label>
              <input type="number" className="capacity-input" onChange={this.handleCapacityChange} />
            </div>
        </form>
      </div>
    );
  }
});
