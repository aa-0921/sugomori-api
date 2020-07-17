FactoryBot.define do
  factory :like do
    sequence(:user_id) { |n| n }
    sequence(:picpost_id) { |n| n }
  end
end
