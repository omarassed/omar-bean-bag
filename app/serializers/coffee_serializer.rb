class CoffeeSerializer < ActiveModel::Serializer
  has_many :reviews
  attributes :id, :name, :brand, :price, :user_id
end
