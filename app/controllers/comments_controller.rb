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

  private

  def comment_params
    params.permit(:content, :picpost_id)
  end
end
