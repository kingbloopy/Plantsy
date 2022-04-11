class Product < ApplicationRecord
  validates :title, :description, :category, :price, :quantity, :seller_id, presence: true

  belongs_to :seller,
  foreign_key: :seller_id,
  class_name: :User

  has_many_attached :photos

  has_one :shop,
  through: :seller,
  source: :shop

  has_many :carts,
  foreign_key: :product_id,
  class_name: :CartItem

  has_many :reviews,
  foreign_key: :product_id,
  class_name: :Review
  
end
