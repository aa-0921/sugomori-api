RSpec.describe Picpost, type: :model, focus: true do
  let(:user) { create(:user) }
  let(:picpost) { create(:picpost) }

  it { is_expected.to validate_presence_of(:picture) }
  it { is_expected.to validate_presence_of(:user_id) }
  it { should validate_length_of(:content).is_at_most(30) }

  it { is_expected.to have_many(:comments) }
  it { is_expected.to have_many(:likes) }

  it 'userが投稿すると、Likeテーブルにレコードが一つ追加される' do
    picpost.save
    expect { picpost.iine(user) }.to change(Like, :count).by(1)
  end
end
