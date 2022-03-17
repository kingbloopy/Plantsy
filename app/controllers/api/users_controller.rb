class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  # def update
  #   @user = selected_user
  #   if @user && @user.update_attributes(update_params)
  #     render :show
  #   elsif !@user
  #     render json: ['Could not locate user'], status: 400
  #   else
  #     render json: @user.errors.full_messages, status: 401
  #   end
  # end

  # def destroy
  #   @user = selected_user
  #   if @user
  #     @user.destroy
  #     render json: ['Account has successfully been deleted.']
  #   else
  #     render json: ['Could not find user']
  #   end
  # end

  private

  # def selected_user
  #   User.find_by(id: params[:id])
  # end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

  # def update_params
  #   params.require(:user).permit(:name)
  # end

end
