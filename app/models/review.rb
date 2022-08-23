class Review < ApplicationRecord
    belongs_to :coffee
    belongs_to :user
end
