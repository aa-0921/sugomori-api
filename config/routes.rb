# frozen_string_literal: true

# require 'devise_token_auth'
Rails.application.routes.draw do
  # devise_for :users
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions',
    omniauth_callbacks: "users/omniauth_callbacks",
  }

  get 'initial_data/show'

  # mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
  get 'picposts/following/feed' => 'picposts#feed'

  resources :picposts do
    resources :comments, only: [:create, :index]
  end
  resources :users, except: [:destroy, :update]
  put 'users/follow/:user_id' => 'users#follow'
  put 'users/unfollow/:user_id' => 'users#unfollow'
  # フォローとフォローを外すアクション

  get 'users/follow_list/:user_id' => 'users#follow_list'
  get 'users/follower_list/:user_id' => 'users#follower_list'
  # フォロー・フォロワーの一覧取得

  put 'picposts/like/:picpost_id' => 'likes#create'
  put 'picposts/unlike/:picpost_id' => 'likes#destroy'
  get 'picposts/like_list/:user_id' => 'likes#like_list'

  get 'likes' => 'likes#index'
  get 'likes/:like_id' => 'likes#show'

  get 'users/token/get' => 'users#get_token'

  get 'users/picposts/:user_id' => 'picposts#user_posts'

  root 'top#index'
  get '*unmatched_route' => 'top#index'
end
