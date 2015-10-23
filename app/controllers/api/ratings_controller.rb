class Api::RatingsController < ApplicationController
  def index
    @ratings = Rating.all
  end

  def create
    puts "Params are #{rating_params}"
    @rating = Rating.new(rating_params)
    if @rating.save
      render json: @rating
    else
      render @rating.errors.full_messages, status: 422
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
    params.permit(:rocket_id, :rater_id, :rating, :body)
  end

end
