# frozen_string_literal: true

# class Api::V1::Auth::SessionsController < DeviseTokenAuth::SessionsController
class Api::V1::Auth::SessionsController < Devise::SessionsController
  # before_action :configure_permitted_parameters, if: :devise_controller?
  # include ActionController::RequestForgeryProtection
  # before_action :authenticate_user!, except: [:create]
  # before_action :authenticate_User!
  # include Devise::Controllers::Rememberable
  # protect_from_forgery with: :exception
  # protect_from_forgery with: :null_session
  skip_before_action :require_no_authentication, only: [:create]
  # respond_to :json

  # skip_before_action :verify_authenticity_token, only: :create

  # after_action :set_csrf_token_header

  # def set_csrf_token_header
  #   p "form_authenticity_tokenの内容(application_controller.rb)"
  #   p form_authenticity_token

  #   response.set_header("X-CSRF-Token", form_authenticity_token)
  # end

  def create
    p "sessions_controller.rbのcreate"
    json_request = JSON.parse(request.body.read)

    p "json_requestの内容"
    p json_request
    super
    json_request = JSON.parse(request.body.read)
    p json_request
    # p "form_authenticity_tokenの内容(sessions_controller.rb)"
    # p form_authenticity_token
    # # bypass_sign_in(user)
    # p "current_userの中身"
    # p current_user # returns nil
    # p "JSON.parse(request.headers)"
    # # p JSON.parse(request.headers)
    # # json_request = JSON.parse(request.headers.read)
    # # json_request = JSON.parse(request.headers.get('X-CSRF-Token'))

    # p "json_request('X-CSRF-Token')の内容（sessions_controller.rb）"
  end

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
