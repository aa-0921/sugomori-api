FROM ruby:2.5

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs 

RUN mkdir /sugomori-api
WORKDIR /sugomori-api
COPY Gemfile /sugomori-api/Gemfile
COPY Gemfile.lock /sugomori-api/Gemfile.lock
RUN bundle install
ADD . /sugomori-api
