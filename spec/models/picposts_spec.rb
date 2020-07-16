# RSpec.describe Picpost, type: :model do
#   let(:user) { FactoryBot.build(:user) }
#   let(:another_user) { FactoryBot.build(:user) }

#   it "has a valid factory of user" do
#     expect(user).to be_valid
#   end
#   it "has a valid factory of another_user" do
#     expect(another_user).to be_valid
#   end

#   # 投稿に写真、ユーザーIDがあれば有効
#   it "is valid with picture, content and user_id" do
#     picpost = user.picposts.build(
#       picture: "test_picture",
#       user_id: 1
#     )
#     expect(picpost).to be_valid
#   end

#   # 投稿に写真がなければ無効
#   it "is invalid without picture" do
#     picpost = picpost.create(picture: nil)
#     picpost.valid?
#     expect(picpost.errors[:picture]).to include("can't be blank")
#   end

#   # ユーザーIDがなければ投稿は無効
#   it "is invalid without user_id" do
#     picpost = picpost.create(user_id: nil)
#     picpost.valid?
#     expect(picpost.errors[:user_id]).to include("can't be blank")
#   end

#   # 同一のユーザーは同一の記事の題名、本文、外部キーを有する記事を作成できない。
#   it "does not allow a single user to have picposts which has the same picture" do
#     user.picposts.create(
#       picture: "test_picture",
#       content: "test_content",
#       user_id: 1
#     )
#     picpost = user.picposts.build(
#       picture: "test_picture",
#       content: "test_content",
#       user_id: 1
#     )
#     picpost.valid?
#     expect(picpost.errors[:picture]).to include("has already been taken")
#   end
# end
