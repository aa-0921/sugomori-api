FactoryBot.define do
  factory :follow do
    sequence(:id) { |n| n }
    sequence(:follower_id) { |n| n }
    sequence(:followable_id) { |n| n }
  end
end
