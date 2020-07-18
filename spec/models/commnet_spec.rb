RSpec.describe Comment, type: :model do
  let(:user) { create(:user) }
  let(:picpost) { create(:picpost, user_id: user.id) }

  it { should validate_length_of(:content).is_at_most(30) }

  it { should belong_to(:user) }
  it { should belong_to(:picpost) }

  # いいね関連
  it 'userがコメントすると、Likeテーブルにレコードが一つ追加される' do
    expect { picpost.iine(user) }.to change(Like, :count).by(1)
  end
end
