require 'sinatra/base'
require 'erb'



class JustinEnglish < Sinatra::Base
  get '/index.html' do
    "Hello World"
  end
end

JustinEnglish.run!