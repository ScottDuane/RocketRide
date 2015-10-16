class CreateReservationsTable < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.timestamps null: false 
      t.integer :creator_id, null: false
      t.integer :rocket_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
    end
  end
end
