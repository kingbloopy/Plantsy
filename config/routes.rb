Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :destroy] do
    end
    resource :session, only: [:create, :destroy]
    resources :products, only: [:create, :show, :index, :update, :destroy]
  end


  root to: "static_pages#root"
end
