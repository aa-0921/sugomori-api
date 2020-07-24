# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :lockable, :confirmable,
         :omniauthable, omniauth_providers: [:facebook, :twitter, :github]
  #  :timeoutable,

  def self.from_omniauth(auth)
    where(uid: auth.uid).first
  end

  def self.new_with_session(_, session)
    super.tap do |user|
      if (data = session['devise.omniauth_data'])
        user.name = data['name'] if user.name.blank?
        user.email = data['email'] if user.email.blank?
        user.provider = data['provider'] if data['provider'] && user.provider.blank?
        user.uid = data['uid'] if data['uid'] && user.uid.blank?
        user.password = Devise.friendly_token[0, 20] if user.password.blank?
        user.skip_confirmation!
      end
    end
  end

  # def logged_in?
  #   !current_user.nil?
  # end
  #  def is_sns_signup?
  #   p "is_sns_signup"
  #   !user.provider.nil?
  # end

  with_options if: !:provider.nil? do
    validates :name, presence: false
    validates :password, presence: false
    validates :email, presence: false
  end

  acts_as_followable
  acts_as_follower

  before_save -> { skip_confirmation! }
  before_save { self.email = email.downcase }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :name, presence: true, length: { maximum: 30 }
  validates :password, presence: true, length: { minimum: 6 }

  has_many :picposts, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :social_profiles, dependent: :destroy

  def social_profile(provider)
    social_profiles.select { |sp| sp.provider == provider.to_s }.first
  end
end
