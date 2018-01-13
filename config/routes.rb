Rails.application.routes.draw do
  resources :microposts
  resources :users
  get '/users/getPostByUser/:id' => 'users#getPostByUser'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
