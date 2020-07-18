FactoryBot.define do
  factory :comment do
    sequence(:content) { |n| "#{n}_content" }
    sequence(:user_name) { |n| "#{n}_user_name" }
    sequence(:user_id) { |n| n }
    sequence(:picpost_id) { |n| n }
  end
end
