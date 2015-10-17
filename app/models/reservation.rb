class Reservation < ActiveRecord::Base
  validates :start_date, :end_date, :creator_id, :rocket_id, :status, presence: true
  belongs_to :user,
    foreign_key: :creator_id

  belongs_to :rocket


end
