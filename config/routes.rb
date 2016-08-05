Rails.application.routes.draw do
  root 'graphs#index'
  resources :prediction
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
