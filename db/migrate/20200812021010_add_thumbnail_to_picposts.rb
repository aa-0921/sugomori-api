class AddThumbnailToPicposts < ActiveRecord::Migration[5.2]
  def change
    add_column :picposts, :thumbnail, :string
  end
end
