class Rocket < ActiveRecord::Base
  validates :rocket_name, :captain_id, :rocket_type, :avail_start, :avail_end, :image_url, presence: true
  validate :start_date_is_before_end_date
  after_initialize :set_default_photo

  belongs_to :user,
    foreign_key: :captain_id


  def start_date_is_before_end_date
    if self.avail_start > self.avail_end
      raise "Start must be before end"
    end
  end

  def set_default_photo
    self.image_url ||= 'assets/spaceship_default.jpeg'
    self.save!
  end
end
