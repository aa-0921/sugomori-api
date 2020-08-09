class AddExtensionToPicposts < ActiveRecord::Migration[5.2]
  def change
    add_column :picposts, :extension, :string
  end
end
