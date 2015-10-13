class Rocket < ActiveRecord::Base
  validates :rocket_name, :captain_id, :rocket_type, :avail_start, :avail_end, presence: true
  validate :start_date_is_before_end_date

  belongs_to :user,
    foreign_key: :captain_id
  def create
    @rocket = Rocket.new(rocket_params)

    if @rocket.save
      render json: @rocket
    else
      render @rocket[:errors].full_messages 
    end
  end

  private
  def rocket_params
    params.require(:rocket).permit(:rocket_name, :rocket_type, :captain_id, :avail_start, :avail_end)
  end

  def start_date_is_before_end_date
    if self.avail_start > self.avail_end
      raise "Start must be before end"
    end
  end
end
