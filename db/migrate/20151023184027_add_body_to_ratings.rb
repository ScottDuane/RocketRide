class AddBodyToRatings < ActiveRecord::Migration
  def change
    add_column :ratings, :body, :string 
  end
end
