class Api::ProductsController < ApplicationController

  def index
    if params[:category]
      @products = Product.where(category: params[:category])
    else
    @products = Product.all
    end
    render :index
  end

  def show
    @product = Product.with_attached_photos.find(params[:id])
    render :show
  end

  # def create
  #   @product = Product.new(product_params)
  #   @product.seller_id = current_user.id
  #   if @product.save
  #     render :show
  #   else
  #     render json: @product.errors.full_messages, status: 404
  #   end
  # end

  # def destroy
  #   @product = current_user.products.find_by(id: params[:id])
  #   if @product && @product.destroy
  #     render json: @product.id
  #   else
  #     render json: @product.errors.full_messages, status: 404
  #   end
  # end

  # def update
  #   @product = current_user.products.find_by(id: params[:id])
  #   if @product && @product.update(pin_params)
  #     render :show
  #   else
  #     render json: @product.errors.full_messages, status: 422
  #   end
  # end

  private
  def product_params
    params.require(:product).permit(:title, :description, :category, :price, :quantity, :seller_id, photos: [])
  end

end
