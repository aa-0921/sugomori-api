class InitialDataController < ApplicationController
  # before_action :authenticate_user!, except: [:show]
  before_action :authenticate_user!

  def show
    p "current_userの内容"
    p current_user
    # @current_user = current_user
    render json: { status: 'SUCCESS', message: 'Loaded the current_user', data: current_user }
    # json.set! :current_user, current_user
  end
end
