# frozen_string_literal: true

class PicpostsController < ApplicationController
  before_action :set_picpost, only: %i(show update destroy)
  before_action :authenticate_user!, only: [:create, :destroy]

  def user_posts
    page_user = User.find_by(id: params[:user_id])
    p "page_userの内容"
    p page_user
    @user_posts = page_user.picposts

    p "@user_postsの内容"
    p @user_posts

    render json: { status: 'SUCCESS', message: 'Loaded user_posts', data: @user_posts }
  end

  def create
    p "current_userの内容"
    p current_user
    picpost = Picpost.create!(picpost_params)

    if picpost.save
       uri = URI.parse(params[:picture])
      # fix_param = params[:picture].slice!(23..-1)
      fix_param = params[:picture].gsub!(/^data.*base64,/, "")
p "params[:picture].class"
p params[:picture].class

      p "fix_param"
      p fix_param
      fileExtension = extension(uri)

      p "fileExtension"
      p fileExtension
      bin = Base64.decode64(fix_param)

      bucket = Aws::S3::Resource.new(
        :region => 'ap-northeast-1',
        :access_key_id => ENV['AWS_ACCCES_KEY'],
        :secret_access_key => ENV['AWS_ACCCES_SECRET_KEY'],
      ).bucket('sugomori-app')

      bucket.object("picpost_id_#{picpost.id}_post_image#{fileExtension}").put(:body => bin)
      picpost.picture = bucket.object("picpost_id_#{picpost.id}_post_image#{fileExtension}").public_url
picpost.extension = fileExtension
p "picpost.extension"
p picpost.extension
      render json: { status: 'SUCCESS', data: picpost }
    else
      render json: { status: 'ERROR', data: picpost.errors }
    end
  end

  def index
    picposts = Picpost.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded posts', data: picposts }
  end

  def feed
    p "picpostのfeed"
    p current_user
    p "picpostのuser_following_ids"
    p user_following_ids = current_user.all_following.pluck(:id)
    feed_posts = Picpost.where("user_id IN (?) OR user_id = ?", user_following_ids, current_user.id)
    render json: { status: 'SUCCESS', data: feed_posts }
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

  def extension(uri)
    opaque = uri.opaque
    mime_type = opaque[0, opaque.index(";")]
    p "mime_type"
    p mime_type
    case mime_type
    when "image/png" then
      ".png"
    when "image/jpeg" then
      ".jpg"
    when "image/gif" then
      ".gif"
    else
      raise "Unsupport Content-Type"
    end
  end

  def set_picpost
    @picpost = Picpost.find(params[:id])
  end

  def picpost_params
    # params.require(:picpost).permit(:content, :picture)
    params.permit(:content, :picture, :user_id, :file)
  end
end
