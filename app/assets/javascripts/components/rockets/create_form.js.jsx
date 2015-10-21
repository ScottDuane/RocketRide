/* global ApiUtil */

window.RocketForm = React.createClass ({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
      this.photo_src = null;
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
    debugger;
    cloudinary.openUploadWidget({upload_preset: "zvecaalc"}, function(error, photo) {
      this.photo_src = photo[0].url;
      this.setState({image_url: photo[0].url});
    }.bind(this));
  },

  render: function() {
    var Link = ReactRouter.Link;
    var img_tag = "";
    var photo_verb = "Upload";
    if(this.photo_src) {
      photo_verb = "Change";
      img_tag = <img src={this.photo_src} className="create-form-pic" />;
    }

    return(<div>
      <Navbar />

        <div className="create-form">
        <form className="form-inline" onSubmit={this.createRocket}>
          <div class="row">
            <div className="col-md-4">
                <label for="rocket-name">Rocket Name</label>
                <input type="text" className="form-control" id="rocket-name" placeholder="U.S.S. Enterprise" onChange={this.handleNameChange}/>
            </div>
            <div className="col-md-4">
                <label for="rocket-type">Rocket Type</label>
                <input type="text" className="form-control" id="rocket-type" placeholder="Galaxy class starship" onChange={this.handleTypeChange}/>
            </div>

          </div>
          <div className="row">
            <div className="col-md-4">
                <label for="rocket-desc">Description</label>
                <input type="text" className="form-control" id="rocket-desc" placeholder="Some info on your rocket" onChange={this.handleDescriptionChange}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
                <label for="rocket-start">Available from</label>
                <input type="date" className="form-control" id="rocket-start" onChange={this.handleStartDateChange} />
            </div>
            <div className="col-md-4">
                <label for="rocket-end">until</label>
                <input type="date" className="form-control" id="rocket-end" onChange={this.handleEndDateChange}/>
            </div>
            <div className="col-md-4">
              <button onClick={this.handlePhotoUpload}>{photo_verb} Photo</button>
              {img_tag}
            </div>
          </div>

          <div className="row">
            <button type="submit" className="btn btn-primary">List your rocket!</button>
          </div>
        </form>
      </div>

    </div>)
  }
});
