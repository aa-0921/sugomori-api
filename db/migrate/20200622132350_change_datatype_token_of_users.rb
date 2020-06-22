class ChangeDatatypeTokenOfUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :tokens, 'text USING CAST(tokens AS text)'
  end
end
