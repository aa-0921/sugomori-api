class LikesController < ApplicationController
  # 指定の投稿に自分のいいねを追加
  def create
    json_request = JSON.parse(request.body.read)
    current_user_id = json_request['current_user_id'].to_i
    current_user = User.find_by(id: current_user_id)
    @picpost = Picpost.find(params[:picpost_id])

    if @picpost.iine(current_user)
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR' }
    end
  end

  # 指定の投稿から自分のいいねを削除
  def destroy
    json_request = JSON.parse(request.body.read)
    current_user_id = json_request['current_user_id'].to_i
    current_user = User.find_by(id: current_user_id)

    # @picpost = Like.find(params[:id]).picpost
    @picpost = Picpost.find(params[:picpost_id])

    if @picpost.uniine(current_user)
      render json: { status: 'SUCCESS' }
    else
      render json: { status: 'ERROR' }
    end
  end

  def like_list
    @user = User.find(params[:user_id])
    current_user_likes = @user.likes.all
    render json: { status: 'SUCCESS', data: current_user_likes }
  end
  # フォローしてる人の一覧ページ

  def index
    likes = Like.all
    render json: { status: 'SUCCESS', data: likes }
  end

  def show
    like = Like.find(params[:id])
    render json: { status: 'SUCCESS', data: like }
  end
end
