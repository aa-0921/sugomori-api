RSpec.describe Picpost, type: :model, focus: true do
  let(:user) { create(:user) }
  let(:picpost) { create(:picpost, user_id: user.id) }

  # preset等のバリデーション関連
  it { is_expected.to validate_presence_of(:picture) }
  it { is_expected.to validate_presence_of(:user_id) }
  it { should validate_length_of(:content).is_at_most(30) }

  # has_many関連
  it { is_expected.to have_many(:comments) }
  it { is_expected.to have_many(:likes) }

  it 'userが投稿すると、Likeテーブルにレコードが一つ追加される' do
    # user.save
    # picpost.save
    # user = User.create(name: 'like_test', email: 'tom@example.com')
    # user = User.create(id: 1)
    # user.save

    # picpost = Picpost.create(user_id: 1, picture: 'test_picture')
    # picpost.save

    expect { picpost.iine(user) }.to change(Like, :count).by(1)
  end
end
