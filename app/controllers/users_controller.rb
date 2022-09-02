class UsersController < ApplicationController
  skip_before_action :authorize, only: [:index, :create, :show, :favorite_coffees]

    def index
        render json: User.all 
    end
    
    def show 
        user = User.find(params[:id])
        render json: user, status: :ok
        # render json: user, status: :ok
    end 
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :ok
    end
    
    # def favoriteCoffees
    #   fav_reviews = self.reviews.where(isFavorite: true)
    #   fav_reviews.map(|fav_reviews| Coffee.find(fav_review[:coffee_id]))
    # end 

    def favorite_coffees
      user = User.find(params[:id])
      fav_coffees = user.favorite_coffees
      render json: fav_coffees
    end

    private 
    
      def user_params
        params.permit(:username, :email, :password)
      end 
    end
