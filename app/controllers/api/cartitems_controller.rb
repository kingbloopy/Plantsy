class Api::CartController < ApplicationController

  def index
    @cart = CartItem.all.select{|product| product.user_id == current_user.id}
    render :index
  end

  def create
    @cartitem = CartItem.new(cartitem_params)
    if @cartitem.save && logged_in?
      redirect_to action: 'index'
    else
      render json: @cartitem.errors.full_messages, status: 404
    end
  end

  def update
    if logged_in?
      @cartitem = CartItem.find_by(id: params[:id])
      if @cartitem && (params[:increase] == true)
        @cartitem.quantity += get_quantity
        @cartitem.save
        @cart = CartItem.all.select{|product| product.user_id == current_user.id}
        render :index
      else
        if @cartitem.update(cartitem_params)
          @cart = CartItem.all.select{|product| product.user_id == current_user.id}
          render :index
        else
          render json: @cartitem.errors.full_messages, status: 404
        end
      end
    else
      render json: ["Please sign in to access cart"], status: 404
    end
  end

  def destroy
    if logged_in?
      @cartitem = CartItem.find_by(id: params[:id])
      @cartitem.destroy
      @cart = CartItem.all.select{|product| product.user_id == current_user.id}
      render :index
      else
      render json: ["Please sign in to access cart"], status: 404
    end
  end

  private
  def cartitem_params
    params.require(:cartitem).permit(:product_id, :user_id, :quantity)
  end

  def get_quantity
    params[:cartitem][:quantity].to_i
  end
end
