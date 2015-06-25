require 'sinatra'
require 'sinatra/base'

class Website < Sinatra::Base

  set :views, Proc.new {File.join(root, '/views')}
  set :public_folder, Proc.new { File.join(root, '/public') }

  get '/' do
    erb :index
  end

  run! if app_file == $0
end
