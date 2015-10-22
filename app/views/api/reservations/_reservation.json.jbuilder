json.extract! reservation, :id, :rocket_id, :creator_id, :start_date, :end_date, :status
# json.rocket reservation.rocket do |rocket|
#   json.partial! rocket, '/api/rockets/rocket'
# end
# json.captain reservation.rocket.user
# Query.includes(:rocket => :user)
