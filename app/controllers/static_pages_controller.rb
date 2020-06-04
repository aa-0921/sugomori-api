# frozen_string_literal: true

class StaticPagesController < ApplicationController
  include ActionController::MimeResponds
  def home
    if logged_in?
      @insta_post = current_user.insta_posts.build

      if params[:q]
        relation = InstaPost.joins(:user)
        @feed_items = relation.merge(User.search_by_keyword(params[:q]))
                              .or(relation.search_by_keyword(params[:q]))
                              .paginate(page: params[:page])
      else
        @feed_items = current_user.feed.paginate(page: params[:page])
      end
    end
    # respond_to do |format|
    #   format.html home.html.erb
    #   # format.xml  { render xml: @users }
    #   # format.json { render json: @users }
    # end
    render file: 'app/views/static_pages/home.html.erb'
  end

  def help; end

  def about; end

  def contact; end
end
