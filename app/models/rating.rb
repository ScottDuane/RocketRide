class Rating < ActiveRecord::Base
  validates :rater_id, :rocket_id, :body, :rating, presence: true 
end
