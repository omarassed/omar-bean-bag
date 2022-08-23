class AddCoffeeToReviews < ActiveRecord::Migration[7.0]
  def change
    add_reference :reviews, :coffee, null: false, foreign_key: true
  end
end
