Rails.application.routes.draw do
  root to: "venues#index"

  namespace :api do
    resources :venues
  end

  resources :venues

end
