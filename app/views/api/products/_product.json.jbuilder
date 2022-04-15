json.extract! product, :id, :title, :category, :description, :price, :quantity

json.sellerId :seller_id
json.date product.created_at.strftime("Listed on %b %e, %Y")
json.shop product.shop.name
json.sales product.shop.sales
json.photoURLs product.photos.map { |photo| url_for(photo) }
json.averageRating product.average_rating