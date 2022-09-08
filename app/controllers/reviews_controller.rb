class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]
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
        if params[:coffee_id] 
            binding.break
            coffee = Coffee.find(params[:coffee_id])
            review = Review.create!(user_id: @current_user.id, coffee_id: coffee.id, rating: params[:rating], comment: params[:comment])
        end
        # review = Review.create!(review_params)
        # render json: review, status: :created
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end
    private

    def review_params
        params.permit(:rating, :comment, :coffee_id)
    end
end
