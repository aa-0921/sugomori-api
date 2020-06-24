# frozen_string_literal: true

class Picpost < ApplicationRecord
  belongs_to :user, optional: true
  validates :user_id, presence: true
  validates :content, presence: false, length: { maximum: 140 }
  validates :picture, presence: true

  has_many :likes, dependent: :destroy
end
