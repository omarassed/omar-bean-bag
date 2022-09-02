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
Coffee.create(name: "Big Bang Coffee", brand: "Peet's Coffee", price: 12.99, user_id: 1)
Coffee.create(name: "Original Blend", brand: "Dunkin' Donuts", price: 6.99, user_id: 2)
Coffee.create(name: "French Roast", brand: "Starbucks", price: 8.99, user_id: 2)
Coffee.create(name: "BreakfastBlend", brand: "Tim Horton's", price: 7.99, user_id: 3)
Coffee.create(name: "World's Strongest Coffee", brand: "Death Wish", price: 21.99, user_id: 3)
Coffee.create(name: "Safari Blend", brand: "Kahawa 1893", price: 16.95, user_id: 3)



#User 1 reviews
Review.create(rating: 1, comment: "Like drinking tar", isFavorite: false, user_id: 1, coffee_id: 4)
Review.create(rating: 3, comment: "think i should give it another try", isFavorite: false, user_id: 1, coffee_id: 3)
Review.create(rating: 5, comment: "Excellent!!!", isFavorite: true, user_id: 1, coffee_id: 7)
Review.create(rating: 5, comment: "Such coffee surely is brewed in heaven", isFavorite: true, user_id: 1, coffee_id: 6)
#User 2 reviews
Review.create(rating: 5, comment: "The best I ever did drink", isFavorite: true, user_id: 2, coffee_id: 2)
Review.create(rating: 1, comment: "I'm still traumautized from the taste", isFavorite: false, user_id: 2, coffee_id: 6)
Review.create(rating: 4, comment: "Great coffee", isFavorite: true, user_id: 2, coffee_id: 5)
Review.create(rating: 3, comment: "Kind of bland but not bad necessarily", isFavorite: false, user_id: 2, coffee_id: 3)
#User 3 review
Review.create(rating: 4, comment: "Delicious and moaky.", isFavorite: true, user_id: 3, coffee_id: 2)
Review.create(rating: 5, comment: "I must've died and went to heaven", isFavorite: true, user_id: 3, coffee_id: 1)
Review.create(rating: 3, comment: "A little too bitter", isFavorite: false, user_id: 3, coffee_id: 3)
Review.create(rating: 2, comment: "Felt like lapping up liquid carpet", isFavorite: false, user_id: 3, coffee_id: 4)