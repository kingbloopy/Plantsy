json.extract! product, :id, :title, :category, :description, :price, :quantity, :seller_id, :created_at

json.shop product.shop.name
json.photoURLs product.photos.map { |photo| url_for(photo) }