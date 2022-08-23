class CoffeesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index 
        render json: Coffee.all, status: :ok
    end 

    def show
        coffee = Coffee.find(params[:id])
        render json: coffee, status: :ok
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
        coffee = Coffee.find(params[:id])
        coffee.destroy
        head :no_content 
    end 

    private
    
    #Review strong params and why they are useful with updates
    def coffee_params
        params.permit(:name, :brand, :price)
    end 

    def render_not_found_response
        render json: {error: "Coffee not found."}, status: :not_found
    end
end
