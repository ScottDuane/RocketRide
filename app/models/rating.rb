class Reservation < ActiveRecord::Base
  validates :rator_id, :rocket_id, :body, :rating, presence: true 
end
