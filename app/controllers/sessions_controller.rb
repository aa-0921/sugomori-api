# frozen_string_literal: true

class SessionsController < DeviseTokenAuth::SessionsController
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_in, keys: %i[session email password])
  end

  private

  def sign_in_params
    params.permit(:session, :email, :password)
  end

  def new
    redirect_to root_url unless Rails.env.test?
  end

  def destroy
    super
    session[:keep_signed_out] = true # Set a flag to suppress auto sign in
  end
end
