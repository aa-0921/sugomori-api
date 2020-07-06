class InitialDataController < ApplicationController
  before_action :authenticate_user
  def show
    render json: { status: 'SUCCESS', message: 'Loaded the current_user', data: current_user }
  end
end
