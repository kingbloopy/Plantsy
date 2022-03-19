class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login(@user)
      render "api/users/show"
    elsif User.invalid_email?(params[:user][:email])
      render json: ['Email address is invalid.'], status: 401
    else
      render json: ['Password was incorrect.'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user 
      logout
      render json: { message: 'Logout successful' }
    else
      render json: ['Nobody signed in'], status: 404
    end
  end

end
