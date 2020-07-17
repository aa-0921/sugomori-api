RSpec.describe Picpost, type: :model, focus: true do
  let(:picpost) { build(:picpost) }

  it "投稿に写真がなければ無効" do
    picpost = Picpost.create(picture: nil)
    expect(picpost.valid?).to eq(false)
  end

  it "ユーザーIDがなければ投稿は無効" do
    picpost = Picpost.create(user_id: nil)
    expect(picpost.valid?).to eq(false)
  end

  describe 'バリデーション' do
    it 'picture,user_idに値があれば成功' do
      expect(picpost.valid?).to eq(true)
    end

    it 'pictureが空の場合失敗' do
      picpost.picture = ''
      expect(picpost.valid?).to eq(false)
    end

    it 'user_idが空の場合失敗' do
      picpost.user_id = ''
      expect(picpost.valid?).to eq(false)
    end

    it { is_expected.to have_many(:comments) }
    it { is_expected.to have_many(:likes) }
  end
end
