class CommentsController < ApplicationController
  def create
    @comment = current_user.comments.new(comment_params)
    if @comment.save
      # redirect_back(fallback_location: root_path) # コメント送信後は、一つ前のページへリダイレクトさせる。
      render json: { status: 'SUCCESS', data: @comment }
    else
      # redirect_back(fallback_location: root_path)  # 同上
      render json: { status: 'ERROR', data: @comment.errors }

    end
  end

  def index
    post = Picpost.find(params[:picpost_id])
    post_comments = post.comments
    render json: { status: 'SUCCESS', data: post_comments }
  end

  private

  def comment_params
    params.permit(:content, :picpost_id)
  end
end
