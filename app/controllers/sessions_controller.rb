# frozen_string_literal: true

# class SessionsController < DeviseTokenAuth::SessionsController
class SessionsController < Devise::SessionsController
  # before_action :configure_permitted_parameters, if: :devise_controller?
  # before_action :authenticate_user!, except: [:new, :create]

  # respond_to :json

  # skip_before_action :verify_authenticity_token, only: :create

  # def create
  #   super
  #   # bypass_sign_in(user)
  #   p "current_userの中身"
  #   # current_user    # returns nil
  #   p current_user    # returns nil
  # end
  # def create
  #   @user = current_user
  #   super do
  #     if request.format.json?
  #       render(json: {
  #                'status' => 'ok',
  #                'csrf_token' => form_authenticity_token,
  #                'result' => {
  #                  'user' => {
  #                    'id' => @user.id,
  #                    'email' => @user.email
  #                  }
  #                }
  #              }) && return
  #     end
  #   end
  # end

  # def destroy
  #   super do
  #     if request.format.json?
  #       render json: {
  #         'csrf_param' => request_forgery_protection_token,
  #         'csrf_token' => form_authenticity_token
  #       }
  #       return
  #     end
  #   end
  # end

  # protected

  # def configure_permitted_parameters
  #   devise_parameter_sanitizer.permit(:sign_in, keys: %i[session email password])
  # end

  # private

  # def sign_in_params
  #   params.permit(:session, :email, :password)
  # end

  # def new
  #   redirect_to root_url unless Rails.env.test?
  # end

  # def destroy
  #   super
  #   session[:keep_signed_out] = true # Set a flag to suppress auto sign in
  # end
end
