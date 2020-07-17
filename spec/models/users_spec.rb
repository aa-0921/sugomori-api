require 'rails_helper'

RSpec.describe User, type: :model do
  # before do
  # @user = build(:user)
  # end
  let(:user) { build(:user) }
  # let(:another_user) { FactoryBot.build(:user) }

  # preset等のバリデーション関連
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to validate_presence_of(:password) }

  it { should validate_length_of(:name).is_at_most(30) }
  it { should validate_length_of(:email).is_at_most(255) }
  it { should validate_length_of(:password).is_at_least(6) }

  it { is_expected.to have_many(:picposts).dependent(:destroy) }
  it { is_expected.to have_many(:comments).dependent(:destroy) }
  it { is_expected.to have_many(:likes).dependent(:destroy) }
end
