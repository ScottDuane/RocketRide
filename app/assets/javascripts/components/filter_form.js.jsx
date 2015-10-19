var FilterForm = React.createClass ({
  getInitialState: function() {
    this.types = [];
    return {};
  },

  handleFilter: function(e) {
    e.preventDefault();
  },


  handleCheckChange: function(e) {
    e.preventDefault();
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
      <div className="filter-form">
        <form>
          <input type="date" onChange={this.handleStartChange} />
          <input type="date" onChange={this.handleEndChange} />
          <input type="checkbox" value='Galaxy class' onChange={this.handleCheckChange}>Galaxy class</input>
          <input type="checkbox" value='Constitution class' onChange={this.handleCheckChange}>Consitution class</input>
          <input type="checkbox" value='Shuttlecraft' onChange={this.handleCheckChange}>Shuttlecraft</input>
          <input type="checkbox" value='Freightor' onChange={this.handleCheckChange}>Freightor</input>
        </form>

      </div>
    );
  }
});
