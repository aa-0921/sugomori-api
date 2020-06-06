# frozen_string_literal: true
# # frozen_string_literal: true

# class ApplicationController < ActionController::API
#   # include ActionController::RequestForgeryProtection
#   # protect_from_forgeryo
#   # protect_from_forgery with: :null_session
#   # protect_from_forgery with: :exception

#   # protect_from_forgery unless: -> { request.format.json? }
#   # include DeviseTokenAuth::Concerns::SetUserByToken
#   include SessionsHelper
#   # skip_before_action :verify_authenticity_token
#   # , raise: false, if: :devise_controller?
#   before_filter :set_host

#   def set_host
#     Rails.application.routes.default_url_options[:host] = request.host_with_port
#   end
# end
