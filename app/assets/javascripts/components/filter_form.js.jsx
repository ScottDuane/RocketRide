var FilterForm = React.createClass ({
  getInitialState: function() {
    this.types = [];
    return {};
  },

  handleFilter: function(e) {
    e.preventDefault();
  },


  handleCheckChange: function(e) {
    if(e.target.selected){
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

  render: function() {

    return (
      <div className="filter-form" className="container group">
        <form>
        <div className="row">
          <div className="col-md-12">
            <h5 className="filter-label"></h5>
          </div>
        </div>


        <div className="row" className="date-row">
          <div className="col-md-2" />
          <div className="col-md-1">
            <label className="date-label" for="start-date">Start Date</label>
          </div>

          <div className="col-md-3">
            <input className="date-input" type="date" placeholder="Start date" onChange={this.handleStartChange} />
          </div>

          <div className="col-md-1">
            <label className="date-label" for="start-date">End Date</label>
          </div>

          <div className="col-md-3">
            <input className="date-input" type="date" onChange={this.handleEndChange} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12" />
        </div>
        <div className="row" className="filter-types">
            <div className="col-md-2" />
            <div className="col-md-1">
              <h5>Rocket Types</h5>
            </div>
            <div className="col-md-2">
              <label for="galaxy" className="type-label">Galaxy class</label>
              <input id="galaxy" className="type-select" type="checkbox" value='Galaxy class' onClick={this.handleCheckChange} />
            </div>

            <div className="col-md-2">
              <label for="constitution" className="type-label">Constitution class</label>
              <input id="constitution" className="type-select" type="checkbox" value='Constitution class' onClick={this.handleCheckChange} />
            </div>

            <div className="col-md-2">
              <label for="shuttlecraft" className="type-label">Shuttlecraft</label>
              <input id="shuttlecraft" className="type-select" type="checkbox" value='Shuttlecraft' onClick={this.handleCheckChange} />
            </div>

            <div className="col-md-2">
              <label for="freightor" className="type-label">Freightor</label>
              <input id="freightor" className="type-select" type="checkbox" value='Freightor' onClick={this.handleCheckChange} />
            </div>

        </div>
        </form>
      </div>
    );
  }
});
