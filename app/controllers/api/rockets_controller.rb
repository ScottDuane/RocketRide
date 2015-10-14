class Api::RocketsController < ApplicationController
  def index
    @rockets = Rocket.all
  end

end
