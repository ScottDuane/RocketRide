class Rocket < ActiveRecord::Base
  validates :rocket_name, :captain_id, :rocket_type, :avail_start, :avail_end, presence: true
  validates :start_date_is_before_end_date

  belongs_to :user,
    foreign_key: :captain_id

  def start_date_is_before_end_date
    if self.avail_start > self.avail_end
      raise "Start must be before end"
    end
  end
end
