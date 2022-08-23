class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :isFavorite, :user_id, :coffee_id
end
