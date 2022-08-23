class CoffeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :price, :user_id
end
