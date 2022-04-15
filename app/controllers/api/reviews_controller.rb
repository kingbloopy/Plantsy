class Api::ReviewsController < ApplicationController
  
  def index
    @reviews = Review.where(product_id: params[:product_id])
    render :index
  end

  def create
    @review = Review.new(review_params)
    @review.reviewer_id = current_user.id
    if @review.save
      render :index
    else
      render json: @review.errors.full_messages, status: 422
    end
  end
  
  def update
    @review = current_user.reviews.find_by(id: params[:id])
    if @review.update(review_params)
      render :index
    else
      render json: @review.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @review = current_user.reviews.find_by(id: params[:id])
    if @review
      @review.destroy
      render :index
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:rating, :content, :product_id)
  end
end
