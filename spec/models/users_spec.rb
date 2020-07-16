require 'rails_helper'

RSpec.describe User, type: :model do
  # before do
  # @user = build(:user)
  # end
  let(:user) { FactoryBot.build(:user) }
  # let(:another_user) { FactoryBot.build(:user) }

  describe 'バリデーション' do
    it 'name,email,passwordに値が設定されている' do
      expect(user.valid?).to eq(true)
    end

    it 'nameが空の場合失敗' do
      user.name = ''
      expect(user.valid?).to eq(false)
    end

    it 'emailが空の場合失敗' do
      user.email = ''
      expect(user.valid?).to eq(false)
    end

    it 'passwordが空の場合失敗' do
      user.password = ''
      expect(user.valid?).to eq(false)
    end
  end
end
