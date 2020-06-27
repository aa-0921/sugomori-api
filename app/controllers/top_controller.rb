class TopController < ApplicationController
  before_action :authenticate_user!

  def get
    head :no_content
  end

  def post
    render json: { text: params[:top][:text] }
  end
end
