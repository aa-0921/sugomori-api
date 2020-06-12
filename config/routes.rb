# frozen_string_literal: true

require 'devise_token_auth'
Rails.application.routes.draw do
  mount_devise_token_auth_for User.name,
                              at: 'api/v1/auth',
                              controllers: {
                                registrations: 'api/v1/auth/registrations',
                                sessions: 'sessions'
                              }

  devise_for :User,
             controllers: {
               omniauth_callbacks: 'omniauth_callbacks'
             }


  resources :picposts
end
