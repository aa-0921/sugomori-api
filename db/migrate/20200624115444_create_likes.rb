class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :picpost_id, null: false

      t.timestamps

      t.index :user_id
      t.index :picpost_id
      t.index [:user_id, :picpost_id], unique: true
    end
  end
end
