require 'rails_helper'

RSpec.describe User, type: :model do
  before do
    @user = build(:user)
  end

  describe 'バリデーション' do
    it 'nameとemailどちらも値が設定されている' do
      expect(@user.valid?).to eq(true)
    end

    it 'nameが空の場合失敗' do
      @user.name = ''
      expect(@user.valid?).to eq(false)
    end

    it 'emailが空の場合失敗' do
      @user.email = ''
      expect(@user.valid?).to eq(false)
    end
  end
end
