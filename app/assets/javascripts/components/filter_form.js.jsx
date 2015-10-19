var FilterForm = React.createClass ({
  getInitialState: function() {
    return {name}
  },
  handleFilter: function(e) {
    e.preventDefault();

  },

  handleTypeChange: function(e) {
    e.preventDefault();
  },
  render: function() {

    return (
      <div className="filter-form">
        <form onSubmit={this.handleFilter}>
          <input type="text" onChange={this.handleTypeChange}>Type</input>
        </form>

      </div>
    );
  }
});
