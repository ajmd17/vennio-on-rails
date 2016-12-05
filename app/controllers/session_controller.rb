class SessionController < ApplicationController
  def new
  end

  def create
    user = User.authenticate(params[:email], params[:password])
    if user
      session[:user_id] = user.id
      render(
        status: 200, 
        json: { user_id: session[:user_id] }
      )
    else
      # invalid email or password.
      render(
        status: 200,
        json: { user_id: nil }
      )
    end
  end

  def destroy
    session[:user_id] = nil
    render(
      status: 200,
      json: { user_id: nil }
    )
  end

  def check
    if session[:user_id].blank?
      render(
        status: 200, 
        json: { user_id: session[:user_id] }
      )
    else
      render(
        status: 200,
        json: { user_id: nil }
      )
    end
  end
end
