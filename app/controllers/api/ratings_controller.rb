class Api::RatingsController < ApplicationController
  def index
    @ratings = Rating.all
  end

  def create
    @rating = Rating.new(rating_params)
    if @rating.save
      render json: @rating
    else
      render @rating.errors.full_messages
    end
  end

  def update
    @rating = Rating.find(params[:id])
    if @rating.update(rating_params)
      render json: @rating
    else
      render @rating.errors.full_messages
    end
  end

  def rating_params
    params.require(:rating).permit(:rocket_id, :user_id, :rating)
  end

end
