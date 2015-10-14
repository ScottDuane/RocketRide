class AddImageUrlToRockets < ActiveRecord::Migration
  def change
    add_column :rockets, :image_url, :string
  end
end
