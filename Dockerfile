FROM ruby:2.6.5

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs postgresql-client

RUN apt-get -y update
RUN apt-get install -y \
  curl \
  gnupg
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN apt-get install -y nodejs
RUN npm install npm@latest -g

RUN apt-get update && apt-get install -y curl apt-transport-https wget && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get install -y yarn

RUN apt-get install -y imagemagick libmagickcore-dev libmagickwand-dev
RUN mkdir /sugomori
WORKDIR /sugomori
ADD . /sugomori
COPY Gemfile /sugomori/Gemfile
COPY Gemfile.lock /sugomori/Gemfile.lock
RUN gem install bundler
RUN bundle install
RUN SECRET_KEY_BASE=placeholder bundle exec rails assets:precompile
RUN cd /sugomori/frontend && yarn install && NODE_ENV=production npm run build
