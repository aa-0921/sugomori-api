# frozen_string_literal: true

require 'devise_token_auth'
Rails.application.routes.draw do
  get 'likes/create'
  get 'likes/destroy'
  devise_for :User
  #            controllers: {
  #              omniauth_callbacks: 'omniauth_callbacks'
  #            }

  mount_devise_token_auth_for 'User',
                              at: 'api/v1/auth'
  # controllers: {
  #   registrations: 'api/v1/auth/registrations',
  #   sessions: 'api/v1/auth/sessions'
  #   omniauth_callbacks: 'omniauth_callbacks'
  # }

  resources :picposts
  resources :users
  put 'users/follow/:user_id' => 'users#follow'
  put 'users/unfollow/:user_id' => 'users#unfollow'
  # フォローとフォローを外すアクション

  get 'users/follow_list/:user_id' => 'users#follow_list'
  get 'users/follower_list/:user_id' => 'users#follower_list'
  # フォロー・フォロワーの一覧ページ

  resources :likes, only: [:create, :destroy]
end
