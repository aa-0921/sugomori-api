class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :picpost

  validates :content, presence: true, length: { maximum: 30 }
  validates :user_id, presence: true
  validates :picpost_id, presence: true
  validates :user_name, presence: true
end
