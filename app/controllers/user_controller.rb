class UserController < ApplicationController
  def new
    @user = User.new
  end

  def create
    email = params[:email]
    password = params[:password]
    password_confirm = params[:password_confirm]

    if email.blank?
      render status: 400, json: { error: 'parameter `email` was not provided' }
    elsif password.blank?
      render status: 400, json: { error: 'parameter `password` was not provided' }
    elsif password_confirm.blank?
      render status: 400, json: { error: 'parameter `password_confirm` was not provided' }
    else
      @user = User.new(email: email, password: password, password_confirm: password_confirm)
      if @user.save
        render status: 200, json: { text: 'success' }
      else
        render status: 200, json: { text: 'user.save returned false' }
      end
    end  
  end

  def index
    q = params[:q]

    if q.blank?
      render status: 400, json: { error: 'Expected parameter `q` '}
    else
      render(
        status: 200,
        json: { }
      )
    end
  end
end