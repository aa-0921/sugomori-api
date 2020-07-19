class TopController < ApplicationController
  layout 'top'
  def index
    p "TopControllerのcurrent_user"

    p current_user
  end
end
