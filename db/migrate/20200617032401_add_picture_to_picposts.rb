class AddPictureToPicposts < ActiveRecord::Migration[5.2]
  def change
    add_column :picposts, :picture, :string
  end
end
