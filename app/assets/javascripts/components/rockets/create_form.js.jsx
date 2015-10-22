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

    return(
      <div>
      <Navbar />
        <img src="assets/back-5.jpg" className="background-image">
        <div className="create-form">
            <form onSubmit={this.createRocket}>
              <div className="create-row" className="create-form-header">
                Share the love.  List your spacecraft.*
              </div>


              <div className="create-row">
                <div className="create-label-container">
                  <label for="rocket-name" className="create-label">What's the name of your craft?</label>
                </div>
                <div className="create-input-container">
                    <input type="text" id="rocket-name" className="create-input" onChange={this.handleNameChange}/>
                </div>
              </div>

              <div className="create-row">
                <div className="create-label-container">
                  <label for="rocket-type" className="create-label">What kind of craft do you fly?</label>
                </div>
                <div className="create-input-container">
                  <input type="text" id="rocket-type" placeholder="Galaxy class starship" onChange={this.handleTypeChange}/>
                </div>
              </div>

            <br></br>
              <div className="create-row">
                <div className="create-label-container">
                    <label for="rocket-desc" className="create-label">Tell potential riders about your craft.  (E.g., where do you pick up passengers, what's the gravitational force on your ship, what are the sleeping arrangements, etc.)</label>
                </div>

                <div className="create-input-container">
                  <textarea rows="6" cols="25" id="rocket-desc" className="create-input" onChange={this.handleDescriptionChange}/>
                </div>
              </div>

              <div className="create-row">
                <div className="create-label-container">
                    <label for="rocket-start" className="create-label">When can you begin taking riders?</label>
                </div>
                <div className="create-input-container">
                    <input type="date" id="rocket-start" className="create-input" onChange={this.handleStartDateChange} />
                </div>
              </div>

              <div className="create-row">
                <div className="create-label-container">
                    <label for="rocket-end" className="create-label">And until what date?</label>
                </div>
                <div className="create-input-container">
                  <input type="date" id="rocket-end" className="create-input" onChange={this.handleEndDateChange}/>
                </div>
              </div>

                <div className="create-row">
                  <div className="create-label-container">
                    <label for="upload-button" className="create-label">Show off your craft with a nice photo.</label>
                  </div>
                  <div className="create-input-container">
                    <button className="photo-upload-button" onClick={this.handlePhotoUpload}>{photo_verb} Photo</button>
                    {img_tag}
                  </div>
                </div>


                <div className="create-row">
                    <button type="submit" className="create-button">List your craft!</button>

                </div>
                <div className="create-row" id="create-warning">
                  RocketRide is not responsible for damage to crafts (e.g., phaser burns on walls, stolen cargo, etc.) or personal injuries (e.g., Reever bites, mind control-related trauma, etc.).
                </div>
              </form>
        </div>
      </img>

    </div>)
  }
});
