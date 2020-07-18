RSpec.describe Follow, type: :model do
  let(:user) { create(:user) }
  let(:another_user) { create(:user) }
  let(:follow) { build(:follow) }
  # let(:unfollow) { build(:unfollow) }

  # let(:follow) { create(:follow, follower_id: user.id, followable_id: another_user.id) }

  # before do
  #   user.follow(another_user)
  # end

  #   it
  #   Follow.all
  # end

  it 'test' do
    # f = Follow.new(another_user)
    user.follow(another_user)

    # f.save
  end

  # present等のバリデーション関連
  it "follower_idが入っていなければ無効である" do
    follow = Follow.new(
      follower_id: nil,
      followable_id: 1
    )
    expect(follow).to be_invalid
  end

  it "followable_idが入っていなければ無効である" do
    follow = Follow.new(
      follower_id: 1,
      followable_id: nil
    )
    expect(follow).to be_invalid
  end

  # it "followable_idが入っていなければ無効である" do
  #   follow = Follow.new(
  #     follower_id: 1,
  #     followable_id: 2
  #   )
  #   expect(validate_presence_of(:followable_id)).to eq true
  # end

  # it { is_expected.to validate_presence_of(:followable_id) }
  # it { is_expected.to validate_presence_of(:follower_id) }

  it { should belong_to(:followable) }
  it { should belong_to(:follower) }

  it 'userがフォローすると、Followテーブルにレコードが一つ追加される' do
    follow.save
    p follow
    expect { user.follow(another_user) }.to change(Follow, :count).by(1)
  end

  it 'userがフォローを解除するとFollowテーブルからレコードが一つ消える' do
    user.follow(another_user)
    expect { user.stop_following(another_user) }.to change(Follow, :count).by(-1)
  end
end
