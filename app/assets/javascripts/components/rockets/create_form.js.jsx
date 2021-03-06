/* global ApiUtil */

window.RocketForm = React.createClass ({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
      this.photo_src = "assets/spaceship_default.png";
      this.photo_uploaded = false;
      return {captain_id: window.CURRENT_USER_ID, rocket_type: "Galaxy class starship"}
  },

  createRocket: function () {
    ApiUtil.createRocket(this.state);
    $('#congrat-button').click();

  },

  clearForm: function() {
    $('.create-input').val('');
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

  handleCapChange: function(e) {
    this.setState({capacity: e.target.value});
  },
  handlePhotoUpload: function(e) {
    e.preventDefault();
    cloudinary.openUploadWidget({upload_preset: "zvecaalc"}, function(error, photo) {
      this.photo_src = photo[0].url;
      this.photo_uploaded = true;
      this.setState({image_url: photo[0].url});
    }.bind(this));
  },

  render: function() {
    var Link = ReactRouter.Link;
    var img_tag = "";
    var photo_verb = "Upload";

    if(this.photo_uploaded) {
      photo_verb = "Change";
      img_tag = <img src={this.photo_src} className="create-form-pic" />;
    }

    user_url = "#/users/"+window.CURRENT_USER_ID
    return(
      <div>
      <Navbar />
        <img src="images/back-5.jpg" className="background-image">
        <div className="create-form">
            <form onSubmit={this.createRocket}>
              <div className="create-row" className="create-form-header">
                Share the love.  List your spacecraft.
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
                  <select id="rocket-type" onChange={this.handleTypeChange} className="type-dropdown">
                    <option value="Galaxy class">Galaxy class starship</option>
                    <option value="Constitution class">Constitution class starship</option>
                    <option value="Freightor">Freightor</option>
                    <option value="Firefly">Firefly</option>
                    <option value="Battlestar">Battlestar</option>
                    <option value="Cube">Cube</option>
                    <option value="Sphere">Sphere</option>
                    <option value="Shuttlecraft">Shuttlecraft</option>
                    <option value="Other">Other</option>
                  </select>
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
                <label for="create-cap" className="cap-label">How many passengers can you accommodate?</label>
                <input type="number" min="0" className="create-input" id="rocket-cap" onChange={this.handleCapChange} />
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

        <Lightbox>
         <LightboxTrigger>
          <button id="congrat-button">Congrat button</button>
         </LightboxTrigger>
         <LightboxModal>
            <div>

               <h1 className="congrats-box">Congrats!  Your craft has been listed.</ h1>
              <ul className="congrats-list">
               <li id="return-box-1"><Link to="/"><button className="nav-button" id="return-index-button">All Crafts</button></Link></li>
               <li id="return-box-2"><Link to={user_url}><button className="nav-button" id="return-profile-button">Your Profile</button></Link></li>
              </ul>
            </div>
         </LightboxModal>
       </Lightbox>
      </img>

    </div>)
  }
});
