FactoryBot.define do
  factory :picpost do
    sequence(:picture) { |n| "#{n}_picture" }
    sequence(:user_id) { |n| n }
    sequence(:content) { |n| "#{n}_content" }
  end
end
