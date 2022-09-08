class CoffeesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:index, :get_reviews]

    def index 
        render json: Coffee.all, status: :ok
    end 

    def show
        coffee = Coffee.find(params[:id])
        render json: coffee, include: :reviews, status: :ok
    end 

    def create
        coffee = Coffee.create!(coffee_params)
        render json: coffee, status: :created
    end 

    def update 
        coffee = Coffee.find(params[:id])
        coffee.update!(coffee_params)
        render json: coffee, status: :accepted
    end 

    def destroy
        coffee = Coffee.find(coffee_params[:id])
        coffee.destroy
        head :no_content 
    end 

    def get_reviews
        coffee = Coffee.find(params[:id])
        coffee_reviews = coffee.get_reviews 
        render json: coffee_reviews, status: :ok
    end


    private
    
    #Review strong params and why they are useful with updates
    def coffee_params
        params.permit(:name, :brand, :price, :reviews)
    end 

    def render_not_found_response
        render json: {error: "Coffee not found."}, status: :not_found
    end

   
end
