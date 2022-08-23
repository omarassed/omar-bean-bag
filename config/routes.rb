Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :coffees do
    resources :reviews, only: [:index, :show, :create, :destroy]
  end
  
  resources :reviews, only: [:index, :show, :create, :destroy]

  resources :users, only: [:index, :show, :create] do
    resources :reviews, only: [:index, :show, :create, :destroy]
  end
  
 
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  # Defines the root path route ("/")
  # root "articles#index"
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
