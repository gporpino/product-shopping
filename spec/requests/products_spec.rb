require 'rails_helper'

RSpec.describe "API V1 Products", type: :request do
  
  describe "get all products route", :type => :request do
    let!(:products) { FactoryBot.create_list(:product, 20) }
    before { get '/api/v1/products' }

    it 'returns all products' do
        expect(JSON.parse(response.body).size).to eq(20)
      end
    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end
  end
end
