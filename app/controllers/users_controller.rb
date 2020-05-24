# frozen_string_literal: true

class UsersController < ApplicationController
  def index
    users = User.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded users', data: users }
  end

  def show
    render json: { status: 'SUCCESS', message: 'Loaded the user', data: @user }
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: { status: 'SUCCESS', data: user }
    else
      render json: { status: 'ERROR', data: user.errors }
    end
  end

  def destroy
    @user.destroy
    render json: { status: 'SUCCESS', message: 'Deleted the user', data: @user }
  end

  def update
    if @user.update(user_params)
      render json: { status: 'SUCCESS', message: 'Updated the user', data: @user }
    else
      render json: { status: 'SUCCESS', message: 'Not updated', data: @user.errors }
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:title)
  end

  # def index
  #   @user = User.all
  #   render json: @user
  # end

  # def create
  #   @user = User.create(user: params[:user])
  #   render json: @user
  # end

  # def update
  #   @user = User.find(params[:id])
  #   @user.update_attributes(user: params[:user])
  #   render json: @user
  # end

  # def destroy
  #   @user = User.find(params[:id])
  #   if @user.destroy
  #     head :no_content, status: :ok
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end
end
