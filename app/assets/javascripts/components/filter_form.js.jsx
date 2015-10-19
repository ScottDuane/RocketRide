var FilterForm = React.createClass ({
  getInitialState: function() {
    return {name: "", start_date: null, end_date: null}
  },

  handleFilter: function(e) {
    e.preventDefault();
    ApiUtil.applyFilter(this.state);
  },


  handleCheckChange: function(e) {
    e.preventDefault();
    if(e.target.selected){
      this.setState({type: this.state.type.push(e.target.value)});
    } else {
      var idx = this.state.type.indexOf(e.target.value);
      this.setState({type: this.state.type.splice(idx, 1)});
    }
  },

  handleStartChange: function(e) {
    e.preventDefault();
    this.setState({start: e.target.value});
  },

  handleEndChange: function(e) {
    e.preventDefault();
    this.setState({end: e.target.value});
  },

  render: function() {

    return (
      <div className="filter-form">
        <form onSubmit={this.handleFilter}>
          <input type="text" onChange={this.handleTypeChange}>Type</input>
          <input type="date" onChange={this.handleStartChange} />
          <input type="date" onChange={this.handleEndChange} />
          <input type="checkbox" onChange={this.handleCheckChange.bind(null, 'Galaxy class')}>Galaxy class</input>
          <input type="checkbox" onChange={this.handleCheckChange.bind(null, 'Constitution class')}>Consitution class</input>
          <input type="checkbox" onChange={this.handleCheckChange.bind(null, 'Shuttlecraft')}>Shuttlecraft</input>
          <input type="checkbox" onChange={this.handleCheckChange.bind(null, 'Freightor')}>Freightor</input>
          <input type="submit" value="Apply Filter" />
        </form>

      </div>
    );
  }
});
