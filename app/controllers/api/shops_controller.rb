class Api::ShopsController < ApplicationController
  def create
    @shop = shop.new(shop_params)
    @shop.owner_id = current_user.id
    if @shop.save
      render :show
    else
      render json: @shop.errors.full_messages, status: 404
    end
  end

  def show
    @shop = Shop.find(params[:id])
    if @shop
      render :show
    end
  end

  def update
    @shop = current_user.shop.find_by(id: params[:id])
    if @shop && @shop.update(shop_params)
      render :show
    else
      render json: @shop.errors.full_messages, status: 422
    end
  end

  private
  def shop_params
    params.require(:shop).permit(:name)
  end
end
