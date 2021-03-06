class CartItem < ApplicationRecord
  validates :product_id, :user_id, :quantity, presence: true

  belongs_to :product,
  foreign_key: :product_id,
  class_name: :Product

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  def total_price
    self.quantity * self.product.price
  end

  def shop
    {
      id: self.product.shop.id,
      name: self.product.shop.name,
      owner_id: self.product.shop.owner_id
    }
  end

  def available
    self.product.quantity
  end
end

