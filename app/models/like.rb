class Like < ApplicationRecord
  belongs_to :user
  belongs_to :picpost
  validates :user_id, presence: true
  validates :picpost_id, presence: true
end
