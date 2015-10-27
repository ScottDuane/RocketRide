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
    debugger;
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
            <br />
            <div className="filter-types">
              <ul className="filter-list">
                <li className="type-item">
                  <input id="galaxy" className="type-select" type="checkbox" value='Galaxy class' onClick={this.handleCheckChange} />
                  <label for="galaxy" className="type-label">Galaxy class</label>
                </li>
                <li className="type-item">
                  <input id="constitution" className="type-select" type="checkbox" value='Constitution class' onClick={this.handleCheckChange} />
                  <label for="constitution" className="type-label">Constitution class</label>
                </li>
                <li className="type-item">
                  <input id="shuttlecraft" className="type-select" type="checkbox" value='Shuttlecraft' onClick={this.handleCheckChange} />
                  <label for="shuttlecraft" className="type-label">Shuttlecraft</label>
                </li>
                <li className="type-item">
                  <input id="freightor" className="type-select" type="checkbox" value='Freightor' onClick={this.handleCheckChange} />
                  <label for="freightor" className="type-label">Freightor</label>
                </li>
              </ul>
            </div>
        </form>
      </div>
    );
  }
});
