# frozen_string_literal: true

require 'devise_token_auth'
Rails.application.routes.draw do
  mount_devise_token_auth_for User.name,
                              at: 'api/v1/auth',
                              controllers: {
                                registrations: 'api/v1/auth/registrations'
                                # omniauth_callbacks: 'omniauth_callbacks',
                                # sessions: 'sessions'
                              }

  devise_for :User,
             #  at: 'auth',
             controllers: {
               omniauth_callbacks: 'omniauth_callbacks',
               sessions: 'sessions'
             }

  # devise_for :user, controllers: {
  #   omniauth_callbacks: “omniauth_callbacks”,
  #   sessions: “sessions”
  # }
  # mount_devise_token_auth_for User.name, at: 'api/v1/auth', controllers: {
  #   registrations: 'api/v1/auth/registrations',
  #   omniauth_callbacks: 'omniauth_callbacks',
  #   sessions: 'sessions'
  # }

  # devise_for :user, controllers: {
  #   omniauth_callbacks: 'omniauth_callbacks',
  #   sessions: 'sessions'
  # }
  # resources :users
  resources :picposts
end
