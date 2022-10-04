Rails.application.routes.draw do
  resources :customers
  post "/login", to: "sessions#create"
  get "/me", to: "customers#show"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
