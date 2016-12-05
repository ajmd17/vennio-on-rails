Rails.application.routes.draw do
  root to: 'application#index'
  # so that all pages will use the React Router
  get '*path', to: 'application#index'
  
  post 'register', to: 'user#create'
end
