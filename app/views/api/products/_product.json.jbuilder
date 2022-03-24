json.extract! product, :id, :title, :category, :description, :price, :quantity, :seller_id, :created_at

json.photoURLs product.photos.map { |photo| url_for(photo) }