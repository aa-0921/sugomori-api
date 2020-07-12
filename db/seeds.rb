# frozen_string_literal: true

# Faker::Config.locale = :ja

User.create!(name: 'Example User',
             email: 'example-1@example.com',
            #  uid: 'example_admin-1@example.com',
             password: 'ababab',
             password_confirmation: 'ababab',
            #  サインアップ認証パスの為追加。
             confirmed_at:'Sun, 12 Jul 2020 07:33:13 UTC +00:00')

99.times do |n|
  name = Faker::Name.name

  email = "example-#{n + 2}@example.com"

  password = 'password'
  User.create!(name: name,
               email: email,
              #  uid: email,
               password: password,
               password_confirmation: password)
end

users = User.order(:created_at).take(50)
img_srcs =[
  "https://images.unsplash.com/photo-1522444195799-478538b28823?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1510563800743-aed236490d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1471560090527-d1af5e4e6eb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1488117382278-329ccc22eecb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1509660933844-6910e12765a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1513807182286-b1ddd7ab204b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1533499966477-9333968a4e28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1522198648249-0657d7ff242a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1492139059069-0413793f4c1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1528071542637-2ca6095eaab4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1514371879740-2e7d2068f502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1514237487632-b60bc844a47d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1558769132-92e717d613cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1540996925740-9d984974af69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1579494376672-357f5e4f0cd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1545398913-485c93378c23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
  "https://images.unsplash.com/photo-1563194441-273620df9301?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
]
count = 1

# 3.times {
users.each do |user|
  content = Faker::Lorem.sentence(word_count: 3)
  emoji = Faker::Lorem.multibyte
  user.picposts.create!(content: "#{content}#{emoji}",
                        # picture: "#{count}-test-picture",
                        user_id: "#{count}-test-user_id",
                        picture: img_srcs.sample)
  count += 1
end
# }


all_users = User.all
first_user  = all_users[0]

following = all_users[25..50]
followers = all_users[2..24]
following.each { |followed| first_user.follow(followed) }
followers.each { |follower| follower.follow(first_user) }

all_picposts = Picpost.all

like_users = all_users[0..9]
like_posts = all_picposts[0..9]

like_users.each do |like_user|
  like_posts.each do |like_post|
    like_post.iine(like_user) 
  end
end
