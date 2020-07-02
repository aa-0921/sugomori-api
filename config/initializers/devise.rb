
Devise.setup do |config|
  OAUTH_CONFIG = YAML.load_file("#{Rails.root}/config/omniauth.yml")[Rails.env].symbolize_keys!

  # facebook_callback_url = Rails.env.production? ? 'piyopiyo.herokuapp.com/omniauth/facebook/callback' : 'localhost:3000/omniauth/facebook/callback'

  facebook_callback_url = { 'production' => 'sugomori.herokuapp.com/omniauth/facebook/callback' }
  facebook_callback_url.default = 'localhost:3000/omniauth/facebook/callback'
  config.omniauth :facebook, OAUTH_CONFIG[:facebook]['key'], OAUTH_CONFIG[:facebook]['secret'], scope: 'public_profile, email,user_birthday', callback_url: facebook_callback_url[Rails.env]

  github_callback_url = { 'production' => 'sugomori.herokuapp.com/omniauth/github/callback' }
  github_callback_url.default = 'localhost:3000/omniauth/github/callback'
  config.omniauth :github, OAUTH_CONFIG[:github]['key'], OAUTH_CONFIG[:github]['secret'], scope: 'user,public_repo', callback_url: github_callback_url[Rails.env]

  twitter_callback_url = { 'production' => 'sugomori.herokuapp.com/omniauth/twitter/callback' }
  twitter_callback_url.default = 'localhost:3000/omniauth/twitter/callback'
  config.omniauth :twitter, OAUTH_CONFIG[:twitter]['key'], OAUTH_CONFIG[:twitter]['secret'], callback_url: twitter_callback_url[Rails.env]

  # config.omniauth :google_oauth2,
  #                 OAUTH_CONFIG[:google]['key'], OAUTH_CONFIG[:google]['secret'], scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/plus.me https://www.google.com/m8/feeds', name: :google

  # The secret key used by Devise. Devise uses this key to generate
  # random tokens. Changing this key will render invalid all existing
  # confirmation, reset password and unlock tokens in the database.
  # Devise will use the `secret_key_base` as its `secret_key`
  # by default. You can change it below and use your own secret key.
  # config.secret_key = 'd81ce0c5d28b2c0a4ab2a58e2683e6ff16251c6072d0f2f1607891aa3f51a8207ca31c1768aadd80d5796404a83e7eda68bbe7448aedbdda00defcca633aa506'

  # ==> Controller configuration
  # Configure the parent class to the devise controllers.
  # config.parent_controller = 'DeviseController'

  # config.parent_controller = 'Api::V1::ApplicationController'
  # config.parent_controller = 'Api::V1::BaseController'
  config.parent_controller = 'Api::V1::BaseController'

  config.stretches = Rails.env.test? ? 1 : 11

  # ==> Mailer Configuration
  # Configure the e-mail address which will be shown in Devise::Mailer,
  # note that it will be overwritten if you use your own mailer class
  # with default "from" parameter.
  config.mailer_sender = 'please-change-me-at-config-initializers-devise@example.com'

  require 'devise/orm/active_record'

  config.case_insensitive_keys = [:email]

  config.strip_whitespace_keys = [:email]

  config.skip_session_storage = [:http_auth]

  config.stretches = Rails.env.test? ? 1 : 12

  config.reconfirmable = true

  config.expire_all_remember_me_on_sign_out = true

  config.password_length = 6..128

  config.email_regexp = /\A[^@\s]+@[^@\s]+\z/

  config.reset_password_within = 6.hours

  config.scoped_views = true
.
  config.sign_out_via = :get

end
