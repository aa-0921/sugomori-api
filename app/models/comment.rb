class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :picpost, optional: true
end
