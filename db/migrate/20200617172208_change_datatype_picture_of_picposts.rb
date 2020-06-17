class ChangeDatatypePictureOfPicposts < ActiveRecord::Migration[5.2]
  def change
    change_column :picposts, :picture, 'text USING CAST(picture AS text)'
  end
end
