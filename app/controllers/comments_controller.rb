class CommentsController < ApplicationController
  def create
    @comment = current_user.comments.new(comment_params)
    if @comment.save
      render json: { status: 'SUCCESS', data: @comment }
    else
      render json: { status: 'ERROR', data: @comment.errors }

    end
  end

  def index
    post = Picpost.find(params[:picpost_id])
    post_comments = post.comments.order(created_at: :desc)
    render json: { status: 'SUCCESS', data: post_comments }
  end

  private

  def comment_params
    params.permit(:content, :picpost_id, :user_name)
  end
end
