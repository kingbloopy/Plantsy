json.extract! product, :id, :title, :category, :description, :price, :quantity, :seller_id

json.date product.created_at.strftime("Listed on %a %e, %Y")
json.shop product.shop.name
json.sales product.shop.sales
json.photoURLs product.photos.map { |photo| url_for(photo) }