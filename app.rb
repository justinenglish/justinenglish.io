require 'sinatra/base'
require 'erb'



class JustinEnglish < Sinatra::Base
  get '/' do
    "Hello World"
  end
end

JustinEnglish.run!