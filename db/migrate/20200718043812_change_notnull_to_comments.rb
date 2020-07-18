class ChangeNotnullToComments < ActiveRecord::Migration[5.2]
  def up
    change_column_null :comments, :content, false
    change_column_null :comments, :user_id, false
    change_column_null :comments, :picpost_id, false
    change_column_null :comments, :user_name, false
  end

  def down
    change_column_null :comments, :content, true
    change_column_null :comments, :user_id, true
    change_column_null :comments, :picpost_id, true
    change_column_null :comments, :user_name, true
  end
end
