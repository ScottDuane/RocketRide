class CreateRockets < ActiveRecord::Migration
  def change
    create_table :rockets do |t|
      t.string :rocket_name, null: false
      t.string :rocket_type, null: false
      t.integer :captain_id, null: false
      t.date :avail_start, null: false
      t.date :avail_end, null: false
      t.timestamps null: false
    end
  end
end
