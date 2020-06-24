# frozen_string_literal: true

class Picpost < ApplicationRecord
  belongs_to :user, optional: true
  validates :user_id, presence: true
  validates :content, presence: false, length: { maximum: 140 }
  validates :picture, presence: true

  has_many :likes, dependent: :destroy

  # 投稿にいいねする
  def iine(current_user)
    likes.create(user_id: current_user.id)
  end

  # 投稿のいいねを解除する
  def uniine(current_user)
    likes.find_by(user_id: current_user.id).destroy
  end
end
