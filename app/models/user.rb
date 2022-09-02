class User < ApplicationRecord
    has_many :reviews
    # has_many :created_coffees
    has_many :reviewed_coffees, through: :reviews, source: :coffee

    has_many :coffees #user created coffees
    
    validates :username, presence: true, uniqueness: true
    validates :email, uniqueness: true, presence: true

    has_secure_password

    def favorite_coffees
      fav_reviews = self.reviews.where(isFavorite: true)
      fav_coffees = fav_reviews.map{|fav_review| Coffee.find(fav_review[:coffee_id])}
      fav_coffees
    end 
end
