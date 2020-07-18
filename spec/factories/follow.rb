FactoryBot.define do
  factory :follow do
    sequence(:follower_id) { |n| n }
    sequence(:followable_id) { |n| n }
  end
end
