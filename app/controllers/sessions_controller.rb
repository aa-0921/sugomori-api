# frozen_string_literal: true

class SessionsController < DeviseTokenAuth::SessionsController
  # class SessionsController < Devise::SessionsController
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_in, keys: [:name][:session])
  end

  private

  def sign_in_params
    p params
    params.permit(:session)
    # params.permit(:session: { email: xxx, password: yyyy } )
  end

  # def account_update_params
  #   params.permit(:name, :email, :uid, :password, :password_confirmation, :registration)
  # end

  def new
    redirect_to root_url unless Rails.env.test?
  end

  def destroy
    super
    session[:keep_signed_out] = true # Set a flag to suppress auto sign in
  end
end
# class SessionsController < ApplicationController
# def new; end

# def create
#   user = User.find_by(email: params[:session][:email].downcase)
#   if user&.authenticate(params[:session][:password])
#     log_in user
#     params[:session][:remember_me] == '1' ? remember(user) : forget(user)
#     redirect_back_or user
#   else
#     # ログイン失敗のメッセージ
#     flash.now[:danger] = 'Invalid email/password combination'
#     render 'new'
#   end
# end

# def destroy
#   log_out if logged_in?
#   # redirect_to root_url React側で書く
# end
# end
