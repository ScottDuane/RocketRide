class RocketsController < ApplicationController
  def create
    @rocket = Rocket.new(rocket_params)
    puts "params are #{rocket_params}" 
    if @rocket.save
      render json: @rocket
    else
      render @rocket[:errors].full_messages
    end
  end

  private
  def rocket_params
    params.require(:rocket).permit(:rocket_name, :rocket_type, :captain_id, :avail_start, :avail_end, :image_url)
  end
end
