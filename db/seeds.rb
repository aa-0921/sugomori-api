# frozen_string_literal: true

# Faker::Config.locale = :ja

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

  user.picposts.create!(content: "#{content}#{emoji}",
                        picture: "#{count}-test-picture",
                        user_id: "#{count}-test-user_id")
  # picture: open("db/seeds/images/image-#{count}.jpg")
  count += 1
end


all_users = User.all

following = all_users[25..50]
followers = all_users[2..24]
following.each { |followed| first_user.follow(followed) }
followers.each { |follower| follower.follow(first_user) }

picposts = Picpost.all




like_users = users[0..25]
like_posts = picposts[0..25]

like_users.each do |like_user|
  like_posts.each do |like_post|
    like_post.iine(like_user) 
  end
end
