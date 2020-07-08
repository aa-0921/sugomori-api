# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  # skip_before_action :verify_signed_out_user

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end

  # ログイン後のリダイレクト先
  def after_sign_in_path_for(resource)
    root_path
  end

  # # ログアウト後のリダイレクト先
  # def after_sign_out_path_for(resource)
  #   p "after_sign_out_path_for"
  #   root_path
  #   # new_user_session_path
  # end

  # ログアウト後のリダイレクト先
  # def sign_out_and_redirect(resource)
  #   root_path
  # end

  # http://localhost:3000/pages/index
  # http://localhost:3000/

  # private
  # def after_sign_out_path_for(resource_or_scope)
  #   root_path
  # end

  # protected

  # def after_sign_out_path_for(scope)
  #   root_path
  # end
end
