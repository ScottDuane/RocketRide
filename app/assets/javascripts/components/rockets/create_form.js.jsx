/* global ApiUtil */

window.RocketForm = React.createClass ({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
      return {captain_id: window.CURRENT_USER_ID}
  },

  // componentDidMount: function() {
  //   document.getElementById('photoButton').addEventListener('click', function() {
  //     cloudinary.openUploadWidget({upload_preset: "dmowg49ys"}, function(photo) {
  //       this.setState({image_url: photo.url});
  //     });
  //   })
  // }
  createRocket: function () {
    debugger;
    ApiUtil.createRocket(this.state);
    this.props.history.pushState(null, '/');
  },

  handleNameChange: function(e) {
    this.setState({rocket_name: e.target.value});
  },

  handleTypeChange: function(e) {
    this.setState({rocket_type: e.target.value});
  },

  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },

  handleStartDateChange: function(e) {
    var start = new Date(e.target.value);
    this.setState({avail_start: start});
  },

  handleEndDateChange: function(e) {
    var end = new Date(e.target.value);
    this.setState({avail_end: end});
  },

  handlePhotoUpload: function(e) {
    e.preventDefault();
    cloudinary.openUploadWidget({upload_preset: "zvecaalc"}, function(error, photo) {
      this.setState({image_url: photo.url});
    });
  },

  render: function() {
    var Link = ReactRouter.Link;
    return(<div>
      <form onSubmit={this.createRocket}>
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

        <br />
        <button onClick={this.handlePhotoUpload}>Upload Photo</button>
        <br />
        <input type="submit" value="Blastoff!"/>
      </form>

      <Link to='/'>Back to Rockets</Link>
    </div>)
  }
});
