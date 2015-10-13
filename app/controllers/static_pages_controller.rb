class StaticPagesController < ApplicationController
  before_action :require_logged_in
  def root
    puts "Current user is #{current_user}"
  end
end
