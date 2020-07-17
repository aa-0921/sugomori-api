# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :lockable, :timeoutable

  validates :name, presence: true, length: { maximum: 30 }

  acts_as_followable
  acts_as_follower

  # before_save -> { skip_confirmation! }
  before_save { self.email = email.downcase }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  validates :password, presence: true, length: { minimum: 6 }

  has_many :picposts, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_many :likes, dependent: :destroy

  has_many :social_profiles, dependent: :destroy
  def social_profile(provider)
    social_profiles.select { |sp| sp.provider == provider.to_s }.first
  end
end
