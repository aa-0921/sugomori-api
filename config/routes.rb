# frozen_string_literal: true

require 'devise_token_auth'
Rails.application.routes.draw do
  resources :users
  resources :picposts
  # devise_for :users

  # token auth routes available at /api/v1/auth
  namespace :api do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end

  # mount_devise_token_auth_for 'User', at: 'auth'
  # root 'static_pages#home'

  # get 'home/index'
  # get 'home/show'
  # # root to: 'home#index'

  # get 'sessions/new'
  # post '/login', to: 'sessions#create'
  # delete '/logout', to: 'sessions#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
