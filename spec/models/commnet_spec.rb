RSpec.describe Comment, type: :model do
  let(:user) { create(:user) }
  let(:comment) { create(:comment, user_id: user.id) }

  it { is_expected.to validate_presence_of(:content) }
  it { is_expected.to validate_presence_of(:user_id) }
  it { is_expected.to validate_presence_of(:picpost_id) }
  it { is_expected.to validate_presence_of(:user_name) }

  it { should validate_length_of(:content).is_at_most(30) }

  it { should belong_to(:user) }
  it { should belong_to(:picpost) }
end
