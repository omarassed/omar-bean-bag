# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Coffee.destroy_all
Review.destroy_all 

User.create(username: "bobby123", email: "brownt@123.com", password: "123")
User.create(username: "billy123", email: "browns@123.com", password: "123")
User.create(username: "bubba123", email: "brownj@123.com", password: "123")

Coffee.create(name: "Espresso Roast", brand: "Starbucks", price: 7.99, user_id: 1)
Coffee.create(name: "French Roast", brand: "Starbucks", price: 8.99, user_id: 2)
Coffee.create(name: "BreakfastBlend", brand: "Tim Horton's", price: 7.99, user_id: 3)
Coffee.create(name: "World's Strongest Coffee", brand: "Death Wish", price: 21.99, user_id: 3)

Review.create(rating: 4, comment: "Delicious and moaky.", isFavorite: true, user_id: 3, coffee_id: 2)
Review.create(rating: 5, comment: "The best I ever did drink", isFavorite: true, user_id: 2, coffee_id: 2)
Review.create(rating: 1, comment: "Like drinking tar", isFavorite: false, user_id: 1, coffee_id: 4)
Review.create(rating: 3, comment: "think i should give it another try", isFavorite: false, user_id: 1, coffee_id: 3)