Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :coffees do
    resources :reviews, only: [:index, :show, :create, :destroy]
  end

  resources :reviews, only: [:index, :show, :create, :destroy]

  resources :users, only: [:index, :show, :create] do
    resources :reviews, only: [:index, :show, :create, :destroy]
  end
  
  get "/coffees/:id/get_reviews", to: "coffees#get_reviews"
  # post "/coffees/:id/write_review", to: "coffees#write_review"

  # get "/coffees/:coffee_id/reviews", to "reviews#index"
  get "/users/:id/favorite_coffees", to: "users#favorite_coffees"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  # Defines the root path route ("/")
  # root "articles#index"
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
