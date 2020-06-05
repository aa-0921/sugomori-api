# frozen_string_literal: true

class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  private

  def sign_up_params
    # ここに :age, :genderを追記
    params.permit(:name, :email, :uid, :password, :password_confirmation)
  end

  def account_update_params
    params.permit(:name, :email, :uid, :password, :password_confirmation)
  end
end
