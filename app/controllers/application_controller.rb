# frozen_string_literal: true

class ApplicationController < ActionController::API
  # include DeviseTokenAuth::Concerns::SetUserByToken
  include SessionsHelper
before_action :authenticate_admin!
  # protect_from_forgery with: :exception
  # before_filter :set_host # この行を追加

  # def set_host
  #   Rails.application.routes.default_url_options[:host] = request.host_with_port
  # end
end
