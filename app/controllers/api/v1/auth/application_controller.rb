# frozen_string_literal: true

# module Api
#   module V1
class Api::V1::Auth::ApplicationController < ActionController::API
  # protect_from_forgery with: :null_session
  # protect_from_forgery unless: -> { request.format.json? }
  after_action :set_csrf_token_header

  def set_csrf_token_header
    p "form_authenticity_tokenの内容(application_controller.rb)"
    p form_authenticity_token

    response.set_header("X-CSRF-Token", form_authenticity_token)
  end
  before_action :authenticate_user!, except: %i(new create)
  include DeviseTokenAuth::Concerns::SetUserByToken
  # before_action :authenticate_user!, except: [:new, :create]

  # skip_before_action :verify_authenticity_token
  protect_from_forgery with: :exception

  include ActionController::RequestForgeryProtection

  # , raise: false, if: :devise_controller?

  # include SessionsHelper

  # serialization_scope :view_context

  # before_action :authenticate_account!, unless: :devise_controller?
  # before_action :configure_permitted_parameters, if: :devise_controller?

  private

  def devise_token_auth_controller?
    params[:controller].split('/')[0] == 'devise_token_auth'
  end

  def configure_permitted_parameters
    # DBにaccounts.nameカラムがある場合
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    devise_parameter_sanitizer.permit(:account_update, keys: [:name])
  end
end
