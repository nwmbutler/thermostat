require 'sinatra/base'
require 'json'
require_relative '/lib/thermostat'

class Thermostat < Sinatra::Base 

    get '/' do
        File.read('index.html')
    end

    get '/temperature' do 
        thermostat = Thermo.instance
        { temperature: thermostat.temperature }.to_json
    end

    post '/temperature' do 
        thermostat = Thermo.instance
        thermostat.update(params[:temperature])
        { status: 200 }.to_json
    end

    run! if app_file == $0

end