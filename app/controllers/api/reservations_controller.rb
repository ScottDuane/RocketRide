class Api::ReservationsController < ApplicationController
  def index
    @reservations = Reservation.all
  end

  def create
    @reservation = current_user.reservations.new(reservation_params)

    if @reservation.save
      render json: @reservation
    else
      render @reservation.errors.full_messages, status: 422
    end
  end

  def reservation_params
    params.permit(:rocket_id, :start_date, :end_date, :status)
  end
end
