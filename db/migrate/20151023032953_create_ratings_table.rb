class CreateRatingsTable < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.timestamps
      t.integer :rater_id, null: false
      t.integer :rocket_id, null: false
      t.integer :rating, null: false 
    end
  end
end
