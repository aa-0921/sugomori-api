# frozen_string_literal: true

# module Api
#   module V1
class Api::V1::ApplicationController < ActionController::API # Note: here is not ::BASE
  protect_from_forgery unless: -> { request.format.json? }

  session[:_csrf_token]
  include ActionController::RequestForgeryProtection
  # protect_from_forgery with: :exception

  include DeviseTokenAuth::Concerns::SetUserByToken
  # protect_from_forgery with: :null_session
  # include DeviseTokenAuth::Concerns::SetUserByToken
  include SessionsHelper
  # skip_before_action :verify_authenticity_token, raise: false, if: :devise_controller?
  skip_before_action :verify_authenticity_token

  # before_filter :set_host

  # def set_host
  #   Rails.application.routes.default_url_options[:host] = request.host_with_port
  # end
  #   end
  # end
end
