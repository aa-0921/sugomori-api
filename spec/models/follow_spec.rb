RSpec.describe Follow, type: :model, focus: true do
  let(:user) { create(:user) }
  let(:another_user) { create(:user) }
  let(:follow) { build(:follow) }
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

  # preset等のバリデーション関連
  it { is_expected.to validate_presence_of(:followable_id) }
  it { is_expected.to validate_presence_of(:follower_id) }

  it { should belong_to(:followable) }
  it { should belong_to(:follower) }

  # いいね関連
  it 'userがフォローすると、Followテーブルにレコードが一つ追加される' do
    expect { user.follow(another_user) }.to change(Follow, :count).by(1)
  end

  it 'userがフォローを解除するとFollowテーブルからレコードが一つ消える' do
    user.follow(another_user)
    expect { user.unfollow(another_user) }.to change(Follow, :count).by(-1)
  end
end
