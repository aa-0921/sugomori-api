FactoryBot.define do
  factory :user do
    sequence(:name) { |n| "#{n}_NAME" }
    sequence(:email) { |n| "#{n}@example.com" }
    sequence(:password) { |n| "#{n}_password" }
  end
end
