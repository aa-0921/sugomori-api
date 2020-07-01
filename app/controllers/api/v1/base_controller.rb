# frozen_string_literal: true

class Api::V1::BaseController < ActionController::Base
  # include DeviseTokenAuth::Concerns::SetUserByToken
  # protect_from_forgery with: :null_session # トークン認証のためCSRFは使わない
  # before_action :authenticate_user!, except: [:new, :create]
end
