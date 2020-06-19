# frozen_string_literal: true

class PicpostsController < ApplicationController
  before_action :set_picpost, only: %i[show update destroy]

  def create
    picpost = Picpost.create!(picpost_params)

    p "picpostの内容"
    p picpost
    if picpost.save
      bucket = Aws::S3::Resource.new(
        :region => 'ap-northeast-1',
        :access_key_id => ENV['AWS_ACCCES_KEY'],
        :secret_access_key => ENV['AWS_ACCCES_SECRET_KEY'],
      ).bucket('sugomori-app') 

    bucket.object("picpost_id_#{picpost.id}_post_image").put(:body => params[:picpost_image])
    # picpost_image？？
      render json: { status: 'SUCCESS', data: picpost }
    else
      render json: { status: 'ERROR', data: picpost.errors }
    end
  end


  
  # def create
  #   picpost = Picpost.new(picpost_params)
  #   if picpost.save
  #     render json: { status: 'SUCCESS', data: picpost }
  #   else
  #     render json: { status: 'ERROR', data: picpost.errors }
  #   end
  # end
  
  def index
    picposts = Picpost.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded posts', data: picposts }
  end

  def show
    render json: { status: 'SUCCESS', message: 'Loaded the post', data: @picpost }
  end



  def destroy
    @picpost.destroy
    render json: { status: 'SUCCESS', message: 'Deleted the picpost', data: @picpost }
  end

  def update
    if @picpost.update(post_params)
      render json: { status: 'SUCCESS', message: 'Updated the picpost', data: @picpost }
    else
      render json: { status: 'SUCCESS', message: 'Not updated', data: @picpost.errors }
    end
  end

  private

  def set_picpost
    @picpost = Picpost.find(params[:id])
  end

  def picpost_params
    # params.require(:picpost).permit(:content, :picture)
    params.permit(:content, :picture, :user_id, :file)
  end

  # def index
  #   @post = Post.all
  #   render json: @post
  # end

  # def create
  #   @post = Post.create(post: params[:post])
  #   render json: @post
  # end

  # def update
  #   @post = Post.find(params[:id])
  #   @post.update_attributes(post: params[:post])
  #   render json: @post
  # end

  # def destroy
  #   @post = Post.find(params[:id])
  #   if @post.destroy
  #     head :no_content, status: :ok
  #   else
  #     render json: @post.errors, status: :unprocessable_entity
  #   end
  # end
end