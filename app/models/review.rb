class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5)}, :reviewer_id, :product_id

  belongs_to :product,
  foreign_key: :product_id,
  class_name: Product

  belongs_to :reviewer,
  foreign_key: :reviewer_id,
  class_name: :User
end
