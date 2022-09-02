class ReviewsController < ApplicationController
    skip_before_action :authorize, only: :index
    def index 
        
        if params[:coffee_id] 
            coffee = Coffee.find(params[:coffee_id])
            
            coffee_reviews = coffee.reviews
           
        elsif params[:user_id]
            user = User.find(params[:user_id])
             coffee_reviews = user.reviews

        else 
            coffee_reviews = Review.all
        end
    
        render json: coffee_reviews, status: :ok
    end

    def show 
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def create 
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end
    private

    def review_params
        params.permit(:rating, :comment, :user_id, :coffee_id)
    end
end
