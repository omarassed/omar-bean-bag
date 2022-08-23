class User < ApplicationRecord
    has_many :reviews
    has_many :coffees
    has_many :coffees, through: :reviews
    
    validates :username, presence: true, uniqueness: true
    validates :email, uniqueness: true, presence: true

    has_secure_password
end
