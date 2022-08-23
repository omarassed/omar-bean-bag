class UsersController < ApplicationController
    def index
        render json: User.all 
    end
    
      def show 
        user = User.find(session[:id])
        render json: user, status: :ok
      end 
    
      def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :ok
      end
    
    private 
    
      def user_params
        params.permit(:username, :email, :password)
      end 
    end
