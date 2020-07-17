require 'rails_helper'

RSpec.describe Like, type: :model do
  let(:like) { build(:like) }

  # present等のバリデーション関連
  it { is_expected.to validate_presence_of(:user_id) }
  it { is_expected.to validate_presence_of(:picpost_id) }

  it { should belong_to(:user) }
  it { should belong_to(:picpost) }
end
