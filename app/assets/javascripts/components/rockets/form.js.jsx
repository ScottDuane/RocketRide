window.RocketForm = React.createClass ({
  getInitialState: function() {
      return {captain_id: window.CURRENT_USER_ID}
  },

  createBench: function () {
    ApiUtil.createRocket(this.state);
  },

  handleNameChange: function(e) {
    this.setState({rocket_name: e.target.value});
  },

  handleTypeChange: function(e) {
    this.setState({rocket_type: e.target.value});
  },

  handleDescriptionChange: function() {
    this.setState({description: e.target.value});
  },

  handleStartDateChange: function() {
    this.setState({avail_start: e.target.value});
  },

  handleEndDateChange: function() {
    this.setState({avail_end: e.target.value});
  },

  render: function() {
    return(<div>
      <form onSubmit={this.createBench}>
        <label>Rocket Name:
          <input type="text" onChange={this.handleNameChange}/>
        </label>

        <br />

        <label>Rocket Type:
          <input type="text" onChange={this.handleTypeChange}/>
        </label>

        <br />

        <label>Description:
          <input type="text" onChange={this.handleDescriptionChange}/>
        </label>

        <br />
        <label>Available beginning
          <input type="date" onChange={this.handleStartDateChange}/>
        </label>

        <label> until 
          <input type="date" onChange={this.handleEndDateChange}/>
        </label>
        <input type="submit" value="Add Bench"/>
      </form>
    </div>)
  }
});
