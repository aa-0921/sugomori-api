# frozen_string_literal: true

Faker::Config.locale = :ja

User.create!(name: 'Example AdminUser',
             email: 'example_admin-1@example.com',
             uid: 'example_admin-1@example.com',
             password: 'papapa',
             password_confirmation: 'papapa',
             admin: true)

99.times do |n|
  name = Faker::Name.name

  email = "example-#{n + 2}@example.com"

  password = 'password'
  User.create!(name: name,
               email: email,
               uid: email,
               password: password,
               password_confirmation: password)
end

users = User.order(:created_at).take(50)
count = 1

users.each do |user|
  content = Faker::Lorem.sentence(word_count: 3)
  emoji = Faker::Lorem.multibyte

  user.picposts.create!(content: "#{content}#{emoji}")
  # picture: open("db/seeds/images/image-#{count}.jpg")
  count += 1
end

# 20.times do |n|
#   Picpost.create(content: "#{n + 1}-post")
# end

# User.create!(
#   [
#     {
#       name: 'Mary'
#     },
#     {
#       name: 'Alice'
#     },
#     {
#       name: 'John'
#     }
#   ]
# )

# Post.create!(
#   [
#     {
#       content: '勉強'
#     },
#     {
#       content: '映画鑑賞'
#     },
#     {
#       content: '掃除'
#     }
#   ]
# )
