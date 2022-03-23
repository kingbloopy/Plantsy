class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
    render :index
  end

  def show
    # @product = Product.find(params[:id])
    @product = Product.with_attached_photos.find(params[:id])
    render :show
  end

  # def create
  #   @product = Product.new(product_params)
  #   if @product.save
  #     render :show
  #   else
  #     render json: @product.errors.full_messages, status: 404
  #   end
  # end

  private
  def product_params
    params.require(:product).permit(:title, :description, :category, :price, :quantity, :seller_id, photos: [])
  end

end
