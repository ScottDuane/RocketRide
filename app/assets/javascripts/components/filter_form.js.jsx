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
    if(this.types.length === 0) {
      FilterActions.updateTypes(["Constitution class starship", "Galaxy class starship", "Freightor", "Shuttlecraft", "Sphere", "Cube", "Firefly", "Battlestar", "Other"]);
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
              <input id="filter-start-date" className="date-input" type="date" placeholder="Start date" onChange={this.handleStartChange} />
              <label className="end-date-label" for="end-date">End Date</label>
              <input id="filter-end-date" className="date-input" type="date" onChange={this.handleEndChange} />
              <label for="capacity" className="capacity-label">Capacity</label>
              <input type="number" className="capacity-input" onChange={this.handleCapacityChange} />
            </div>
            <div className="filter-types" id="filter-types-top">
              <ul className="filter-list">
              <li className="type-item">
                <input id="battlestar" className="type-select" type="checkbox" value='Battlestar' onClick={this.handleCheckChange} />
                <label for="battlestar" className="type-label">Battlestar</label>
              </li>

                <li className="type-item">
                  <input id="galaxy" className="type-select" type="checkbox" value='Galaxy class starship' onClick={this.handleCheckChange} />
                  <label for="galaxy" className="type-label">Galaxy class starship</label>
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
             <div className="filter-types" id="filter-types-bottom">
                <ul className="filter-list">
                <li className="type-item">
                  <input id="constitution" className="type-select" type="checkbox" value='Constitution class starship' onClick={this.handleCheckChange} />
                  <label for="constitution" className="type-label">Constitution class starship</label>
                </li>
                <li className="type-item">
                  <input id="firefly" className="type-select" type="checkbox" value='Firefly' onClick={this.handleCheckChange} />
                  <label for="firefly" className="type-label">Firefly</label>
                </li>
                <li className="type-item">
                  <input id="cube" className="type-select" type="checkbox" value='Cube' onClick={this.handleCheckChange} />
                  <label for="cube" className="type-label">Cube</label>
                </li>
                <li className="type-item">
                  <input id="sphere" className="type-select" type="checkbox" value='Sphere' onClick={this.handleCheckChange} />
                  <label for="sphere" className="type-label">Sphere</label>
                </li>
                <li className="type-item">
                  <input id="other" className="type-select" type="checkbox" value='Other' onClick={this.handleCheckChange} />
                  <label for="other" className="type-label">Other</label>
                </li>
              </ul>
          </div>
        </form>
      </div>
    );
  }
});
