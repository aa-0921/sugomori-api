RSpec.describe Picpost, type: :model, focus: true do
  let(:picpost) { build(:picpost) }

  it { is_expected.to validate_presence_of(:picture) }
  it { is_expected.to validate_presence_of(:user_id) }
  it { should validate_length_of(:content).is_at_most(30) }
  it { is_expected.to have_many(:comments) }
  it { is_expected.to have_many(:likes) }
end
