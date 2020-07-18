class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :picpost
  validates :content, presence: true, length: { maximum: 30 }
end
