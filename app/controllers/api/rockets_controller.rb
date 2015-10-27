class Api::RocketsController < ApplicationController
  def index
    @rockets = Rocket.all
  end

  def create
    rocket = Rocket.create(rocket_params)
    render json: rocket
  end

  def rocket_params
    params.permit(:rocket_name, :rocket_type, :captain_id, :avail_start, :avail_end, :image_url, :capacity, :description)
  end

end
