class Shop < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  belongs_to :owner,
  foreign_key: :owner_id,
  class_name: :User
end
