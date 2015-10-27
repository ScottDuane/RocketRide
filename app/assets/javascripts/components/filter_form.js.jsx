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

    if(types.length === 0) {
      FilterActions.updateTypes(["Constitution class starship", "Galaxy class starship", "Freightor", "Shuttlecraft"]);
    } else {
      FilterActions.updateTypes(this.types);
    }
  },

  handleStartChange: function(e) {
    e.preventDefault();
    if(e.target.value === "") {
      var start = new Date("January 1, 1000");
      FilterActions.updateStart(start);
    } else {
      FilterActions.updateStart(e.target.value);
    }
  },

  handleEndChange: function(e) {
    e.preventDefault();
    if(e.target.value === ""){
      var end = new Date("December 31, 3000");
      FilterActions.updateEnd(end);
    } else {
      FilterActions.updateEnd(e.target.value);
    }
  },

  handleCapacityChange: function(e) {
    e.preventDefault();
    debugger;
    if(e.target.value === "") {
      FilterActions.updateCapacity(0);
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
