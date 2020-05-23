class PostsController < ApplicationController
  # frozen_string_literal: true

  def index
    @post = Post.all
    render json: @post
  end

  def create
    @post = Post.create(post: params[:post])
    render json: @post
  end

  def update
    @post = Post.find(params[:id])
    @post.update_attributes(post: params[:post])
    render json: @post
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      head :no_content, status: :ok
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end
end
