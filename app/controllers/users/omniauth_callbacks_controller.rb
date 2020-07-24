# frozen_string_literal: true

class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    # Facebook上でメール使用を許可しているかの分岐
    if request.env['omniauth.auth'].info.email.blank?
      redirect_to '/users/auth/facebook?auth_type=rerequest&scope=email'
    end

    # User.from_omniauthはModel側で実装
    user = User.from_omniauth(request.env['omniauth.auth'])

    # すでにuserが登録済みかの判定
    if user
      # 登録済みならログイン
      sign_in_and_redirect user, event: :authentication
      set_flash_message(:notice, :success, kind: "Facebook") if is_navigational_format?
    else
      # 新規登録用にセッションに必要情報を格納
      # user.skip_confirmation!
      # user.save!
      if (data = request.env['omniauth.auth'])
        session['devise.omniauth_data'] = {
          name: data['info']['name'],
          email: data['info']['email'],
          provider: data['provider'],
          uid: data['uid'],
        }
      end
      p data['info']['email']
      # redirect_to new_user_registration_url
      redirect_to edit_user_registration_path
      # set_flash_message(:notice, 'SNSログインのため、空欄を入力して下さい')
      # set_flash_message(:notice, :need_input)
      flash.now[:notice] = 'SNSログインのため、空欄を入力して下さい'
    end
  end

  def twitter
    user = User.from_omniauth(request.env['omniauth.auth'])
    if user
      sign_in_and_redirect user, event: :authentication
      set_flash_message(:notice, :success, kind: "Twitter") if is_navigational_format?
    else
      if (data = request.env['omniauth.auth'])
        session['devise.omniauth_data'] = {
          email: data['info']['email'],
          provider: data['provider'],
          uid: data['uid'],
        }
      end
      # redirect_to new_user_registration_url
      redirect_to edit_user_registration_path
      flash.now[:notice] = 'SNSログインのため、空欄を入力して下さい'
      # set_flash_message(:notice, :need_input)

    end
  end

  def github
    user = User.from_omniauth(request.env['omniauth.auth'])
    if user
      sign_in_and_redirect user, event: :authentication
      set_flash_message(:notice, :success, kind: "GitHub") if is_navigational_format?
    else
      if (data = request.env['omniauth.auth'])
        session['devise.omniauth_data'] = {
          email: data['info']['email'],
          provider: data['provider'],
          uid: data['uid'],
        }
      end
      # redirect_to new_user_registration_url
      redirect_to edit_user_registration_path
      flash.now[:notice] = 'SNSログインのため、空欄を入力して下さい'
      # set_flash_message(:notice, :need_input)

    end
  end

  def failure
    redirect_to root_path
  end
end
