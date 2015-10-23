class AddCapacityToRockets < ActiveRecord::Migration
  def change
    add_column :rockets, :capacity, :integer 
  end
end
