class AddDescriptionToRockets < ActiveRecord::Migration
  def change
    add_column :rockets, :description, :string
  end
end
