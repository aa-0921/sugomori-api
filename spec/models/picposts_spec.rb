RSpec.describe Picpost, type: :model, focus: true do
  let(:user) { create(:user) }
  let(:picpost) { create(:picpost) }

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
    user = User.create
    picpost = Picpost.create
    picpost.save

    expect { picpost.iine(user) }.to change(Like, :count).by(1)
  end
end
