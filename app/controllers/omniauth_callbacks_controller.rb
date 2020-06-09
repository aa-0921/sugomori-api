# frozen_string_literal: true

require 'devise_token_auth'

class OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
  def redirect_callbacks
    devise_mapping = getting_devise_mapping
    redirect_route = get_redirect_route(devise_mapping)

    session['dta.omniauth.auth'] = request.env['omniauth.auth'].except('extra')
    session['dta.omniauth.params'] = request.env['omniauth.params']
    redirect_to redirect_route
  end

  def omniauth_success
    gets_resource_from_auth_hash
    # create_token_info
    set_token_on_resource
    create_auth_params

    sign_in(:user, @resource, store: false, bypass: false)

    # 動作確認用にユーザ情報を保存できたらjsonをそのまま返す処理
    if @resource.save!
      # update_token_authをつけることでレスポンスヘッダーに認証情報を付与できる。
      # update_token_authをつけることでレスポンスヘッダーに認証情報を付与できる。
      update_auth_header
      yield @resource if block_given?
      render json: @resource, status: :ok
    else
      render json: { message: 'failed to login' }, status: 500
    end

    # 本実装時はこちらを使用する
    # @resource.save!

    # update_auth_header # これは自分で追加する
    # yield @resource if block_given?

    # render_data_or_redirect('deliverCredentials', @auth_params.as_json, @resource.as_json)
  end

  protected

  def gets_resource_from_auth_hash
    @resource = resource_class.where(
      uid: auth_hash['uid'],
      provider: auth_hash['provider']
    ).first_or_initialize

    @oauth_registration = true if @resource.new_record?

    assign_provider_attrs(@resource, auth_hash)

    extra_params = whitelisted_params
    @resource.assign_attributes(extra_params) if extra_params

    @resource
  end

  def facebook
    basic_action
  end

  def github
    basic_action
  end

  def twitter
    basic_action
  end
  # def google; basic_action; end

  private

  def basic_action
    @omniauth = request.env['omniauth.auth']
    if @omniauth.present?
      @profile = SocialProfile.where(provider: @omniauth['provider'], uid: @omniauth['uid']).first
      unless @profile
        @profile = SocialProfile.where(provider: @omniauth['provider'], uid: @omniauth['uid']).new
        @profile.user = current_user || User.create!(name: @omniauth['name'])
        @profile.save!
      end
      if current_user
        raise 'user is not identical' if current_user != @profile.user
      else
        sign_in(:user, @profile.user)
      end
      @profile.set_values(@omniauth)
    end
    render :close, layout: false
  end

  def get_redirect_route(devise_mapping)
    path = "#{Devise.mappings[devise_mapping.to_sym].fullpath}/#{params[:provider]}/callback"
    klass = request.scheme == 'https' ? URI::HTTPS : URI::HTTP
    klass.build(host: request.host, port: request.port, path: path).to_s
  end

  def getting_devise_mapping
    [request.env['omniauth.params']['namespace_name'], request.env['omniauth.params']['resource_class'].underscore.tr('/', '_')].compact.join('_')
  rescue NoMethodError
    default_devise_mapping
  end

  def default_devise_mapping
    raise NotImplementedError, 'no default_devise_mapping set'
  end

  def authenticate_api_user!
    false
  end
end
