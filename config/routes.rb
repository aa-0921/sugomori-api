# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#home'

  get 'home/index'
  get 'home/show'
  # root to: 'home#index'

  get 'sessions/new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users
  resources :posts
end
