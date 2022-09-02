class Review < ApplicationRecord
    belongs_to :coffee
    belongs_to :user

    # def getFavorites
    #     if self.isFavorite
    #     end
    # end
end
