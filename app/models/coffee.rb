class Coffee < ApplicationRecord
    validates :name, presence: true
    validates :price, numericality: {greater_than: 0}
    
    has_many :reviews
    has_many :users, through: :reviews

    belongs_to :user #who created it

end
