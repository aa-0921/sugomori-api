# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :set_user, only: %i(show update destroy), except: [:get_token]
  before_action :authenticate_user!, only: %i(edit update)

  def get_token
    render json: { status: 'SUCCESS', message: 'get token' }
  end

  def index
    users = User.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded users', data: users }
  end

  def show
    render json: { status: 'SUCCESS', message: 'Loaded the user', data: @user }
  end

  def follow
    json_request = JSON.parse(request.body.read)
    current_user_id = json_request['current_user_id'].to_i
    current_user = User.find_by(id: current_user_id)
    @user = User.find(params[:user_id])

    if current_user.follow(@user)
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR' }
    end
  end
  # フォローする

  def unfollow
    json_request = JSON.parse(request.body.read)
    current_user_id = json_request['current_user_id'].to_i
    current_user = User.find_by(id: current_user_id)
    @user = User.find(params[:user_id])

    if current_user.stop_following(@user)
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR' }
    end
  end
  # フォローを外す

  def follow_list
    @user = User.find(params[:user_id])
    render json: { status: 'SUCCESS', data: @user.all_following }
  end
  # フォローしてる人の一覧ページ

  def follower_list
    @user = User.find(params[:user_id])
  end
  # フォロワーの一覧ページ

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    p params
    params.require(:user).permit(:name, :email, :password,
                                 :password_confirmation)
  end

  # def logged_in_user
  #   return if logged_in?

  #   store_location
  #   # flash[:danger] = 'Please log in.'
  #   redirect_to login_url
  # end

  # def correct_user
  #   @user = User.find(params[:id])
  #   redirect_to(root_url) unless current_user?(@user)
  # end

  # def admin_user
  #   redirect_to(root_url) unless current_user.admin?
  # end
end
